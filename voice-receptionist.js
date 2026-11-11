/**
 * Gut Wissmannshof - IONOS AI Voice Receptionist Integration
 * Manages the AI Voice Receptionist widget and provides the programmatic opener
 * for custom Hero buttons, contact panels, and footer links.
 */
(function() {
    'use strict';

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

    // 2. Global trigger function: opens the receptionist widget on click
    window.openVoiceReceptionist = function(source) {
        if (window.SGRTracker && typeof window.SGRTracker.trackEvent === 'function') {
            try {
                window.SGRTracker.trackEvent('voice_receptionist', source || 'click');
            } catch (e) {}
        }

        function triggerClick(retries) {
            const el = document.querySelector('ai-voicereceptionist');
            const shadow = el ? (el.shadowRoot || el._voiceShadowRoot) : null;
            const pill = shadow ? shadow.querySelector('.pill, button') : null;

            if (pill) {
                pill.click();
            } else if (retries > 0) {
                setTimeout(function() {
                    triggerClick(retries - 1);
                }, 120);
            }
        }

        triggerClick(25);
    };
})();
