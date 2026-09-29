/**
 * Gut Wissmannshof - Resort Status Database & Data Layer
 * Manages daily live status for Opening Hours, Trolleys, Carts, and Course Status.
 */

const DEFAULT_STATUS = {
    openingHours: {
        title: "Öffnungszeiten Shop & Sekretariat",
        text: "täglich 08:00 – 18:00 Uhr"
    },
    trolleys: {
        status: "erlaubt",
        label: "Erlaubt",
        note: ""
    },
    carts: {
        status: "erlaubt",
        label: "Erlaubt",
        note: ""
    },
    courseStatus: {
        status: "open",
        course: "27-Loch regulär geöffnet",
        greens: "Sommergrüns",
        note: ""
    },
    lastUpdated: "2026-09-29T14:48:00.000Z"
};

const STATUS_STORAGE_KEY = 'sgr_resort_status_v1';

const StatusRepository = {
    _cached: null,

    getStatus: function() {
        if (this._cached) return this._cached;
        try {
            const stored = localStorage.getItem(STATUS_STORAGE_KEY);
            if (stored) {
                const parsed = JSON.parse(stored);
                if (parsed && typeof parsed === 'object') {
                    this._cached = parsed;
                    return parsed;
                }
            }
        } catch (e) {
            console.warn('Could not read status from localStorage:', e);
        }
        this._cached = DEFAULT_STATUS;
        return DEFAULT_STATUS;
    },

    saveStatus: function(statusObj) {
        if (!statusObj || typeof statusObj !== 'object') return false;
        statusObj.lastUpdated = new Date().toISOString();
        this._cached = statusObj;

        try {
            localStorage.setItem(STATUS_STORAGE_KEY, JSON.stringify(statusObj));
        } catch (e) {
            console.error('Failed to save status to localStorage:', e);
        }

        // Apply immediately to current DOM
        this.applyToDOM(statusObj);

        // Async sync to server
        try {
            fetch('api/status.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(statusObj)
            }).then(r => r.json()).then(res => {
                if (res && res.success) {
                    console.log('✅ Resort status synced with server (data/status.json)');
                }
            }).catch(() => {
                // Static host fallback
            });
        } catch (e) {}

        return statusObj;
    },

    syncFromServer: async function() {
        const endpoints = ['data/status.json', 'api/status.php'];
        for (const url of endpoints) {
            try {
                const resp = await fetch(url + '?t=' + Date.now(), { cache: 'no-store' });
                if (resp.ok) {
                    const data = await resp.json();
                    if (data && typeof data === 'object' && (data.openingHours || data.courseStatus)) {
                        this._cached = data;
                        try {
                            localStorage.setItem(STATUS_STORAGE_KEY, JSON.stringify(data));
                        } catch (e) {}
                        this.applyToDOM(data);
                        return data;
                    }
                }
            } catch (err) {}
        }
        const current = this.getStatus();
        this.applyToDOM(current);
        return current;
    },

    /**
     * Translates status codes into label and colored dot class
     */
    getDotClass: function(status) {
        if (status === 'erlaubt' || status === 'open' || status === 'geöffnet') return 'status-dot-green';
        if (status === 'eingeschraenkt' || status === 'partial' || status === 'eingeschränkt') return 'status-dot-orange';
        if (status === 'nicht_gestattet' || status === 'closed' || status === 'gesperrt' || status === 'verboten') return 'status-dot-red';
        return 'status-dot-green';
    },

    getTopDotClass: function(status) {
        if (status === 'open' || status === 'geöffnet' || status === 'erlaubt') return 'badge-live-dot';
        if (status === 'partial' || status === 'eingeschraenkt' || status === 'eingeschränkt') return 'badge-live-dot dot-orange';
        if (status === 'closed' || status === 'gesperrt' || status === 'nicht_gestattet') return 'badge-live-dot dot-red';
        return 'badge-live-dot';
    },

    getStatusLabel: function(code) {
        if (code === 'erlaubt') return 'erlaubt';
        if (code === 'eingeschraenkt') return 'eingeschränkt';
        if (code === 'nicht_gestattet') return 'nicht gestattet';
        return code;
    },

    /**
     * Updates all status indicators across the current page DOM
     */
    applyToDOM: function(status) {
        const s = status || this.getStatus();
        if (!s) return;

        // 1. Top Bar Course Status (Header on all pages)
        const topBarElements = document.querySelectorAll('[data-i18n="topBarCourseStatus"], .top-bar-course-status');
        topBarElements.forEach(el => {
            const courseText = (s.courseStatus && s.courseStatus.course) ? s.courseStatus.course : 'Platz geöffnet';
            const greensText = (s.courseStatus && s.courseStatus.greens) ? s.courseStatus.greens : 'Sommergrüns';
            const dotClass = this.getTopDotClass(s.courseStatus ? s.courseStatus.status : 'open');
            
            el.innerHTML = `<span class="${dotClass}"></span> <strong>${courseText}</strong> · ${greensText}`;
        });

        // 2. Status Widget Cards on Homepage
        // Öffnungszeiten
        const shopVal = document.querySelector('[data-i18n="shopVal"], #status-val-hours');
        if (shopVal && s.openingHours) {
            shopVal.textContent = s.openingHours.text || 'täglich 08–18 Uhr';
        }

        // Trolleys
        const trolleyVal = document.querySelector('[data-i18n="trolleyVal"], #status-val-trolleys');
        if (trolleyVal && s.trolleys) {
            const dot = this.getDotClass(s.trolleys.status);
            const label = s.trolleys.label || this.getStatusLabel(s.trolleys.status);
            const note = s.trolleys.note ? ` <small style="font-size:0.8em;opacity:0.85">(${s.trolleys.note})</small>` : '';
            trolleyVal.innerHTML = `<span class="${dot}"></span> ${label}${note}`;
        }

        // Carts
        const cartVal = document.querySelector('[data-i18n="cartVal"], #status-val-carts');
        if (cartVal && s.carts) {
            const dot = this.getDotClass(s.carts.status);
            const label = s.carts.label || this.getStatusLabel(s.carts.status);
            const note = s.carts.note ? ` <small style="font-size:0.8em;opacity:0.85">(${s.carts.note})</small>` : '';
            cartVal.innerHTML = `<span class="${dot}"></span> ${label}${note}`;
        }

        // Platzstatus
        const courseStatusVal = document.querySelector('[data-i18n="courseStatusVal"], #status-val-course');
        if (courseStatusVal && s.courseStatus) {
            const dot = this.getDotClass(s.courseStatus.status);
            const text = s.courseStatus.course || 'geöffnet';
            courseStatusVal.innerHTML = `<span class="${dot}"></span> ${text}`;
        }
    }
};

// Export to window
window.StatusRepository = StatusRepository;
window.DEFAULT_STATUS = DEFAULT_STATUS;

// Auto-run when loaded in browser
if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            StatusRepository.applyToDOM();
            StatusRepository.syncFromServer();
        });
    } else {
        StatusRepository.applyToDOM();
        StatusRepository.syncFromServer();
    }
}
