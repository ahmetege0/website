/*
  loadProgress.js — 3D sahne yükleme ilerlemesi (GLB byte'ları + hazır sinyali)
  Drei useProgress dosya SAYISINA bakıyor ve GLB içindeki texture'lar sonradan
  keşfedildikçe toplam büyüyor (90% → 36% zıplaması). Burada GLTFLoader.load
  sarılıp her GLB için indirilen byte takip edilir.
  Kullanım: useGLTF(url, true, true, trackGLTFProgress)
  Bitiş sinyali: markSceneReady() — Scene tüm Suspense'ler (GLB + HDR) çözülüp
  ilk kez commit edildiğinde çağrılır.
*/

import { useSyncExternalStore } from 'react'

const files = new Map() // url -> { loaded, total, done }
const listeners = new Set()
let sceneReady = false
let snapshot = { fraction: 0, ready: false }

function emit() {
    const entries = [...files.values()]
    const fraction = entries.length
        ? entries.reduce((sum, f) => sum + (f.done ? 1 : f.total ? Math.min(f.loaded / f.total, 1) : 0), 0) / entries.length
        : 0
    snapshot = { fraction, ready: sceneReady }
    listeners.forEach((l) => l())
}

export function markSceneReady() {
    if (sceneReady) return
    sceneReady = true
    emit()
}

export function trackGLTFProgress(loader) {
    if (loader.__progressTracked) return
    loader.__progressTracked = true

    const load = loader.load.bind(loader)
    loader.load = (url, onLoad, onProgress, onError) => {
        if (!files.has(url)) files.set(url, { loaded: 0, total: 0, done: false })
        emit()
        return load(
            url,
            (data) => {
                files.get(url).done = true
                emit()
                onLoad?.(data)
            },
            (e) => {
                const f = files.get(url)
                f.loaded = e.loaded
                f.total = e.lengthComputable ? e.total : 0
                emit()
                onProgress?.(e)
            },
            onError
        )
    }
}

const subscribe = (l) => {
    listeners.add(l)
    return () => listeners.delete(l)
}
const serverSnapshot = { fraction: 0, ready: false }

export function useSceneLoad() {
    return useSyncExternalStore(subscribe, () => snapshot, () => serverSnapshot)
}
