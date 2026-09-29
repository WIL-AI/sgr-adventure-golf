/**
 * Gut Wissmannshof - News Database & Data Layer
 * Provides authentic resort news, image catalog, localStorage persistence & server sync.
 */

const NEWS_IMAGE_PRESETS = [
    {
        id: 'golden_hour_tree',
        title: 'Sonnenuntergang am See (Golden Hour)',
        category: 'Platz / Atmosphäre',
        url: 'assets/gallery_golden_hour_tree_lake.jpg'
    },
    {
        id: 'sunset_canyon',
        title: 'Canyon Course Sonnenuntergang',
        category: 'Platz / Canyon',
        url: 'assets/gallery_sunset_canyon_lake.jpg'
    },
    {
        id: 'island_green',
        title: 'Inselgrün mit Kiefernwald',
        category: 'Platz / Signature Hole',
        url: 'assets/gallery_island_green_pineforest.jpg'
    },
    {
        id: 'lavender_fairway',
        title: 'Fairway mit Lavendelblüte',
        category: 'Platz / Natur',
        url: 'assets/gallery_lavender_fairway.jpg'
    },
    {
        id: 'bunker_stonewall',
        title: 'Bunker mit Natursteinmauer',
        category: 'Platz / Design',
        url: 'assets/gallery_bunker_stonewall_water.jpg'
    },
    {
        id: 'fairway_waves',
        title: 'Sanfte Fairway-Wellen & Eichen',
        category: 'Platz / Panorama',
        url: 'assets/gallery_fairway_waves_oak.jpg'
    },
    {
        id: 'panorama_dunes',
        title: 'Dünen-Panorama & Wasser',
        category: 'Platz / Panorama',
        url: 'assets/gallery_panorama_dunes_lake.jpg'
    },
    {
        id: 'flag_pin',
        title: 'Fahne im Abendlicht',
        category: 'Golf / Detail',
        url: 'assets/gallery_flag_pin.jpg'
    },
    {
        id: 'resort_hotel',
        title: 'Resort Hotel Außenansicht',
        category: 'Hotel / Resort',
        url: 'assets/resort_hotel.jpg'
    },
    {
        id: 'restaurant_indoor',
        title: 'Restaurant Wissmannshof Interieur',
        category: 'Gastronomie',
        url: 'assets/restaurant_indoor.webp'
    },
    {
        id: 'resort_academy',
        title: 'Golf Akademie & Fitting',
        category: 'Akademie / Training',
        url: 'assets/resort_academy.jpg'
    },
    {
        id: 'hotel_room',
        title: 'Elegante Suite / Hotelzimmer',
        category: 'Hotel / Wohnen',
        url: 'assets/hotel_room.webp'
    }
];

