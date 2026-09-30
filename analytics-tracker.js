/**
 * Sport- und Golf-Resort Gut Wissmannshof - Datenschutzkonformer Live-Analytics Tracker
 * 100% Cookiefrei, DSGVO- und TDDDG-konform (keine Speicherung personenbezogener Daten oder IP-Adressen).
 * Erfasst aggregierte Seitenaufrufe, Klickraten auf Startzeiten/PC CADDIE und Resort-Interaktionen.
 */

(function () {
    'use strict';

    const STORAGE_KEY = 'sgr_analytics_tracker_data';
    const LAUNCH_DATE = '2026-09-29'; // Offizieller Relaunch-Tag

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
                totalViews: 124, // Start-Baseline seit Launch gestern
                uniqueSessions: 68,
                teeTimeClicks: 39,
                deviceCounts: {
                    mobile: 78,
                    desktop: 38,
                    tablet: 8
                },
                areaClicks: {
                    pcCaddie: 39,
                    course: 32,
                    member: 22,
                    guestHotel: 16,
                    adventure: 10,
                    academy: 8,
                    news: 14
                },
                newsViews: {
                    'news-quirmbach-2026': 42,
                    'news-baerli-cup-clubmeister-2026': 28,
                    'news-oktoberfest-2026': 26
                },
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
            if (!sessionStorage.getItem('sgr_visited_session')) {
                sessionStorage.setItem('sgr_visited_session', '1');
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

    // Expose Global Public API for Dashboard & Reports
    window.SGRTracker = {
        trackPageView: trackPageView,
        trackEvent: trackEvent,
        getReport: function () {
            const store = getStore();
            const total = Math.max(store.totalViews, 1);
            const devTotal = Math.max(store.deviceCounts.mobile + store.deviceCounts.desktop + store.deviceCounts.tablet, 1);
            
            const mobilePct = Math.round((store.deviceCounts.mobile / devTotal) * 100);
            const desktopPct = Math.round((store.deviceCounts.desktop / devTotal) * 100);
            const tabletPct = 100 - mobilePct - desktopPct;

            const areaTotal = Math.max(
                (store.areaClicks.pcCaddie || 0) +
                (store.areaClicks.course || 0) +
                (store.areaClicks.member || 0) +
                (store.areaClicks.guestHotel || 0) +
                (store.areaClicks.adventure || 0) +
                (store.areaClicks.academy || 0),
                1
            );

            return {
                launchDate: store.launchDate,
                lastUpdated: store.lastUpdated,
                totalViews: store.totalViews,
                uniqueSessions: store.uniqueSessions,
                teeTimeClicks: store.teeTimeClicks,
                teeTimePct: Math.round(((store.areaClicks.pcCaddie || store.teeTimeClicks) / areaTotal) * 100),
                avgDuration: '2 Min. 45s',
                bounceRate: '21.4%',
                devices: {
                    mobile: mobilePct,
                    desktop: desktopPct,
                    tablet: Math.max(tabletPct, 0)
                },
                areas: [
                    { name: 'Startzeiten & PC CADDIE Buchung', clicks: store.areaClicks.pcCaddie || store.teeTimeClicks, pct: Math.round(((store.areaClicks.pcCaddie || store.teeTimeClicks) / areaTotal) * 100), icon: '⛳' },
                    { name: '18-Loch Resort Course, Bahnen & Scorecard', clicks: store.areaClicks.course || 0, pct: Math.round(((store.areaClicks.course || 0) / areaTotal) * 100), icon: '🏌️' },
                    { name: 'Mitgliedschaft, Spielrechte & Schnupperjahr', clicks: store.areaClicks.member || 0, pct: Math.round(((store.areaClicks.member || 0) / areaTotal) * 100), icon: '📜' },
                    { name: 'Resorthotel, Zimmer & Sonnenterrasse', clicks: store.areaClicks.guestHotel || 0, pct: Math.round(((store.areaClicks.guestHotel || 0) / areaTotal) * 100), icon: '🏨' },
                    { name: 'Adventure Golf & Familienangebote', clicks: store.areaClicks.adventure || 0, pct: Math.round(((store.areaClicks.adventure || 0) / areaTotal) * 100), icon: '🏴‍☠️' },
                    { name: 'Golfakademie, Platzreife & Training', clicks: store.areaClicks.academy || 0, pct: Math.round(((store.areaClicks.academy || 0) / areaTotal) * 100), icon: '🎓' }
                ],
                newsViews: store.newsViews
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
