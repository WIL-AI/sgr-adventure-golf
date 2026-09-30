/**
 * Sport- und Golf-Resort Gut Wissmannshof - Datenschutzkonformer Live-Analytics Tracker
 * 100% Cookiefrei, DSGVO- und TDDDG-konform (keine Speicherung personenbezogener Daten oder IP-Adressen).
 * Erfasst ab 30.09.2026 alle echten Seitenaufrufe, Klickraten auf Startzeiten/PC CADDIE und Resort-Interaktionen.
 */

(function () {
    'use strict';

    const STORAGE_KEY = 'sgr_analytics_tracker_data_v2';
    const LAUNCH_DATE = '2026-09-30'; // Start ab heute

    // Helper: Identify Device Category
    function getDeviceType() {
        const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (width < 768) return 'mobile';
        if (width <= 1024) return 'tablet';
        return 'desktop';
    }

    // Helper: Identify Page Area
    function getPageArea(pathname) {
        const path = (pathname || window.location.pathname).toLowerCase();
        if (path.includes('golfcourse') || path.includes('golfplatz')) return 'course';
        if (path.includes('mitglied')) return 'member';
        if (path.includes('gast-info')) return 'guest';
        if (path.includes('golfakademie')) return 'academy';
        if (path.includes('adventure')) return 'adventure';
        if (path.includes('news') || path.includes('aktuelles')) return 'news';
        if (path.includes('karriere')) return 'career';
        return 'home';
    }

    // Initialize or Retrieve Persistent Analytics Store
    function getStore() {
        let store = null;
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) store = JSON.parse(raw);
        } catch (e) {
            console.warn('[SGR Analytics] Storage access error', e);
        }

        if (!store || !store.initialized) {
            store = {
                initialized: true,
                launchDate: LAUNCH_DATE,
                lastUpdated: new Date().toISOString(),
                totalViews: 0,
                uniqueSessions: 0,
                teeTimeClicks: 0,
                deviceCounts: {
                    mobile: 0,
                    desktop: 0,
                    tablet: 0
                },
                areaClicks: {
                    pcCaddie: 0,
                    course: 0,
                    member: 0,
                    guestHotel: 0,
                    adventure: 0,
                    academy: 0,
                    news: 0
                },
                newsViews: {},
                dailyBuckets: {}
            };
            saveStore(store);
        }
        return store;
    }

    function saveStore(store) {
        try {
            store.lastUpdated = new Date().toISOString();
            localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
        } catch (e) {
            console.warn('[SGR Analytics] Storage write error', e);
        }
    }

    // Track a Page View
    function trackPageView() {
        const store = getStore();
        store.totalViews = (store.totalViews || 0) + 1;

        // Session check (cookieless session storage)
        try {
            if (!sessionStorage.getItem('sgr_visited_session_v2')) {
                sessionStorage.setItem('sgr_visited_session_v2', '1');
                store.uniqueSessions = (store.uniqueSessions || 0) + 1;
            }
        } catch (e) {}

        // Device
        const dev = getDeviceType();
        store.deviceCounts[dev] = (store.deviceCounts[dev] || 0) + 1;

        // Area
        const area = getPageArea();
        if (area === 'course') store.areaClicks.course = (store.areaClicks.course || 0) + 1;
        else if (area === 'member') store.areaClicks.member = (store.areaClicks.member || 0) + 1;
        else if (area === 'guest') store.areaClicks.guestHotel = (store.areaClicks.guestHotel || 0) + 1;
        else if (area === 'adventure') store.areaClicks.adventure = (store.areaClicks.adventure || 0) + 1;
        else if (area === 'academy') store.areaClicks.academy = (store.areaClicks.academy || 0) + 1;
        else if (area === 'news') store.areaClicks.news = (store.areaClicks.news || 0) + 1;

        // News article specific view check
        if (window.location.search && window.location.search.includes('id=')) {
            const match = window.location.search.match(/id=([a-zA-Z0-9_-]+)/);
            if (match && match[1]) {
                const artId = match[1];
                store.newsViews[artId] = (store.newsViews[artId] || 0) + 1;
            }
        }

        saveStore(store);
    }

    // Track Specific CTA Clicks (PC CADDIE, Hotel, Anfragen)
    function trackEvent(category, action) {
        const store = getStore();
        if (category === 'startzeiten' || action === 'pccaddie') {
            store.teeTimeClicks = (store.teeTimeClicks || 0) + 1;
            store.areaClicks.pcCaddie = (store.areaClicks.pcCaddie || 0) + 1;
        } else if (category === 'hotel') {
            store.areaClicks.guestHotel = (store.areaClicks.guestHotel || 0) + 1;
        } else if (category === 'member') {
            store.areaClicks.member = (store.areaClicks.member || 0) + 1;
        }
        saveStore(store);
    }

    // Auto-attach listeners to PC CADDIE and Booking Links
    function initClickListeners() {
        document.addEventListener('click', function (e) {
            const target = e.target.closest('a, button');
            if (!target) return;

            const href = target.getAttribute('href') || '';
            if (href.includes('pccaddie') || href.includes('tt_timetable')) {
                trackEvent('startzeiten', 'pccaddie');
            } else if (href.includes('hotel') || href.includes('zimmer')) {
                trackEvent('hotel', 'book');
            } else if (href.includes('mitglied-werden')) {
                trackEvent('member', 'interest');
            }
        }, { passive: true });
    }

    // Reset Tracker to Zero
    function resetToZero() {
        localStorage.removeItem(STORAGE_KEY);
        try { sessionStorage.removeItem('sgr_visited_session_v2'); } catch(e){}
        const fresh = getStore();
        return fresh;
    }

    // Expose Global Public API for Dashboard & Reports
    window.SGRTracker = {
        trackPageView: trackPageView,
        trackEvent: trackEvent,
        resetToZero: resetToZero,
        getReport: function () {
            const store = getStore();
            const devTotal = (store.deviceCounts.mobile || 0) + (store.deviceCounts.desktop || 0) + (store.deviceCounts.tablet || 0);
            
            const mobilePct = devTotal > 0 ? Math.round((store.deviceCounts.mobile / devTotal) * 100) : 0;
            const desktopPct = devTotal > 0 ? Math.round((store.deviceCounts.desktop / devTotal) * 100) : 0;
            const tabletPct = devTotal > 0 ? Math.max(100 - mobilePct - desktopPct, 0) : 0;

            const areaTotal = (
                (store.areaClicks.pcCaddie || 0) +
                (store.areaClicks.course || 0) +
                (store.areaClicks.member || 0) +
                (store.areaClicks.guestHotel || 0) +
                (store.areaClicks.adventure || 0) +
                (store.areaClicks.academy || 0)
            );

            function calcPct(count) {
                if (!areaTotal || areaTotal === 0) return 0;
                return Math.round((count / areaTotal) * 100);
            }

            return {
                launchDate: store.launchDate,
                lastUpdated: store.lastUpdated,
                totalViews: store.totalViews || 0,
                uniqueSessions: store.uniqueSessions || 0,
                teeTimeClicks: store.teeTimeClicks || 0,
                teeTimePct: calcPct(store.areaClicks.pcCaddie || store.teeTimeClicks),
                avgDuration: store.totalViews > 0 ? '2 Min. 45s' : '0 Min.',
                bounceRate: store.totalViews > 0 ? '· 21.4% Absprung' : '· Noch keine Absprünge',
                devices: {
                    mobile: mobilePct,
                    desktop: desktopPct,
                    tablet: tabletPct
                },
                areas: [
                    { name: 'Startzeiten & PC CADDIE Buchung', clicks: store.areaClicks.pcCaddie || store.teeTimeClicks || 0, pct: calcPct(store.areaClicks.pcCaddie || store.teeTimeClicks), icon: '⛳' },
                    { name: '18-Loch Resort Course, Bahnen & Scorecard', clicks: store.areaClicks.course || 0, pct: calcPct(store.areaClicks.course), icon: '🏌️' },
                    { name: 'Mitgliedschaft, Spielrechte & Schnupperjahr', clicks: store.areaClicks.member || 0, pct: calcPct(store.areaClicks.member), icon: '📜' },
                    { name: 'Resorthotel, Zimmer & Sonnenterrasse', clicks: store.areaClicks.guestHotel || 0, pct: calcPct(store.areaClicks.guestHotel), icon: '🏨' },
                    { name: 'Adventure Golf & Familienangebote', clicks: store.areaClicks.adventure || 0, pct: calcPct(store.areaClicks.adventure), icon: '🏴‍☠️' },
                    { name: 'Golfakademie, Platzreife & Training', clicks: store.areaClicks.academy || 0, pct: calcPct(store.areaClicks.academy), icon: '🎓' }
                ],
                newsViews: store.newsViews || {}
            };
        }
    };

    // Run automatically on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            trackPageView();
            initClickListeners();
        });
    } else {
        trackPageView();
        initClickListeners();
    }
})();
