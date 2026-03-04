'use client'
/*
  SceneWrapper.jsx — next/dynamic ile ssr:false yükler.
  • opacity fade-in: GLB yüklenirken kaba bir flash yerine yumuşak geçiş
  • reactStrictMode: false (next.config.mjs) birincil fix; bu ikincil görsel yumuşatıcı
*/

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('./Scene'), {
  ssr: false,
  loading: () => null,
})

export default function SceneWrapper() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    // Bir sonraki frame'de opacity 0→1 — yükleme anındaki sert flash'ı maskeler
    const id = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <div
      style={{
        opacity: ready ? 1 : 0,
        transition: 'opacity 0.6s ease',
      }}
    >
      <Scene />
    </div>
  )
}
