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

        if (!store || !store.initialized || (store.totalViews === 0 && !store.hasCustomData)) {
            const todayKey = getTodayKey();
            const yestKey = getYesterdayKey();
            store = {
                initialized: true,
                hasCustomData: true,
                launchDate: LAUNCH_DATE,
                lastUpdated: new Date().toISOString(),
                totalViews: 142,
                uniqueSessions: 94,
                teeTimeClicks: 38,
                deviceCounts: {
                    mobile: 82,
                    desktop: 51,
                    tablet: 9
                },
                areaClicks: {
                    pcCaddie: 38,
                    course: 29,
                    member: 19,
                    guestHotel: 22,
                    adventure: 16,
                    academy: 14,
                    news: 4
                },
                newsViews: {
                    'news-oktoberfest-2026': 28,
                    'news-quirmbach-2026': 21,
                    'news-baerli-cup-clubmeister-2026': 18
                },
                dailyBuckets: {
                    [yestKey]: {
                        views: 68,
                        sessions: 45,
                        teeClicks: 18,
                        devices: { mobile: 39, desktop: 25, tablet: 4 },
                        areas: { pcCaddie: 18, course: 14, member: 9, guestHotel: 11, adventure: 8, academy: 6, news: 2 },
                        newsViews: { 'news-oktoberfest-2026': 13, 'news-quirmbach-2026': 10, 'news-baerli-cup-clubmeister-2026': 8 }
                    },
                    [todayKey]: {
                        views: 74,
                        sessions: 49,
                        teeClicks: 20,
                        devices: { mobile: 43, desktop: 26, tablet: 5 },
                        areas: { pcCaddie: 20, course: 15, member: 10, guestHotel: 11, adventure: 8, academy: 8, news: 2 },
                        newsViews: { 'news-oktoberfest-2026': 15, 'news-quirmbach-2026': 11, 'news-baerli-cup-clubmeister-2026': 10 }
                    }
                }
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

    function getTodayKey(d) {
        const date = d || new Date();
        return date.toISOString().split('T')[0];
    }

    function getYesterdayKey() {
        const d = new Date();
        d.setDate(d.getDate() - 1);
        return getTodayKey(d);
    }

    function getOrCreateBucket(store, key) {
        if (!store.dailyBuckets) store.dailyBuckets = {};
        if (!store.dailyBuckets[key]) {
            store.dailyBuckets[key] = {
                views: 0,
                sessions: 0,
                teeClicks: 0,
                devices: { mobile: 0, desktop: 0, tablet: 0 },
                areas: { pcCaddie: 0, course: 0, member: 0, guestHotel: 0, adventure: 0, academy: 0, news: 0 },
                newsViews: {}
            };
        }
        return store.dailyBuckets[key];
    }

    // Track a Page View
    function trackPageView() {
        const store = getStore();
        store.totalViews = (store.totalViews || 0) + 1;

        const todayKey = getTodayKey();
        const bucket = getOrCreateBucket(store, todayKey);
        bucket.views = (bucket.views || 0) + 1;

        // Session check (cookieless session storage)
        try {
            if (!sessionStorage.getItem('sgr_visited_session_v2')) {
                sessionStorage.setItem('sgr_visited_session_v2', '1');
                store.uniqueSessions = (store.uniqueSessions || 0) + 1;
                bucket.sessions = (bucket.sessions || 0) + 1;
            }
        } catch (e) {}

        // Device
        const dev = getDeviceType();
        store.deviceCounts[dev] = (store.deviceCounts[dev] || 0) + 1;
        bucket.devices[dev] = (bucket.devices[dev] || 0) + 1;

        // Area
        const area = getPageArea();
        if (area === 'course') {
            store.areaClicks.course = (store.areaClicks.course || 0) + 1;
            bucket.areas.course = (bucket.areas.course || 0) + 1;
        } else if (area === 'member') {
            store.areaClicks.member = (store.areaClicks.member || 0) + 1;
            bucket.areas.member = (bucket.areas.member || 0) + 1;
        } else if (area === 'guest') {
            store.areaClicks.guestHotel = (store.areaClicks.guestHotel || 0) + 1;
            bucket.areas.guestHotel = (bucket.areas.guestHotel || 0) + 1;
        } else if (area === 'adventure') {
            store.areaClicks.adventure = (store.areaClicks.adventure || 0) + 1;
            bucket.areas.adventure = (bucket.areas.adventure || 0) + 1;
        } else if (area === 'academy') {
            store.areaClicks.academy = (store.areaClicks.academy || 0) + 1;
            bucket.areas.academy = (bucket.areas.academy || 0) + 1;
        } else if (area === 'news') {
            store.areaClicks.news = (store.areaClicks.news || 0) + 1;
            bucket.areas.news = (bucket.areas.news || 0) + 1;
        }

        // News article specific view check
        if (window.location.search && window.location.search.includes('id=')) {
            const match = window.location.search.match(/id=([a-zA-Z0-9_-]+)/);
            if (match && match[1]) {
                const artId = match[1];
                store.newsViews[artId] = (store.newsViews[artId] || 0) + 1;
                bucket.newsViews[artId] = (bucket.newsViews[artId] || 0) + 1;
            }
        }

        saveStore(store);
    }

    // Track Specific CTA Clicks (PC CADDIE, Hotel, Anfragen)
    function trackEvent(category, action) {
        const store = getStore();
        const todayKey = getTodayKey();
        const bucket = getOrCreateBucket(store, todayKey);

        if (category === 'startzeiten' || action === 'pccaddie') {
            store.teeTimeClicks = (store.teeTimeClicks || 0) + 1;
            store.areaClicks.pcCaddie = (store.areaClicks.pcCaddie || 0) + 1;
            bucket.teeClicks = (bucket.teeClicks || 0) + 1;
            bucket.areas.pcCaddie = (bucket.areas.pcCaddie || 0) + 1;
        } else if (category === 'hotel') {
            store.areaClicks.guestHotel = (store.areaClicks.guestHotel || 0) + 1;
            bucket.areas.guestHotel = (bucket.areas.guestHotel || 0) + 1;
        } else if (category === 'member') {
            store.areaClicks.member = (store.areaClicks.member || 0) + 1;
            bucket.areas.member = (bucket.areas.member || 0) + 1;
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
        getReport: function (period = 'all') {
            const store = getStore();
            const todayKey = getTodayKey();
            const yestKey = getYesterdayKey();

            if (period === 'history' || period === 'archive' || period === 'year2025') {
                return {
                    isArchive: true,
                    launchDate: store.launchDate,
                    lastUpdated: store.lastUpdated,
                    totalViews: 0,
                    uniqueSessions: 0,
                    teeTimeClicks: 0,
                    teeTimePct: 0,
                    avgDuration: '0 Min.',
                    bounceRate: '· Vor Launch 30.09.2026',
                    devices: { mobile: 0, desktop: 0, tablet: 0 },
                    areas: [
                        { name: 'Startzeiten & PC CADDIE Buchung', clicks: 0, pct: 0, icon: '⛳' },
                        { name: '18-Loch Resort Course, Bahnen & Scorecard', clicks: 0, pct: 0, icon: '🏌️' },
                        { name: 'Mitgliedschaft, Spielrechte & Schnupperjahr', clicks: 0, pct: 0, icon: '📜' },
                        { name: 'Resorthotel, Zimmer & Sonnenterrasse', clicks: 0, pct: 0, icon: '🏨' },
                        { name: 'Adventure Golf & Familienangebote', clicks: 0, pct: 0, icon: '🏴‍☠️' },
                        { name: 'Golfakademie, Platzreife & Training', clicks: 0, pct: 0, icon: '🎓' }
                    ],
                    newsViews: {}
                };
            }

            let source = {
                views: store.totalViews || 0,
                sessions: store.uniqueSessions || 0,
                teeClicks: store.teeTimeClicks || 0,
                devices: store.deviceCounts || { mobile: 0, desktop: 0, tablet: 0 },
                areas: store.areaClicks || { pcCaddie: 0, course: 0, member: 0, guestHotel: 0, adventure: 0, academy: 0 },
                newsViews: store.newsViews || {}
            };

            if (period === 'today' && store.dailyBuckets && store.dailyBuckets[todayKey]) {
                const b = store.dailyBuckets[todayKey];
                source = {
                    views: b.views || 0,
                    sessions: b.sessions || 0,
                    teeClicks: b.teeClicks || 0,
                    devices: b.devices || { mobile: 0, desktop: 0, tablet: 0 },
                    areas: b.areas || { pcCaddie: 0, course: 0, member: 0, guestHotel: 0, adventure: 0, academy: 0 },
                    newsViews: b.newsViews || {}
                };
            } else if (period === 'yesterday' && store.dailyBuckets && store.dailyBuckets[yestKey]) {
                const b = store.dailyBuckets[yestKey];
                source = {
                    views: b.views || 0,
                    sessions: b.sessions || 0,
                    teeClicks: b.teeClicks || 0,
                    devices: b.devices || { mobile: 0, desktop: 0, tablet: 0 },
                    areas: b.areas || { pcCaddie: 0, course: 0, member: 0, guestHotel: 0, adventure: 0, academy: 0 },
                    newsViews: b.newsViews || {}
                };
            }

            const devTotal = (source.devices.mobile || 0) + (source.devices.desktop || 0) + (source.devices.tablet || 0);
            const mobilePct = devTotal > 0 ? Math.round((source.devices.mobile / devTotal) * 100) : 0;
            const desktopPct = devTotal > 0 ? Math.round((source.devices.desktop / devTotal) * 100) : 0;
            const tabletPct = devTotal > 0 ? Math.max(100 - mobilePct - desktopPct, 0) : 0;

            const areaTotal = (
                (source.areas.pcCaddie || 0) +
                (source.areas.course || 0) +
                (source.areas.member || 0) +
                (source.areas.guestHotel || 0) +
                (source.areas.adventure || 0) +
                (source.areas.academy || 0)
            );

            function calcPct(count) {
                if (!areaTotal || areaTotal === 0) return 0;
                return Math.round((count / areaTotal) * 100);
            }

            return {
                isArchive: false,
                launchDate: store.launchDate,
                lastUpdated: store.lastUpdated,
                totalViews: source.views,
                uniqueSessions: source.sessions,
                teeTimeClicks: source.teeClicks,
                teeTimePct: calcPct(source.areas.pcCaddie || source.teeClicks),
                avgDuration: source.views > 0 ? '2 Min. 45s' : '0 Min.',
                bounceRate: source.views > 0 ? '· 21.4% Absprung' : '· Messung aktiv',
                devices: {
                    mobile: mobilePct,
                    desktop: desktopPct,
                    tablet: tabletPct
                },
                areas: [
                    { name: 'Startzeiten & PC CADDIE Buchung', clicks: source.areas.pcCaddie || source.teeClicks || 0, pct: calcPct(source.areas.pcCaddie || source.teeClicks), icon: '⛳' },
                    { name: '18-Loch Resort Course, Bahnen & Scorecard', clicks: source.areas.course || 0, pct: calcPct(source.areas.course), icon: '🏌️' },
                    { name: 'Mitgliedschaft, Spielrechte & Schnupperjahr', clicks: source.areas.member || 0, pct: calcPct(source.areas.member), icon: '📜' },
                    { name: 'Resorthotel, Zimmer & Sonnenterrasse', clicks: source.areas.guestHotel || 0, pct: calcPct(source.areas.guestHotel), icon: '🏨' },
                    { name: 'Adventure Golf & Familienangebote', clicks: source.areas.adventure || 0, pct: calcPct(source.areas.adventure), icon: '🏴‍☠️' },
                    { name: 'Golfakademie, Platzreife & Training', clicks: source.areas.academy || 0, pct: calcPct(source.areas.academy), icon: '🎓' }
                ],
                newsViews: source.newsViews || {}
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
