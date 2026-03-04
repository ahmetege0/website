/*
  LaptopScreenContent.jsx
  Laptop ekranına Drei Html ile gömülü tıklanabilir iletişim kartları.
  GitHub, LinkedIn, Email, Telefon — gerçek linkler, pointer-events: auto.
*/

'use client'

import React from 'react'

const LINKS = [
    {
        href: 'https://github.com/ahmetege0',
        label: 'GitHub',
        value: '@ahmetege0',
        desc: 'Kod & projeler',
        color: '#e2e8f0',
        icon: (
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
        ),
    },
    {
        href: 'https://www.linkedin.com/in/ahmet-ege-cse/',
        label: 'LinkedIn',
        value: 'ahmet-ege-cse',
        desc: 'Profesyonel ağ',
        color: '#0077B5',
        icon: (
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        href: 'mailto:aege0601@gmail.com',
        label: 'E-posta',
        value: 'aege0601@gmail.com',
        desc: 'Doğrudan mesaj',
        color: '#f59e0b',
        icon: (
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        href: 'tel:+905527054964',
        label: 'Telefon',
        value: '+90 552 705 49 64',
        desc: 'Ara veya WhatsApp',
        color: '#22c55e',
        icon: (
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        ),
    },
]

export default function LaptopScreenContent() {
    return (
        <div style={{
            width: '280px',
            padding: '14px 12px',
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
            pointerEvents: 'auto',
            userSelect: 'none',
        }}>
            {/* Sahte OS Toolbar */}
            <div style={{
                display: 'flex', alignItems: 'center', gap: '5px',
                marginBottom: '12px', paddingBottom: '10px',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
            }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff5f57' }} />
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ffbd2e' }} />
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#28c840' }} />
                <span style={{ marginLeft: 6, fontSize: '0.6rem', color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace' }}>
                    ahmetege.dev
                </span>
            </div>

            {/* İkon Kartları */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '7px' }}>
                {LINKS.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith('mailto') || link.href.startsWith('tel') ? undefined : '_blank'}
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center',
                            padding: '12px 8px', gap: '7px',
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: '10px', textDecoration: 'none',
                            cursor: 'pointer', pointerEvents: 'auto',
                            transition: 'background 0.2s, border-color 0.2s',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255,255,255,0.09)'
                            e.currentTarget.style.borderColor = link.color + '55'
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                        }}
                    >
                        <div style={{
                            width: 38, height: 38, borderRadius: '10px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            background: `${link.color}18`, color: link.color,
                        }}>
                            {/* SVG'leri 20px'e küçült */}
                            {React.cloneElement(link.icon, { width: 20, height: 20 })}
                        </div>
                        <p style={{ margin: 0, fontWeight: 700, fontSize: '0.7rem', color: '#f1f5f9' }}>{link.label}</p>
                        <p style={{ margin: 0, fontSize: '0.6rem', color: link.color, fontFamily: 'monospace' }}>{link.value}</p>
                        <p style={{ margin: 0, fontSize: '0.56rem', color: 'rgba(255,255,255,0.35)' }}>{link.desc}</p>
                    </a>
                ))}
            </div>

            <p style={{
                textAlign: 'center', marginTop: '10px', fontSize: '0.55rem',
                color: 'rgba(255,255,255,0.2)', fontFamily: 'monospace',
            }}>
                İstanbul 🇹🇷 — Uzaktan açık
            </p>
        </div>
    )
}