const DEFAULT_NEWS = [
    {
        id: 'news-oktoberfest-2026',
        category: 'turniere',
        categoryLabel: { de: 'Turniere & Events', en: 'Tournaments & Events' },
        featured: true,
        date: '2026-10-03',
        image: 'assets/gallery_golden_hour_tree_lake.jpg',
        title: {
            de: 'Oktoberfest Scramble 2026: Sportlicher Wettkampf & bayerische Gemütlichkeit',
            en: 'Oktoberfest Scramble 2026: Great Golf & Bavarian Hospitality'
        },
        teaser: {
            de: 'O\'zapft is auf Gut Wissmannshof! Am Samstag, den 3. Oktober 2026 laden wir zum beliebten Oktoberfest Scramble mit Weißwurst-Frühstück, Halfway-Schmankerln und zünftiger Siegerehrung ein.',
            en: 'Celebrate our traditional Oktoberfest Scramble on October 3, 2026 with exciting team golf, Bavarian delicacies, and a festive clubhouse evening.'
        },
        author: 'Spielführung & Clubsekretariat',
        readTime: '3 Min.',
        content: {
            de: `
                <p class="lead-text">Zünftige Stimmung, beste Platzbedingungen und geselliges Teamplay: Am Samstag, 3. Oktober 2026, steigt das traditionelle Oktoberfest Scramble auf Gut Wissmannshof.</p>
                
                <h3>Turnierformat & Spielmodus</h3>
                <p>Gespielt wird ein vergnüglicher 4er-Scramble (nicht handicaprelevant), bei dem der gemeinsame Teamgeist und die Freude am Spiel an erster Stelle stehen. Kanonenstart ist um 11:00 Uhr auf unserer 18-Loch-Meisterschaftsanlage.</p>

                <h3>Bayerische Gaumenfreuden & Rahmenprogramm</h3>
                <ul>
                    <li><strong>10:00 Uhr:</strong> Zünftiges Weißwurst-Frühstück mit frischen Brezn zur Einstimmung im Clubhaus</li>
                    <li><strong>Rundenverpflegung:</strong> Bayerische Halfway-Hütte mit frisch gezapftem Festbier und herzhaften Schmankerln</li>
                    <li><strong>Ab 17:30 Uhr:</strong> Großes bayerisches Abendbuffet im Club-Restaurant mit knusprigem Krustenbraten, Hendl und ofenfrischem Kaiserschmarrn</li>
                    <li><strong>Siegerehrung & Prämierung:</strong> Trachten, Dirndl & Lederhosen sind ausdrücklich erwünscht – die originellsten Outfits werden mit Sonderpreisen prämiert!</li>
                </ul>

                <p>Die Startplätze sind wie in jedem Jahr heiß begehrt. Anmeldungen sind ab sofort online über PC CADDIE oder direkt im Clubsekretariat möglich.</p>
            `,
            en: `
                <p class="lead-text">Festive atmosphere, pristine course conditions, and great team spirit: On Saturday, October 3, 2026, Gut Wissmannshof hosts its traditional Oktoberfest Scramble.</p>
                
                <h3>Tournament Format</h3>
                <p>Fun 4-player scramble with shotgun start at 11:00 AM on our 18-hole Championship course.</p>

                <h3>Bavarian Culinary Delights & Evening Program</h3>
                <ul>
                    <li><strong>10:00 AM:</strong> Traditional Bavarian breakfast with pretzels and white sausages</li>
                    <li><strong>Halfway Station:</strong> Fresh festival draft beer and hearty snacks</li>
                    <li><strong>From 5:30 PM:</strong> Festive evening buffet with roast pork, crispy chicken, and warm Kaiserschmarrn</li>
                    <li><strong>Dress Code:</strong> Traditional Bavarian attire (Tracht / Dirndl) warmly welcomed with special awards for best outfits!</li>
                </ul>
            `
        }
    },
    {
        id: 'news-baerli-cup-clubmeister-2026',
        category: 'turniere',
        categoryLabel: { de: 'Turniere & Events', en: 'Tournaments & Events' },
        featured: true,
        date: '2026-09-27',
        image: 'assets/gallery_flag_pin.jpg',
        title: {
            de: 'Bärli Cup Benefiz-Turnier & Rückblick auf die Clubmeisterschaften 2026',
            en: 'Bärli Cup Charity Tournament & Club Championship Highlights 2026'
        },
        teaser: {
            de: 'Großartiger Sport für den guten Zweck: Beim traditionsreichen Bärli Cup 2026 erspielten unsere Teilnehmer eine fantastische Spendensumme. Ein Rückblick auf spannende Meisterschaftstage auf Gut Wissmannshof.',
            en: 'Exciting golf for a noble cause: The Bärli Cup 2026 delivered thrilling competition and generous donations alongside our annual Club Championships.'
        },
        author: 'Turnierleitung & Vorstand',
        readTime: '3 Min.',
        content: {
            de: `
                <p class="lead-text">Ein Spätsommer im Zeichen von sportlichen Spitzenleistungen und sozialem Engagement: Der Bärli Cup 2026 und die Clubmeisterschaften boten hochklassiges Golf auf unserem 18-Loch Championship Course.</p>
                
                <h3>Der Bärli Cup 2026: Golfen und Gutes tun</h3>
                <p>Über 70 Golferinnen und Golfer traten beim diesjährigen Bärli Cup Benefiz-Turnier an, um gemeinsam wichtige regionale Hilfsprojekte zu unterstützen. Dank großzügiger Sponsoren, Startgelder und Sonderwertungen an Bahn 7 und Bahn 14 konnte ein neuer Spendenrekord überreicht werden. Wir bedanken uns von Herzen bei allen Förderern, Spielern und Helfern für dieses überwältigende Engagement!</p>

                <h3>Packende Clubmeisterschaften</h3>
                <p>Bereits bei den vorangegangenen Clubmeisterschaften in den Klassen Offen, AK 50 und AK 65 lieferten sich unsere Mitglieder packende Duelle bis zum 18. Grün. Bei besten Platzverhältnissen und spurtreuen Grüns wurden herausragende Scores erspielt.</p>

                <blockquote>
                    „Herzlichen Glückwunsch allen Clubmeisterinnen und Clubmeistern 2026 und ein großes Dankeschön an das Greenkeeping- und Gastronomie-Team für die perfekte Organisation dieses Turnierwochenendes!“
                    <cite>— Spielführer Gut Wissmannshof</cite>
                </blockquote>
            `,
            en: `
                <p class="lead-text">A wonderful weekend celebrating sporting excellence and charitable commitment: The Bärli Cup 2026 and our annual Club Championships provided fantastic golf on our championship course.</p>
                
                <h3>Bärli Cup 2026 Charity Success</h3>
                <p>Over 70 players participated in this year’s charity event, raising a record donation sum for regional community projects. A heartfelt thank you to all sponsors, players, and volunteers!</p>

                <h3>Club Championship Thrills</h3>
                <p>Our members competed across Open, Senior 50+, and 65+ divisions, delivering sensational finishes right down to the 18th green.</p>
            `
        }
    },
    {
        id: 'news-quirmbach-2026',
        category: 'golfschule',
        categoryLabel: { de: 'Golfschule', en: 'Golf Academy' },
        featured: true,
        date: '2026-09-20',
        image: 'assets/resort_academy.jpg',
        title: {
            de: 'Stefan Quirmbach startet bei uns als „Signature Pro“',
            en: 'Stefan Quirmbach joins Gut Wissmannshof as „Signature Pro“'
        },
        teaser: {
            de: 'Ab Beginn des Jahres 2027 wird es auf unserer Anlage eine besondere sportliche Handschrift geben: Master Professional und PGA-Ehrenpräsident Stefan Quirmbach wird als „Signature Pro“ im Sport- und Golf-Resort Gut Wissmannshof tätig sein.',
            en: 'Starting early 2027, Master Professional and long-standing PGA President Stefan Quirmbach will join Gut Wissmannshof as our exclusive Signature Pro.'
        },
        author: 'Clubmanagement Gut Wissmannshof',
        readTime: '3 Min.',
        content: {
            de: `
                <p class="lead-text">Liebe Mitglieder,</p>
                <p>schon heute arbeiten wir an Vorhaben, die Euren Besuch auf Gut Wissmannshof im kommenden Jahr abwechslungsreicher machen werden. Dazu gehört der vollständige Ausbau des Canyon-Kurses — und einige Ergänzungen, mit denen wir Euch zu gegebener Zeit gern überraschen möchten.</p>

                <h3>Neuausrichtung & Erweiterung unserer Golfschule</h3>
                <p>Auch unsere Golfschule richten wir dafür neu aus. Bereits jetzt zeichnet sich ab, dass wir Euch ab 2027 neue Formate anbieten können: Themenkurse zum langen Spiel, zum Bunker oder zum Putten, Themeneinheiten direkt auf dem Platz, flexiblere Zeitfenster für Euer Einzeltraining — und neue Turnierformate stehen ebenfalls in unseren Überlegungen.</p>
                <p>Das Ziel dahinter ist einfach: Dass Ihr Euer Spiel Stück für Stück verbessert und weniger Schläge auf Eurer Scorekarte stehen habt.</p>

                <h3>Stefan Quirmbach als „Signature Pro“</h3>
                <p>Das vollständige Golfschulkonzept 2027 stellen wir Euch vor, sobald die laufenden Gespräche abgeschlossen sind. Eine maßgebliche Entscheidung können wir Euch jedoch heute bereits mitteilen: Ab Beginn des Jahres 2027 wird es auf unserer Anlage eine besondere sportliche Handschrift geben — Stefan Quirmbach wird als „Signature Pro“ im Sport- und Golf-Resort Gut Wissmannshof tätig sein.</p>

                <p>Den meisten von Euch dürfte sein Name vertraut sein. Stefan Quirmbach hat den deutschen Golfsport über Jahrzehnte mitgeprägt — als Präsident der PGA of Germany von 2000 bis 2021, damit als am längsten amtierender Präsident in der Geschichte des Verbandes. Seit 2021 ist er dessen Ehrenpräsident. Er ist Master Professional und Health Professional der PGA of Germany, seit 1996 Five-Star Professional der PGA of Europe und wurde 2022 als erstes deutsches PGA-Mitglied mit der renommierten Christer Lindberg Bowl ausgezeichnet.</p>

                <p>In den vergangenen 23 Jahren hat Stefan Quirmbach seine eigene Golfschule im Hardenberg Golfresort geleitet; davor haben seine Frau Katharina und er das Golfresort Semlin am See im Namen von drei Investoren aufgebaut.</p>

                <h3>Was bedeutet „Signature Pro“?</h3>
                <p>Stefan Quirmbach übernimmt bei uns keine Leitungsfunktion in der Golfschule. Er arbeitet eigenständig und in eigener Verantwortung und wird dabei einen Kundenkreis betreuen, den er aus dem gesamten Bundesgebiet mit nach Gut Wissmannshof bringt.</p>
                <p>Sein Training ist von hohem technischen Anspruch geprägt und wird durch moderne Systeme zur Bewegungs- und Ballfluganalyse unterstützt. Auf dem Wissmannshof wird er Einzelunterricht sowie ausgewählte Spezialkurse anbieten und parallel dazu auch weiterhin seine Trainingsreisen durchführen. Informationen zu seinem Angebot auf dem Wissmannshof findet Ihr ab Dezember auf <strong><a href="https://www.stefanquirmbach.de" target="_blank">www.stefanquirmbach.de</a></strong>.</p>
                <p>Für Euch bedeutet das: Auch Ihr könnt Stefan Quirmbach zukünftig hier auf dem Wissmannshof für Euer eigenes Training buchen. Dieses Angebot ergänzt das bestehende Trainingsangebot unserer Anlage.</p>

                <h3>Unsere Golfschule bleibt Eure feste Anlaufstelle</h3>
                <p>Was Ihr an unserer Golfschule schätzt, bleibt Euch selbstverständlich erhalten. Sie bleibt Eure erste Adresse für den laufenden Unterrichtsbetrieb — und wir bauen sie aus. Neben Daniel Wünsche wird Euch künftig auch ein Junior Pro zur Verfügung stehen. Damit können wir das Angebot für Mitglieder und Gäste deutlich erweitern und verschiedene Einstiegsangebote für alle, die neu zum Golf kommen oder nach längerer Pause wieder einsteigen, ermöglichen.</p>
                <p>Für Eure Trainingsplanung gilt wie gewohnt: Die verfügbaren Trainerzeiten der Golfschule findet Ihr im Timetable in PC CADDIE — dort könnt Ihr Eure Unterrichtsstunden direkt buchen.</p>

                <p>Wir freuen uns auf das Jahr 2027 und darauf, gemeinsam mit Euch die nächsten sportlichen Schritte auf dem Wissmannshof zu gehen.</p>
            `,
            en: `
                <p class="lead-text">Dear Members,</p>
                <p>We are continuously working to elevate your golfing experience at Gut Wissmannshof. Alongside the full expansion of the Canyon Course, we are excited to announce a major enhancement to our golf academy from 2027.</p>

                <h3>Stefan Quirmbach as Signature Pro</h3>
                <p>Master Professional and PGA of Germany Honorary President Stefan Quirmbach will join Gut Wissmannshof as our Signature Pro from early 2027. With over two decades leading his academy at Hardenberg, Stefan brings world-class expertise, launch monitor analysis, and specialized coaching clinics to our resort.</p>
                <p>Members and guests can book individual sessions with Stefan Quirmbach starting December on <a href="https://www.stefanquirmbach.de" target="_blank">www.stefanquirmbach.de</a>.</p>
            `
        }
    }
];

