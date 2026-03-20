import { Resend } from 'resend';

export async function POST(request) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    try {
        const { subject, email, message } = await request.json();

        if (!subject || !email || !message) {
            return Response.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const { data, error } = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: ['aege0601@gmail.com'],
            replyTo: email,
            subject: `[Portfolio] ${subject}`,
            html: `
                <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; background: #1D1C1A; color: #e2e8f0; padding: 32px; border-radius: 12px; border: 1px solid rgba(100, 255, 218, 0.15);">
                    <h2 style="color: #64ffda; font-size: 1.2rem; margin-bottom: 4px; letter-spacing: 0.05em; text-transform: uppercase;">Yeni Mesaj — ahmetege.dev</h2>
                    <p style="color: #8892b0; font-size: 0.82rem; margin-top: 0; margin-bottom: 24px;">${new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' })}</p>
                    
                    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                        <tr>
                            <td style="color: #8892b0; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.06); width: 100px;">Gönderen</td>
                            <td style="color: #e2e8f0; font-size: 0.9rem; padding: 8px 0 8px 16px; border-bottom: 1px solid rgba(255,255,255,0.06);">${email}</td>
                        </tr>
                        <tr>
                            <td style="color: #8892b0; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.06);">Konu</td>
                            <td style="color: #e2e8f0; font-size: 0.9rem; padding: 8px 0 8px 16px; border-bottom: 1px solid rgba(255,255,255,0.06);">${subject}</td>
                        </tr>
                    </table>
                    
                    <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(100, 255, 218, 0.1); border-radius: 8px; padding: 16px;">
                        <p style="color: #8892b0; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 10px 0;">Mesaj</p>
                        <p style="color: #e2e8f0; font-size: 0.92rem; line-height: 1.65; margin: 0; white-space: pre-wrap;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
                    </div>
                </div>
            `,
        });

        if (error) {
            console.error('Resend error:', error);
            return Response.json({ error: error.message }, { status: 500 });
        }

        return Response.json({ success: true, id: data?.id });

    } catch (err) {
        console.error('Contact API error:', err);
        return Response.json({ error: 'Internal server error' }, { status: 500 });
    }
}
