'use client'
/*
  LoadingBar.jsx — 3D model alanı üstünde duran loading kartı.
  Sadece progress bar + yüzde gösterir. Tema değişkenlerini kullanır.
  Mobilde Scene render edilmez → active olmaz → hiç göstermez.
*/

import { useProgress } from '@react-three/drei'
import { useEffect, useState } from 'react'

export default function LoadingBar() {
    const { active, progress } = useProgress()
    const [started, setStarted] = useState(false)
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        if (active) setStarted(true)
    }, [active])

    useEffect(() => {
        if (started && !active && progress >= 100) {
            const t = setTimeout(() => setVisible(false), 500)
            return () => clearTimeout(t)
        }
    }, [started, active, progress])

    if (!started) return null

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
