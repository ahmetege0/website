/*
  ContactForm.jsx — Laptop Ekranına Gömülü İletişim Formu
  Drei <Html transform> ile Object_19 (Layar) mesh'i üzerine yerleştirilir.
  pointer-events: auto → kullanıcı input'lara tıklayabilir.
*/

'use client'

import { useState } from 'react'

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState('idle') // idle | sending | sent | error

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('sending')
        await new Promise((r) => setTimeout(r, 1200))
        setStatus('sent')
    }

    return (
        <div style={{
            width: '420px',
            minHeight: '320px',
            padding: '28px 32px',
            background: 'rgba(5, 5, 15, 0.88)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '12px',
            border: '1px solid rgba(99, 102, 241, 0.3)',
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
            color: '#e2e8f0',
            boxShadow: '0 0 60px rgba(99, 102, 241, 0.12), inset 0 1px 0 rgba(255,255,255,0.05)',
            pointerEvents: 'auto',
            userSelect: 'text',
        }}>
            {status === 'sent' ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>✅</div>
                    <p style={{ fontSize: '1rem', color: '#a5b4fc', fontWeight: 600 }}>
                        Mesajın alındı!
                    </p>
                    <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '6px' }}>
                        En kısa sürede yanıt vereceğim.
                    </p>
                </div>
            ) : (
                <>
                    {/* Header */}
                    <div style={{ marginBottom: '20px', borderBottom: '1px solid rgba(99,102,241,0.2)', paddingBottom: '16px' }}>
                        <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#a5b4fc', margin: 0, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                            ✉ İletişime Geç
                        </h2>
                        <p style={{ fontSize: '0.72rem', color: '#475569', margin: '4px 0 0' }}>
                            ahmetege.dev · aege0601@gmail.com
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Adın"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                style={inputStyle}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="E-posta"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                style={inputStyle}
                            />
                        </div>
                        <textarea
                            name="message"
                            placeholder="Mesajın..."
                            required
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            style={{ ...inputStyle, resize: 'none', lineHeight: '1.5' }}
                        />
                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            style={{
                                padding: '11px',
                                background: status === 'sending'
                                    ? 'rgba(99, 102, 241, 0.3)'
                                    : 'linear-gradient(135deg, rgba(99,102,241,0.8), rgba(139,92,246,0.8))',
                                border: '1px solid rgba(99, 102, 241, 0.5)',
                                borderRadius: '8px',
                                color: '#fff',
                                fontWeight: 700,
                                fontSize: '0.85rem',
                                cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                                transition: 'all 0.2s',
                                letterSpacing: '0.04em',
                            }}
                        >
                            {status === 'sending' ? 'Gönderiliyor...' : 'Gönder →'}
                        </button>
                    </form>
                </>
            )}
        </div>
    )
}

const inputStyle = {
    padding: '10px 12px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(99, 102, 241, 0.2)',
    borderRadius: '8px',
    color: '#e2e8f0',
    fontSize: '0.82rem',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
    pointerEvents: 'auto',
    fontFamily: 'inherit',
}
