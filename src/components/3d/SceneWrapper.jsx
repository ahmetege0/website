'use client'
/*
  SceneWrapper.jsx — next/dynamic ile ssr:false yükler.
  • Sadece masaüstünde (≥1024px) render edilir: mobilde Scene modülü import
    edilmez → GLB'ler indirilmez, loading bar da çıkmaz.
  • opacity fade-in: GLB yüklenirken kaba bir flash yerine yumuşak geçiş
  • reactStrictMode: false (next.config.mjs) birincil fix; bu ikincil görsel yumuşatıcı
*/

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import LoadingBar from '@/components/LoadingBar'
import { useIsDesktop } from '@/lib/useIsDesktop'

const Scene = dynamic(() => import('./Scene'), {
  ssr: false,
  loading: () => null,
})

export default function SceneWrapper() {
  const isDesktop = useIsDesktop()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    // Bir sonraki frame'de opacity 0→1 — yükleme anındaki sert flash'ı maskeler
    const id = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(id)
  }, [])

  if (!isDesktop) return null

  return (
    <>
      {/* Loading bar — GLB dosyaları yüklenirken gösterilir */}
      <LoadingBar />
      <div
        style={{
          opacity: ready ? 1 : 0,
          transition: 'opacity 0.6s ease',
        }}
      >
        <Scene />
      </div>
    </>
  )
}
