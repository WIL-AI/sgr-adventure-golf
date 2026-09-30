/**
 * Gut Wissmannshof - Universal Contact & Form Dispatcher
 * Ensures all inquiries reliably reach info@wissmannshof.de with "[via Webseite]" tag.
 */

window.SGRContact = (function() {
    'use strict';

    const TARGET_EMAIL = 'info@wissmannshof.de';

    function buildEmailData(opts) {
        const source = opts.source || 'Webseite';
        const name = opts.name || 'Interessent';
        const email = opts.email || '';
        const phone = opts.phone || '';
        const rawSubject = opts.subject || `Kontaktanfrage von ${name}`;
        const subject = rawSubject.startsWith('[via Webseite]') ? rawSubject : `[via Webseite] ${rawSubject}`;
        const message = opts.message || '';
        const details = opts.details || {};

        let body = `Hallo Team Wissmannshof,\n\n`;
        body += `eine neue Anfrage wurde über das Webportal auf wissmannshof.golf (via Webseite) gesendet:\n\n`;
        body += `Formular / Herkunft: ${source}\n`;
        body += `Name:               ${name}\n`;
        body += `E-Mail:             ${email}\n`;
        if (phone) {
            body += `Telefon:            ${phone}\n`;
        }
        body += `\n`;

        if (Object.keys(details).length > 0) {
            body += `Angaben / Details:\n`;
            body += `----------------------------------------------------\n`;
            for (const [k, v] of Object.entries(details)) {
                if (v) body += `${k}: ${v}\n`;
            }
            body += `\n`;
        }

        if (message) {
            body += `Ihre Nachricht / Notiz:\n`;
            body += `----------------------------------------------------\n`;
            body += `${message}\n\n`;
        }

        body += `====================================================\n`;
        body += `Hinweis: Diese Anfrage wurde über das Online-Formular auf wissmannshof.golf (via Webseite) gesendet.\n`;
        body += `Mit freundlichen Grüßen,\n${name}`;

        return { subject, body, targetEmail: TARGET_EMAIL, name, email, phone, source, message, details };
    }

    function showSendModal(data) {
        let modal = document.getElementById('sgr-contact-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'sgr-contact-modal';
            modal.style.cssText = `
                position: fixed; inset: 0; background: rgba(13,34,24,0.75);
                backdrop-filter: blur(6px); z-index: 99999; display: flex;
                align-items: center; justify-content: center; padding: 20px;
            `;
            document.body.appendChild(modal);
        }

        const encodedSubject = encodeURIComponent(data.subject);
        const encodedBody = encodeURIComponent(data.body);
        const mailtoUrl = `mailto:${data.targetEmail}?subject=${encodedSubject}&body=${encodedBody}`;

        // Webmail direct URLs
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(data.targetEmail)}&su=${encodedSubject}&body=${encodedBody}`;
        const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(data.targetEmail)}&subject=${encodedSubject}&body=${encodedBody}`;

        modal.innerHTML = `
            <div style="background: #fff; border-radius: 14px; max-width: 520px; width: 100%; padding: 32px 28px; box-shadow: 0 20px 50px rgba(0,0,0,0.3); font-family: 'Plus Jakarta Sans', sans-serif; color: #19231E; text-align: left; position: relative;">
                <button id="sgr-modal-close" style="position: absolute; top: 18px; right: 18px; background: none; border: none; font-size: 22px; cursor: pointer; color: #888;">&times;</button>
                
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
                    <div style="width: 44px; height: 44px; border-radius: 50%; background: #143324; color: #D4AF37; display: flex; align-items: center; justify-content: center; font-size: 22px;">✉️</div>
                    <div>
                        <h3 style="margin: 0; font-size: 1.25rem; color: #143324;">Nachricht vorbereitet</h3>
                        <span style="font-size: 0.8rem; color: #888;">Ziel: ${data.targetEmail} (via Webseite)</span>
                    </div>
                </div>

                <p style="font-size: 0.92rem; color: #555; line-height: 1.6; margin-bottom: 20px;">
                    Ihre Anfrage an Gut Wissmannshof wurde mit Betreff <strong>„${data.subject}“</strong> fertig zusammengestellt.
                </p>

                <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px;">
                    <a href="${mailtoUrl}" id="sgr-btn-mailto" style="background: #143324; color: #fff; text-align: center; padding: 14px; border-radius: 8px; font-weight: 700; text-decoration: none; display: block;">
                        🚀 Im Standard-E-Mail-Programm absenden
                    </a>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                        <a href="${gmailUrl}" target="_blank" rel="noopener" style="background: #EA4335; color: #fff; text-align: center; padding: 10px; border-radius: 6px; font-size: 0.85rem; font-weight: 600; text-decoration: none;">
                            In Gmail öffnen ↗
                        </a>
                        <a href="${outlookUrl}" target="_blank" rel="noopener" style="background: #0078D4; color: #fff; text-align: center; padding: 10px; border-radius: 6px; font-size: 0.85rem; font-weight: 600; text-decoration: none;">
                            In Outlook öffnen ↗
                        </a>
                    </div>
                </div>

                <div style="border-top: 1px solid #eee; padding-top: 14px; text-align: center;">
                    <button id="sgr-btn-copy" style="background: transparent; border: 1px solid #ccc; padding: 8px 16px; border-radius: 6px; font-size: 0.82rem; cursor: pointer; color: #555;">
                        📋 Text in Zwischenablage kopieren
                    </button>
                    <span id="sgr-copy-notice" style="display: none; font-size: 0.78rem; color: #175430; margin-left: 8px;">Kopiert!</span>
                </div>
            </div>
        `;

        modal.style.display = 'flex';

        document.getElementById('sgr-modal-close').onclick = () => { modal.style.display = 'none'; };
        document.getElementById('sgr-btn-copy').onclick = () => {
            navigator.clipboard.writeText(`Betreff: ${data.subject}\nAn: ${data.targetEmail}\n\n${data.body}`).then(() => {
                document.getElementById('sgr-copy-notice').style.display = 'inline';
            });
        };

        // Immediately trigger mailto once synchronously
        window.location.href = mailtoUrl;
    }

    async function send(opts) {
        const data = buildEmailData(opts);

        // 1. Try PHP API endpoint if available on server
        try {
            const res = await fetch('api/contact.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    subject: data.subject,
                    message: data.message,
                    source: data.source,
                    details: data.details
                })
            });

            if (res.ok) {
                const json = await res.json().catch(() => null);
                if (json && json.success && json.mailSent) {
                    return { success: true, method: 'api' };
                }
            }
        } catch (e) {
            // API not supported on static host
        }

        // 2. Launch Client Mail Dispatch Modal + Synchronous Mailto
        showSendModal(data);
        return { success: true, method: 'client' };
    }

    return {
        send: send,
        showSendModal: showSendModal,
        buildEmailData: buildEmailData
    };
})();
