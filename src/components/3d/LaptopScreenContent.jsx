/*
  LaptopScreenContent.jsx
  Laptop ekranına Drei Html ile gömülü tıklanabilir iletişim kartları.
  GitHub, LinkedIn, Email, Telefon — linkler/ikonlar lib/contactLinks, label/açıklama dile göre.
*/

'use client'

import React from 'react'
import { useLanguage } from '@/lib/LanguageContext'
import { translations } from '@/lib/translations'
import { CONTACT_HREFS, linkTarget, ContactIcon } from '@/lib/contactLinks'

const COLORS = ['#ffffff', '#38bdf8', '#fbbf24', '#4ade80']

export default function LaptopScreenContent() {
    const { lang } = useLanguage()
    const t = translations[lang].contact

    return (
        <div style={{
            width: '500px',
            padding: '10px',
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
            pointerEvents: 'auto',
            userSelect: 'none',
            boxSizing: 'border-box',
        }}>
            {/* İkon Kartları */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {t.links.map((link, i) => (
                    <a
                        key={link.label}
                        href={CONTACT_HREFS[i]}
                        target={linkTarget(CONTACT_HREFS[i])}
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center',
                            padding: '20px 10px', gap: '1px',
                            background: 'rgba(255,255,255,0.06)',
                            border: `1.5px solid ${COLORS[i]}33`,
                            borderRadius: '15px', textDecoration: 'none',
                            cursor: 'pointer', pointerEvents: 'auto',
                            transition: 'background 0.2s, border-color 0.2s',
                            boxSizing: 'border-box',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255,255,255,0.09)'
                            e.currentTarget.style.borderColor = COLORS[i] + '55'
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                        }}
                    >
                        <div style={{
                            width: 40, height: 40, borderRadius: '10px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            background: `${COLORS[i]}30`, color: COLORS[i],
                            flexShrink: 0,
                        }}>
                            <ContactIcon index={i} width={20} height={20} strokeWidth={1.8} />
                        </div>
                        <p style={{ margin: 0, fontWeight: 700, fontSize: '0.72rem', color: '#f1f5f9', textAlign: 'center' }}>{link.label}</p>
                        <p style={{ margin: 0, fontSize: '0.6rem', color: COLORS[i], fontFamily: 'monospace', textAlign: 'center', wordBreak: 'break-all' }}>{link.value}</p>
                        <p style={{ margin: 0, fontSize: '0.56rem', color: 'rgba(255,255,255,0.35)', textAlign: 'center' }}>{link.description}</p>
                    </a>
                ))}
            </div>
        </div>
    )
}