// Storage key
const NEWS_STORAGE_KEY = 'sgr_resort_news_v2';
const LEGACY_STORAGE_KEYS = ['sgr_resort_news'];
const OBSOLETE_IDS = new Set(['news-001', 'news-002', 'news-003', 'news-004', 'news-005', 'news-006']);

/**
 * News Repository API
 * Synchronous local access with async server sync, automatic cleanup of obsolete mock items,
 * and JSON persistence.
 */
const NewsRepository = {
    _cached: null,

    /**
     * Cleanse a news array from deprecated mock entries
     */
    _sanitize: function(list) {
        if (!Array.isArray(list)) return [];
        return list.filter(item => item && item.id && !OBSOLETE_IDS.has(item.id));
    },

    getAll: function() {
        if (this._cached && Array.isArray(this._cached) && this._cached.length > 0) {
            return this._cached;
        }

        // Try primary v2 key
        try {
            const stored = localStorage.getItem(NEWS_STORAGE_KEY);
            if (stored) {
                const parsed = JSON.parse(stored);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    const clean = this._sanitize(parsed);
                    if (clean.length > 0) {
                        this._cached = clean;
                        return clean;
                    }
                }
            }
        } catch (e) {
            console.warn('Could not read news from localStorage:', e);
        }

        // Clean legacy storage keys
        try {
            LEGACY_STORAGE_KEYS.forEach(k => localStorage.removeItem(k));
        } catch (e) {}

        this._cached = DEFAULT_NEWS;
        try {
            localStorage.setItem(NEWS_STORAGE_KEY, JSON.stringify(DEFAULT_NEWS));
        } catch (e) {}

        return DEFAULT_NEWS;
    },

    /**
     * Attempts to fetch the latest authentic news dataset from data/news.json or api/news.php
     * Returns a Promise resolving to the news array.
     */
    syncFromServer: async function() {
        const endpoints = ['data/news.json', 'api/news.php'];
        for (const url of endpoints) {
            try {
                const resp = await fetch(url + '?t=' + Date.now(), { cache: 'no-store' });
                if (resp.ok) {
                    const data = await resp.json();
                    if (Array.isArray(data) && data.length > 0) {
                        const cleanData = this._sanitize(data);
                        if (cleanData.length > 0) {
                            this._cached = cleanData;
                            try {
                                localStorage.setItem(NEWS_STORAGE_KEY, JSON.stringify(cleanData));
                            } catch (e) {}
                            return cleanData;
                        }
                    }
                }
            } catch (err) {
                // Endpoint unavailable
            }
        }
        return this.getAll();
    },

    saveAll: function(newsList) {
        if (!Array.isArray(newsList)) return false;
        const cleanList = this._sanitize(newsList);
        this._cached = cleanList;
        try {
            localStorage.setItem(NEWS_STORAGE_KEY, JSON.stringify(cleanList));
        } catch (e) {
            console.error('Failed to save news to localStorage:', e);
        }

        // Asynchronously push to server API if reachable
        try {
            fetch('api/news.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(cleanList)
            }).then(r => r.json()).then(res => {
                if (res && res.success) {
                    console.log('✅ News successfully synchronized with server storage (data/news.json)');
                }
            }).catch(() => {
                // Static host or offline
            });
        } catch (e) {}

        return true;
    },

    getById: function(id) {
        const list = this.getAll();
        return list.find(item => item.id === id) || null;
    },

    saveItem: function(item) {
        const list = [...this.getAll()];
        const index = list.findIndex(n => n.id === item.id);
        if (index >= 0) {
            list[index] = item;
        } else {
            list.unshift(item); // New items to the top
        }
        this.saveAll(list);
        return item;
    },

    deleteItem: function(id) {
        const list = this.getAll();
        const filtered = list.filter(item => item.id !== id);
        this.saveAll(filtered);
        return filtered;
    },

    resetToDefault: function() {
        this.saveAll(DEFAULT_NEWS);
        return DEFAULT_NEWS;
    },

    getPresets: function() {
        return NEWS_IMAGE_PRESETS;
    },

    /**
     * Import JSON string or array, merge/overwrite and persist.
     */
    importData: function(data, overwrite = true) {
        let items = data;
        if (typeof data === 'string') {
            try {
                items = JSON.parse(data);
            } catch (e) {
                throw new Error('Ungültiges JSON-Format: ' + e.message);
            }
        }
        if (!Array.isArray(items)) {
            throw new Error('Import-Daten müssen ein Array von News-Artikeln sein.');
        }

        const sanitized = this._sanitize(items);
        let result;
        if (overwrite) {
            result = sanitized;
        } else {
            const current = this.getAll();
            const existingIds = new Set(current.map(i => i.id));
            const newItems = sanitized.filter(i => !existingIds.has(i.id));
            result = [...newItems, ...current];
        }

        this.saveAll(result);
        return result;
    }
};

// Export to window for browser usage
window.NewsRepository = NewsRepository;
window.DEFAULT_NEWS = DEFAULT_NEWS;
window.NEWS_IMAGE_PRESETS = NEWS_IMAGE_PRESETS;
