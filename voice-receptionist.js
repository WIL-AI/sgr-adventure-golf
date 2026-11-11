/**
 * Gut Wissmannshof - IONOS AI Voice Receptionist Integration
 * Manages the AI Voice Receptionist widget, programmatic triggers,
 * and reliable fallback dialogs if IONOS backend authorization is pending.
 */
(function() {
    'use strict';

    const AGENT_ID = 'c79edcd2-83ef-4eee-93cb-0ee927e0b73a';
    let widgetStatus = 'loading'; // 'ready', 'forbidden_403', 'error'

    // 1. Intercept Element.prototype.attachShadow so <ai-voicereceptionist>'s shadow root
    // is accessible for programmatic triggers from custom buttons across the website.
    try {
        const origAttachShadow = Element.prototype.attachShadow;
        Element.prototype.attachShadow = function(init) {
            const shadow = origAttachShadow.call(this, { ...init, mode: 'open' });
            if (this.tagName && this.tagName.toLowerCase() === 'ai-voicereceptionist') {
                this._voiceShadowRoot = shadow;
            }
            return shadow;
        };
    } catch (e) {
        console.warn('[VoiceReceptionist] Shadow DOM patch skipped:', e);
    }

    // 2. Proactively verify widget availability in the background
    async function checkWidgetStatus() {
        try {
            const resp = await fetch('https://misc.aireceptionist.voiceable.tech/widget/config?agent_id=' + encodeURIComponent(AGENT_ID), {
                credentials: 'omit'
            });
            if (resp.status === 200) {
                widgetStatus = 'ready';
            } else if (resp.status === 403) {
                widgetStatus = 'forbidden_403';
                console.warn(
                    '[IONOS AI Voice Receptionist] Status 403 Forbidden: Der IONOS-Server blockiert das Widget noch.\n' +
                    'Ursache: Im IONOS-Kundenportal unter "AI Frontdesk > Website-Widget" muss das Widget aktiviert und die Domain "wissmannshof.golf" (bzw. "*.wissmannshof.golf") bei den zugelassenen Domains eingetragen werden.'
                );
            } else {
                widgetStatus = 'error';
            }
        } catch (e) {
            widgetStatus = 'error';
        }
    }
    checkWidgetStatus();

    // 3. Fallback Modal if widget cannot be opened yet
    function showFallbackModal() {
        let modal = document.getElementById('sgr-voice-fallback-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'sgr-voice-fallback-modal';
            modal.style.cssText = `
                position: fixed; inset: 0; z-index: 2147483647;
                display: flex; align-items: center; justify-content: center;
                background: rgba(10, 25, 18, 0.75); backdrop-filter: blur(8px);
                -webkit-backdrop-filter: blur(8px); padding: 20px;
                animation: sgrFadeUp 0.25s ease;
            `;
            modal.innerHTML = `
                <div style="background: #FFFFFF; color: #143324; border-radius: 18px; max-width: 480px; width: 100%; padding: 32px 28px; box-shadow: 0 24px 60px rgba(0,0,0,0.35); border: 1.5px solid rgba(212,175,55,0.4); text-align: center; position: relative; font-family: 'Plus Jakarta Sans', sans-serif;">
                    <button type="button" onclick="document.getElementById('sgr-voice-fallback-modal').style.display='none'" style="position: absolute; top: 16px; right: 16px; border: none; background: #F3F4F6; width: 34px; height: 34px; border-radius: 50%; cursor: pointer; font-size: 1.1rem; color: #666; display: flex; align-items: center; justify-content: center; transition: 0.2s;" onmouseover="this.style.background='#E5E7EB'" onmouseout="this.style.background='#F3F4F6'">✕</button>
                    <div style="width: 58px; height: 58px; border-radius: 50%; background: linear-gradient(135deg, #143324, #1d4531); color: #D4AF37; font-size: 1.8rem; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; box-shadow: 0 8px 20px rgba(20,51,36,0.25);">🎙️</div>
                    <h3 style="margin: 0 0 10px; font-size: 1.35rem; color: #143324; font-weight: 800;">KI-Rezeptionistin</h3>
                    <p style="margin: 0 0 22px; font-size: 0.94rem; color: #4B5563; line-height: 1.55;">
                        Die direkte Browser-Sprachverbindung wird gerade im IONOS-Portal freigeschaltet. Unser Team ist währenddessen sehr gerne persönlich für Sie da:
                    </p>
                    <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 16px;">
                        <a href="tel:+495543999335" style="display: flex; align-items: center; justify-content: space-between; padding: 13px 18px; background: #FAF8F2; border: 1.5px solid rgba(212,175,55,0.4); border-radius: 12px; text-decoration: none; color: #143324; font-weight: 700; font-size: 0.95rem; transition: 0.2s;" onmouseover="this.style.borderColor='#D4AF37'; this.style.background='#F5EEDC'" onmouseout="this.style.borderColor='rgba(212,175,55,0.4)'; this.style.background='#FAF8F2'">
                            <span>📞 Golfsekretariat</span>
                            <span style="color: #AA771C;">+49 5543 999 335 ↗</span>
                        </a>
                        <a href="tel:+4955439992239" style="display: flex; align-items: center; justify-content: space-between; padding: 13px 18px; background: #FAF8F2; border: 1.5px solid rgba(212,175,55,0.4); border-radius: 12px; text-decoration: none; color: #143324; font-weight: 700; font-size: 0.95rem; transition: 0.2s;" onmouseover="this.style.borderColor='#D4AF37'; this.style.background='#F5EEDC'" onmouseout="this.style.borderColor='rgba(212,175,55,0.4)'; this.style.background='#FAF8F2'">
                            <span>🏨 Hotel &amp; Restaurant</span>
                            <span style="color: #AA771C;">+49 5543 999 22 39 ↗</span>
                        </a>
                    </div>
                    <button type="button" onclick="document.getElementById('sgr-voice-fallback-modal').style.display='none'" style="border: none; background: transparent; color: #6B7280; font-size: 0.88rem; cursor: pointer; text-decoration: underline; text-underline-offset: 3px;">Fenster schließen</button>
                </div>
            `;
            document.body.appendChild(modal);
        } else {
            modal.style.display = 'flex';
        }
    }

    // 4. Global trigger function
    window.openVoiceReceptionist = function(source) {
        if (window.SGRTracker && typeof window.SGRTracker.trackEvent === 'function') {
            try {
                window.SGRTracker.trackEvent('voice_receptionist', source || 'click');
            } catch (e) {}
        }

        // Try to find the pill in shadow DOM
        const el = document.querySelector('ai-voicereceptionist');
        const shadow = el ? (el.shadowRoot || el._voiceShadowRoot) : null;
        const pill = shadow ? shadow.querySelector('.pill, button') : null;

        if (pill) {
            pill.click();
            return;
        }

        // If not ready yet, try a few quick retries (e.g. if still initializing)
        let attempts = 0;
        const maxAttempts = 6;
        const interval = setInterval(function() {
            attempts++;
            const liveEl = document.querySelector('ai-voicereceptionist');
            const liveShadow = liveEl ? (liveEl.shadowRoot || liveEl._voiceShadowRoot) : null;
            const livePill = liveShadow ? liveShadow.querySelector('.pill, button') : null;

            if (livePill) {
                clearInterval(interval);
                livePill.click();
            } else if (attempts >= maxAttempts) {
                clearInterval(interval);
                // If pill cannot be found (e.g. 403 Forbidden from IONOS backend), show the fallback dialog
                showFallbackModal();
            }
        }, 120);
    };
})();
