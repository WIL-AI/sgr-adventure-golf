/**
 * Gut Wissmannshof - Cookie & Media Consent Manager (§ 25 TDDDG / DSGVO)
 * Handles cookie consent banners, user preferences, and 2-Click solution for Google Maps & external media.
 */

(function() {
    'use strict';

    const STORAGE_KEY = 'sgr_consent_preferences_v1';

    const DEFAULT_PREFERENCES = {
        necessary: true,
        media: false,
        analytics: false,
        timestamp: null
    };

    function getPreferences() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) return JSON.parse(raw);
        } catch (e) {}
        return null;
    }

    function savePreferences(prefs) {
        prefs.timestamp = new Date().toISOString();
        prefs.necessary = true; // Always required
        localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
        applyPreferences(prefs);
    }

    function applyPreferences(prefs) {
        if (prefs.media) {
            enableAllMaps();
        } else {
            init2ClickMaps();
        }
    }

    /* ----------------------------------------------------
       2-Click Google Maps Handler
    ---------------------------------------------------- */
    function init2ClickMaps() {
        const mapContainers = document.querySelectorAll('.google-map-wrap, .map-container-frame, .map-frame');
        
        mapContainers.forEach(container => {
            const iframe = container.querySelector('iframe');
            if (iframe && iframe.src) {
                const mapSrc = iframe.getAttribute('src');
                if (mapSrc && !container.getAttribute('data-original-mapsrc')) {
                    container.setAttribute('data-original-mapsrc', mapSrc);
                }
                
                const originalSrc = container.getAttribute('data-original-mapsrc') || mapSrc;
                
                container.innerHTML = `
                    <div class="sgr-map-2click-placeholder" style="
                        width: 100%; height: 100%; min-height: 280px;
                        background: linear-gradient(135deg, #143324 0%, #0d2218 100%);
                        color: #FFFFFF; display: flex; flex-direction: column;
                        align-items: center; justify-content: center; text-align: center;
                        padding: 30px 24px; border-radius: inherit; font-family: 'Plus Jakarta Sans', sans-serif;
                        box-sizing: border-box;
                    ">
                        <div style="font-size: 2.2rem; margin-bottom: 10px;">📍</div>
                        <h4 style="font-size: 1.15rem; font-weight: 700; color: #D4AF37; margin: 0 0 8px;">Interaktive Karte deaktiviert</h4>
                        <p style="font-size: 0.88rem; max-width: 440px; color: rgba(255,255,255,0.85); line-height: 1.5; margin: 0 0 16px;">
                            Zum Schutz Ihrer Privatsphäre (§ 25 TDDDG / DSGVO) wird Google Maps erst nach Ihrer Zustimmung geladen.
                        </p>
                        <button class="sgr-btn-load-map" style="
                            background: #D4AF37; color: #143324; border: none;
                            padding: 10px 20px; border-radius: 6px; font-weight: 700;
                            font-size: 0.88rem; cursor: pointer; transition: all 0.2s ease;
                        ">
                            🗺️ Karte laden & anzeigen
                        </button>
                        <span style="font-size: 0.75rem; color: rgba(255,255,255,0.55); margin-top: 10px;">
                            Dabei werden Daten an Google (USA) übertragen. <a href="datenschutz.html" style="color: #D4AF37; text-decoration: underline;">Datenschutzerklärung</a>
                        </span>
                    </div>
                `;

                const btn = container.querySelector('.sgr-btn-load-map');
                if (btn) {
                    btn.addEventListener('click', () => {
                        const current = getPreferences() || DEFAULT_PREFERENCES;
                        current.media = true;
                        savePreferences(current);
                        loadSingleMap(container, originalSrc);
                    });
                }
            }
        });
    }

    function loadSingleMap(container, src) {
        container.innerHTML = `<iframe loading="lazy" src="${src}" title="Google Maps Gut Wissmannshof" style="width: 100%; height: 100%; min-height: 320px; border: 0;" allowfullscreen></iframe>`;
    }

    function enableAllMaps() {
        const mapContainers = document.querySelectorAll('.google-map-wrap, .map-container-frame, .map-frame');
        mapContainers.forEach(container => {
            const orig = container.getAttribute('data-original-mapsrc');
            if (orig) {
                loadSingleMap(container, orig);
            }
        });
    }

    /* ----------------------------------------------------
       Banner & Preference Modal
    ---------------------------------------------------- */
    function injectBanner() {
        if (document.getElementById('sgr-cookie-banner')) return;

        const banner = document.createElement('div');
        banner.id = 'sgr-cookie-banner';
        banner.style.cssText = `
            position: fixed; bottom: 20px; left: 20px; right: 20px; max-width: 580px; margin: 0 auto;
            background: #FFFFFF; color: #19231E; border-radius: 12px;
            box-shadow: 0 16px 40px rgba(0,0,0,0.3); border: 1px solid rgba(20,51,36,0.15);
            padding: 24px; z-index: 999999; font-family: 'Plus Jakarta Sans', sans-serif;
            display: flex; flex-direction: column; gap: 14px; box-sizing: border-box;
            animation: sgrFadeUp 0.3s ease;
        `;

        banner.innerHTML = `
            <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 12px;">
                <div style="display: flex; align-items: center; gap: 10px;">
                    <span style="font-size: 1.5rem;">🛡️</span>
                    <h3 style="margin: 0; font-size: 1.15rem; color: #143324; font-weight: 700;">Privatsphäre-Einstellungen</h3>
                </div>
            </div>
            <p style="margin: 0; font-size: 0.88rem; color: #555; line-height: 1.55;">
                Wir setzen technisch notwendige Funktionen ein. Externe Medien (wie <strong>Google Maps</strong>) laden wir gemäß <strong>§ 25 TDDDG</strong> erst nach Ihrer Einwilligung, um Ihre Privatsphäre zu schützen.
            </p>
            <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 4px;">
                <button id="sgr-consent-all" style="
                    background: #143324; color: #FFFFFF; border: none; padding: 11px 18px;
                    border-radius: 6px; font-weight: 700; font-size: 0.86rem; cursor: pointer; flex: 1 1 auto;
                ">Alle akzeptieren</button>
                <button id="sgr-consent-essential" style="
                    background: #F4F6F5; color: #143324; border: 1px solid #D0D7D4; padding: 11px 18px;
                    border-radius: 6px; font-weight: 600; font-size: 0.86rem; cursor: pointer; flex: 1 1 auto;
                ">Nur essenzielle</button>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #EEE; padding-top: 10px; font-size: 0.78rem;">
                <a href="datenschutz.html" style="color: #143324; text-decoration: underline;">Datenschutzerklärung</a>
                <a href="impressum.html" style="color: #666; text-decoration: none;">Impressum</a>
            </div>
        `;

        document.body.appendChild(banner);

        document.getElementById('sgr-consent-all').onclick = () => {
            savePreferences({ necessary: true, media: true, analytics: false });
            banner.remove();
        };

        document.getElementById('sgr-consent-essential').onclick = () => {
            savePreferences({ necessary: true, media: false, analytics: false });
            banner.remove();
        };
    }

    function openSettings() {
        const banner = document.getElementById('sgr-cookie-banner');
        if (banner) banner.remove();
        injectBanner();
    }

    // Public API
    window.SGRConsent = {
        getPreferences: getPreferences,
        savePreferences: savePreferences,
        openSettings: openSettings
    };

    // Auto-init on load
    document.addEventListener('DOMContentLoaded', () => {
        const prefs = getPreferences();
        if (!prefs) {
            init2ClickMaps();
            injectBanner();
        } else {
            applyPreferences(prefs);
        }
    });

})();
