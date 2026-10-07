'use client'
/*
  LoadingBar.jsx — 3D model alanı üstünde duran loading kartı.
  Sadece progress bar + yüzde gösterir. Tema değişkenlerini kullanır.
  SceneWrapper tarafından sadece masaüstünde render edilir.

  İlerleme: GLB'lerin indirilen byte'ı (%0–95). %100 ancak sahne gerçekten
  ekrana basıldığında (GLB + HDR ortamı hazır → markSceneReady) gösterilir.
  Değer asla geri gitmez. (drei useProgress dosya sayısına baktığı için zıplıyordu.)
*/

import { useEffect, useState } from 'react'
import { useSceneLoad } from '@/components/3d/loadProgress'

export default function LoadingBar() {
    const { fraction, ready: finished } = useSceneLoad()
    const target = finished ? 100 : Math.min(fraction * 95, 95)

    // Mount anında sahne zaten hazırsa (client-side geri dönüş) hiç gösterme
    const [needed] = useState(!finished)
    const [progress, setProgress] = useState(0)
    const [visible, setVisible] = useState(true)

    // Monoton: sadece ileri gider (render sırasında türetilmiş state güncellemesi)
    if (target > progress) setProgress(target)
    useEffect(() => {
        if (finished) {
            const t = setTimeout(() => setVisible(false), 500)
            return () => clearTimeout(t)
        }
    }, [finished])

    if (!needed) return null

    return (
        <div
            style={{
                position: 'fixed',
                right: '20%',
                top: '38%',
                transform: 'translateY(-50%)',
                width: '220px',
                zIndex: 10,
                pointerEvents: 'none',
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.5s ease',
            }}
        >
            <div
                style={{
                    padding: '14px 18px',
                    borderRadius: '12px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-accent)',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
                }}
            >
                {/* Progress bar */}
                <div
                    style={{
                        height: '2px',
                        borderRadius: '2px',
                        background: 'var(--border)',
                        overflow: 'hidden',
                    }}
                >
                    <div
                        style={{
                            height: '100%',
                            width: `${progress}%`,
                            background: 'linear-gradient(90deg, var(--accent) 0%, #818cf8 100%)',
                            boxShadow: '0 0 8px var(--accent)',
                            borderRadius: '2px',
                            transition: 'width 0.35s ease',
                        }}
                    />
                </div>

                {/* Yüzde */}
                <p
                    style={{
                        marginTop: '7px',
                        fontSize: '10px',
                        fontFamily: 'monospace',
                        letterSpacing: '0.08em',
                        color: 'var(--accent)',
                        opacity: 0.7,
                        textAlign: 'right',
                        margin: '6px 0 0 0',
                    }}
                >
                    {Math.round(progress)}%
                </p>
            </div>
        </div>
    )
}
