import os
import base64
import subprocess
import shutil
import tempfile
import pypdf

# 1. Read resort logo
logo_path = os.path.join("assets", "logo_regular_black.png")
if os.path.exists(logo_path):
    with open(logo_path, "rb") as f:
        logo_b64 = base64.b64encode(f.read()).decode("utf-8")
else:
    logo_b64 = ""

print(f"Loaded logo b64 length: {len(logo_b64)}")

# -------------------------------------------------------------
# GERMAN TEMPLATE (5 PAGES)
# -------------------------------------------------------------
html_de = f"""<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Anleitung Gut Wissmannshof — News Redaktion & Platzstatus</title>
    <style>
        @page {{
            size: A4 portrait;
            margin: 10mm 12mm 12mm 12mm;
        }}

        :root {{
            --primary: #0D2218;
            --primary-light: #163828;
            --gold: #B8963E;
            --gold-dark: #9E7F30;
            --gold-bg: #F9F6F0;
            --cream: #F8F5EE;
            --cream-dark: #EDE7DA;
            --charcoal: #2A2E2B;
            --muted: #5E6660;
            --border: #E2DBD0;
            --white: #FFFFFF;
            --green: #28A745;
            --green-bg: #E8F5E9;
            --green-text: #1B5E20;
            --red: #C82333;
            --red-bg: #FDEDEC;
            --red-text: #891621;
            --amber: #E67E22;
            --amber-bg: #FEF9E7;
            --amber-text: #935116;
        }}

        * {{
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
        }}

        body {{
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            color: var(--charcoal);
            background: #FFFFFF;
            font-size: 9.3pt;
            line-height: 1.42;
        }}

        .page {{
            width: 100%;
            height: 272mm;
            max-height: 272mm;
            page-break-after: always;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            overflow: hidden;
            background: #FFFFFF;
            padding: 0;
        }}
        .page:last-child {{
            page-break-after: auto;
        }}

        .page-header {{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 7px;
            border-bottom: 1.5px solid var(--border);
            margin-bottom: 10px;
        }}
        .page-header-left {{
            display: flex;
            align-items: center;
            gap: 10px;
        }}
        .header-logo-mini {{
            height: 24px;
            width: auto;
        }}
        .header-brand {{
            font-size: 8pt;
            font-weight: 800;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: var(--primary);
        }}
        .header-tag {{
            font-size: 7.5pt;
            font-weight: 700;
            color: var(--gold-dark);
            background: var(--gold-bg);
            border: 1px solid var(--border);
            padding: 2px 7px;
            border-radius: 999px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }}
        .page-header-right {{
            font-size: 7.5pt;
            font-weight: 600;
            color: var(--muted);
        }}

        .page-footer {{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 7px;
            border-top: 1px solid var(--border);
            margin-top: 8px;
            font-size: 7.5pt;
            color: var(--muted);
        }}
        .page-footer-left {{
            display: flex;
            align-items: center;
            gap: 8px;
        }}
        .footer-dot {{
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: var(--gold);
        }}
        .page-footer-right {{
            font-weight: 700;
            color: var(--primary);
        }}

        .page-content {{
            flex: 1;
            display: flex;
            flex-direction: column;
        }}

        h1.doc-title {{
            font-size: 22pt;
            font-weight: 800;
            color: var(--primary);
            line-height: 1.15;
            letter-spacing: -0.02em;
            margin-bottom: 6px;
        }}
        .doc-subtitle {{
            font-size: 10.5pt;
            color: var(--gold-dark);
            font-weight: 600;
            margin-bottom: 14px;
            line-height: 1.35;
        }}
        h2.section-title {{
            font-size: 12.5pt;
            font-weight: 800;
            color: var(--primary);
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 9px;
            padding-bottom: 4px;
            border-bottom: 2px solid var(--gold);
        }}
        h3.block-title {{
            font-size: 9.8pt;
            font-weight: 700;
            color: var(--primary);
            margin-bottom: 3px;
        }}

        .card {{
            background: var(--cream);
            border: 1px solid var(--border);
            border-radius: 8px;
            padding: 10px 13px;
            margin-bottom: 9px;
        }}
        .card-white {{
            background: var(--white);
            border: 1px solid var(--border);
            border-radius: 8px;
            padding: 10px 13px;
            margin-bottom: 9px;
            box-shadow: 0 1px 4px rgba(0,0,0,0.03);
        }}
        .card-gold {{
            background: linear-gradient(135deg, #FAF7EE 0%, #F5EEDB 100%);
            border: 1.5px solid #D6C291;
            border-radius: 8px;
            padding: 11px 14px;
            margin-bottom: 10px;
        }}

        .badge {{
            display: inline-flex;
            align-items: center;
            gap: 4px;
            font-size: 7.2pt;
            font-weight: 700;
            padding: 2px 7px;
            border-radius: 4px;
            text-transform: uppercase;
            letter-spacing: 0.04em;
        }}
        .badge-green {{ background: var(--green-bg); color: var(--green-text); border: 1px solid #C8E6C9; }}
        .badge-red {{ background: var(--red-bg); color: var(--red-text); border: 1px solid #FFCDD2; }}
        .badge-amber {{ background: var(--amber-bg); color: var(--amber-text); border: 1px solid #FFE082; }}
        .badge-gold {{ background: var(--gold-bg); color: var(--gold-dark); border: 1px solid #E2DBD0; }}
        .badge-dark {{ background: var(--primary); color: #FFFFFF; }}

        .grid-2 {{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 11px;
            margin-bottom: 9px;
        }}
        .grid-3 {{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 9px;
            margin-bottom: 9px;
        }}
        .grid-4 {{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            gap: 7px;
            margin-bottom: 9px;
        }}

        .step-row {{
            display: flex;
            align-items: flex-start;
            gap: 10px;
            margin-bottom: 8px;
        }}
        .step-num {{
            width: 22px;
            height: 22px;
            min-width: 22px;
            border-radius: 50%;
            background: var(--primary);
            color: var(--white);
            font-size: 8pt;
            font-weight: 800;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 1px;
        }}
        .step-num.gold {{
            background: var(--gold);
            color: var(--primary);
        }}
        .step-body {{
            flex: 1;
        }}
        .step-title {{
            font-size: 9.3pt;
            font-weight: 700;
            color: var(--primary);
            margin-bottom: 2px;
        }}
        .step-desc {{
            font-size: 8.6pt;
            color: var(--charcoal);
            line-height: 1.35;
        }}

        table.status-table {{
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 9px;
            font-size: 8.4pt;
        }}
        table.status-table th {{
            background: var(--primary);
            color: var(--white);
            padding: 6px 9px;
            text-align: left;
            font-size: 7.8pt;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }}
        table.status-table th:first-child {{ border-top-left-radius: 6px; }}
        table.status-table th:last-child {{ border-top-right-radius: 6px; }}
        table.status-table td {{
            padding: 6px 9px;
            border-bottom: 1px solid var(--border);
            vertical-align: middle;
        }}
        table.status-table tr:nth-child(even) td {{
            background: var(--cream);
        }}

        .alert-tip {{
            background: #F0F7F4;
            border-left: 3.5px solid var(--green);
            padding: 7px 11px;
            border-radius: 0 6px 6px 0;
            margin-bottom: 7px;
            font-size: 8.4pt;
        }}
        .alert-important {{
            background: #FDF9EE;
            border-left: 3.5px solid var(--gold);
            padding: 7px 11px;
            border-radius: 0 6px 6px 0;
            margin-bottom: 7px;
            font-size: 8.4pt;
        }}
        .code-pill {{
            font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
            background: #ECE6D8;
            padding: 2px 6px;
            border-radius: 4px;
            font-size: 8.3pt;
            font-weight: 700;
            color: var(--primary);
            border: 1px solid #D6CCA8;
        }}

        .mockup-bar {{
            background: var(--primary);
            color: var(--white);
            padding: 6px 11px;
            border-radius: 6px 6px 0 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 7.8pt;
            font-weight: 700;
        }}
        .mockup-body {{
            background: var(--white);
            border: 1.5px solid var(--primary);
            border-top: none;
            border-radius: 0 0 6px 6px;
            padding: 8px 10px;
            margin-bottom: 9px;
        }}

        .cover-hero {{
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
            color: var(--white);
            border-radius: 12px;
            padding: 24px 22px;
            margin-top: 10px;
            margin-bottom: 16px;
            position: relative;
        }}
        .cover-hero::after {{
            content: "";
            position: absolute;
            bottom: 0;
            right: 0;
            width: 130px;
            height: 130px;
            background: radial-gradient(circle, rgba(184,150,62,0.22) 0%, transparent 70%);
            border-radius: 50%;
        }}
        .cover-badge-top {{
            display: inline-block;
            background: var(--gold);
            color: var(--primary);
            font-weight: 800;
            font-size: 7.8pt;
            padding: 4px 10px;
            border-radius: 999px;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            margin-bottom: 10px;
        }}
        .cover-hero h1 {{
            font-size: 20pt;
            line-height: 1.2;
            margin-bottom: 8px;
            font-weight: 800;
            color: #FFFFFF;
        }}
        .cover-hero p {{
            font-size: 9.6pt;
            color: #EDE7DA;
            line-height: 1.4;
            max-width: 90%;
        }}

        .cover-access-box {{
            background: var(--gold-bg);
            border: 2px solid var(--gold);
            border-radius: 10px;
            padding: 14px 16px;
            margin-bottom: 15px;
        }}

        .check-item {{
            display: flex;
            align-items: flex-start;
            gap: 8px;
            margin-bottom: 6px;
            font-size: 8.5pt;
        }}
        .check-box-icon {{
            width: 16px;
            height: 16px;
            min-width: 16px;
            border-radius: 4px;
            background: var(--green);
            color: #FFFFFF;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 8.5pt;
            font-weight: 900;
            margin-top: 1px;
        }}
    </style>
</head>
<body>

<!-- SEITE 1 DE -->
<div class="page">
    <div class="page-header">
        <div class="page-header-left">
            <img src="data:image/png;base64,{logo_b64}" class="header-logo-mini" alt="Gut Wissmannshof">
            <span class="header-brand">Gut Wissmannshof Golf Resort</span>
            <span class="header-tag">Redaktions-Handbuch</span>
        </div>
        <div class="page-header-right">Saison 2026 • Offizieller Leitfaden</div>
    </div>

    <div class="page-content">
        <div class="cover-hero">
            <span class="cover-badge-top">Offizieller Praxis-Leitfaden</span>
            <h1>News-Redaktion &amp;<br>Live-Platzstatus Studio</h1>
            <p>Einfache, intuitive Schritt-für-Schritt Anleitung für Sekretariat, Pro Shop, Clubmanagement und Redaktion zur Pflege der Website &amp; Infoboards.</p>
        </div>

        <div class="cover-access-box">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h3 style="font-size: 10.5pt; color: var(--primary); font-weight: 800; display: flex; align-items: center; gap: 6px;">
                    🔑 Zugangsdaten &amp; Direkteinstieg
                </h3>
                <span class="badge badge-gold">Intern &amp; Vertraulich</span>
            </div>
            
            <div class="grid-2" style="margin-bottom: 8px;">
                <div style="background: #FFFFFF; border: 1px solid var(--border); border-radius: 6px; padding: 10px 12px;">
                    <div style="font-size: 7.2pt; text-transform: uppercase; font-weight: 800; color: var(--muted); margin-bottom: 4px;">Webadresse (URL im Browser aufrufen)</div>
                    <div style="font-size: 9.3pt; font-weight: 800; color: var(--primary);">
                        <span style="color: var(--primary); text-decoration: underline;">wissmannshof.golf/admin-news.html</span>
                    </div>
                </div>
                <div style="background: #FFFFFF; border: 1px solid var(--border); border-radius: 6px; padding: 10px 12px;">
                    <div style="font-size: 7.2pt; text-transform: uppercase; font-weight: 800; color: var(--muted); margin-bottom: 4px;">Passwort für den Redaktionsbereich</div>
                    <div style="font-size: 10.8pt; font-family: monospace; font-weight: 800; color: #B8963E; letter-spacing: 0.05em;">
                        Sgr2026# <span style="font-size: 7.2pt; font-weight: 500; color: var(--muted); font-family: sans-serif;">(Alt: Wissmannshof2026)</span>
                    </div>
                </div>
            </div>

            <div style="font-size: 8.2pt; color: var(--muted); line-height: 1.35;">
                💡 <strong>Tipp für den Alltag:</strong> Legen Sie sich die Seite als Lesezeichen / Favorit im Browser an (Chrome, Edge, Safari auf PC, iPad oder Smartphone). Die Anmeldung bleibt auf Ihrem Gerät gespeichert.
            </div>
        </div>

        <h2 class="section-title">Die zwei Kernbereiche des Redaktions-Studios</h2>

        <div class="grid-2" style="margin-bottom: 12px;">
            <div class="card-white" style="border-top: 3px solid var(--green);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                    <h3 class="block-title" style="color: var(--green-text);">1. Live Resort- &amp; Platzstatus</h3>
                    <span class="badge badge-green">Tägliche Morgenroutine</span>
                </div>
                <p style="font-size: 8.5pt; color: var(--charcoal); margin-bottom: 8px;">
                    Die morgendliche 60-Sekunden-Pflege. Steuert live, ob Golf-Carts erlaubt sind, welche Grüns bespielt werden, wie das Sekretariat erreichbar ist und welcher Platzkurs geöffnet ist.
                </p>
                <div style="font-size: 7.8pt; font-weight: 700; color: var(--muted);">
                    📍 Sichtbar auf: Startseite (Hero), Platzstatus-Leiste, Buchungsseite &amp; Clubhaus-Monitore.
                </div>
            </div>

            <div class="card-white" style="border-top: 3px solid var(--gold);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                    <h3 class="block-title" style="color: var(--gold-dark);">2. News- &amp; Content-Studio</h3>
                    <span class="badge badge-gold">Artikel &amp; Turniere</span>
                </div>
                <p style="font-size: 8.5pt; color: var(--charcoal); margin-bottom: 8px;">
                    Verfassen und Verwalten von Beiträgen: Turnierberichte, Gastronomie-Events, Platzerneuerungen, Angebote und Jugend. Inklusive Fotos, Live-Vorschau und automatischer Archivierung.
                </p>
                <div style="font-size: 7.8pt; font-weight: 700; color: var(--muted);">
                    📍 Sichtbar auf: Startseite (News-Kacheln), News-Archiv &amp; Social-Media-Links.
                </div>
            </div>
        </div>

        <div class="alert-important">
            <strong>Keine technischen Vorkenntnisse nötig:</strong> Alle Änderungen werden mit visuellen Schaltern, Schnellvorlagen und Formularen gepflegt. Eine intuitive Live-Vorschau zeigt Ihnen jederzeit exakt das Endergebnis, bevor oder während Sie speichern.
        </div>
    </div>

    <div class="page-footer">
        <div class="page-footer-left">
            <span>Gut Wissmannshof</span>
            <span class="footer-dot"></span>
            <span>News &amp; Platzstatus Leitfaden</span>
            <span class="footer-dot"></span>
            <span>Stand: Frühjahr 2026</span>
        </div>
        <div class="page-footer-right">Seite 1 von 5</div>
    </div>
</div>

<!-- SEITE 2 DE -->
<div class="page">
    <div class="page-header">
        <div class="page-header-left">
            <img src="data:image/png;base64,{logo_b64}" class="header-logo-mini" alt="Gut Wissmannshof">
            <span class="header-brand">Gut Wissmannshof</span>
            <span class="header-tag">Modul 1: Morgenroutine</span>
        </div>
        <div class="page-header-right">Live Resort- &amp; Platzstatus</div>
    </div>

    <div class="page-content">
        <h2 class="section-title">Morgenroutine: Platzstatus in 60 Sekunden pflegen</h2>
        
        <p style="font-size: 8.7pt; color: var(--muted); margin-bottom: 9px;">
            Jeden Morgen informieren sich Mitglieder und Gäste als Erstes über den Zustand des Platzes. Der Statuskasten befindet sich im Backend ganz oben und lässt sich mit wenigen Klicks aktualisieren.
        </p>

        <div class="mockup-bar">
            <span>⛳ BEREICH 1: LIVE RESORT- &amp; PLATZSTATUS (STARTSEITE &amp; MONITORE)</span>
            <span style="color: #90EE90; font-size: 7.2pt;">● LIVE SYNCHRONISIERT</span>
        </div>
        <div class="mockup-body">
            <div class="grid-4" style="margin-bottom: 0;">
                <div style="background: #FAF8F3; border: 1px solid var(--border); border-radius: 6px; padding: 7px;">
                    <div style="font-size: 7.2pt; font-weight: 800; color: var(--muted);">1. ÖFFNUNGSZEITEN</div>
                    <div style="font-size: 8.8pt; font-weight: 800; color: var(--primary); margin: 2px 0;">09:00 - 15:00 Uhr</div>
                    <div style="font-size: 6.8pt; color: var(--muted);">Sekretariat &amp; Telefon</div>
                </div>
                <div style="background: #FAF8F3; border: 1px solid var(--border); border-radius: 6px; padding: 7px;">
                    <div style="font-size: 7.2pt; font-weight: 800; color: var(--muted);">2. E-GOLF-CARTS</div>
                    <span class="badge badge-green" style="margin: 2px 0;">✓ ERLAUBT</span>
                    <div style="font-size: 6.8pt; color: var(--muted);">Notiz: nur auf Wegen</div>
                </div>
                <div style="background: #FAF8F3; border: 1px solid var(--border); border-radius: 6px; padding: 7px;">
                    <div style="font-size: 7.2pt; font-weight: 800; color: var(--muted);">3. TROLLEYS</div>
                    <span class="badge badge-green" style="margin: 2px 0;">✓ ERLAUBT</span>
                    <div style="font-size: 6.8pt; color: var(--muted);">Winterräder empfohlen</div>
                </div>
                <div style="background: #FAF8F3; border: 1px solid var(--border); border-radius: 6px; padding: 7px;">
                    <div style="font-size: 7.2pt; font-weight: 800; color: var(--muted);">4. PLATZ &amp; GRÜNS</div>
                    <span class="badge badge-green" style="margin: 2px 0;">✓ GEÖFFNET</span>
                    <div style="font-size: 6.8pt; color: var(--muted);">18-Loch regulär</div>
                </div>
            </div>
        </div>

        <h3 class="block-title" style="margin-top: 3px; margin-bottom: 7px;">Schritt-für-Schritt Anleitung:</h3>

        <div class="step-row">
            <div class="step-num">1</div>
            <div class="step-body">
                <div class="step-title">Öffnungszeiten &amp; Rezeption prüfen</div>
                <div class="step-desc">
                    Tragen Sie die heutigen Öffnungszeiten ein, z.&nbsp;B. <span class="code-pill">täglich 09:00 - 15:00 Uhr</span>. Dieser Wert steuert gleichzeitig die Hinweistexte für Anrufer und Webseiten-Gäste.
                </div>
            </div>
        </div>

        <div class="step-row">
            <div class="step-num">2</div>
            <div class="step-body">
                <div class="step-title">Golf-Carts &amp; Trolleys freigeben oder einschränken</div>
                <div class="step-desc">
                    Wählen Sie im Dropdown den Status: <strong>Erlaubt (Grün)</strong>, <strong>Eingeschränkt (Gelb)</strong> oder <strong>Gesperrt (Rot)</strong>.<br>
                    <em>Zusatznotiz:</em> Bei Nässe oder Frost können Sie z.&nbsp;B. eintragen: <em>„Nur auf Wegen fahren“</em> oder <em>„Nur mit Winterrädern“</em>.
                </div>
            </div>
        </div>

        <div class="step-row">
            <div class="step-num">3</div>
            <div class="step-body">
                <div class="step-title">Platzstatus &amp; Grüns festlegen (Schnellvorlagen nutzen!)</div>
                <div class="step-desc">
                    Wählen Sie, ob der Platz <strong>Geöffnet</strong>, <strong>Eingeschränkt</strong> oder <strong>Witterungsbedingt gesperrt</strong> ist und ob auf <strong>Sommergrüns</strong> oder <strong>Wintergrüns</strong> gespielt wird.<br>
                    <strong>Zeitersparnis mit Schnellvorlagen:</strong> Ein Klick auf das Dropdown <em>„Schnellvorlage wählen“</em> stellt automatisch alle Werte passend ein (z.&nbsp;B. <em>„18-Loch regulär geöffnet“</em>, <em>„9-Loch Kurs Gelb geöffnet“</em> oder <em>„Frost / Witterungsbedingt gesperrt“</em>).
                </div>
            </div>
        </div>

        <div class="step-row">
            <div class="step-num gold">4</div>
            <div class="step-body">
                <div class="step-title">Speichern &amp; Veröffentlichen (Der goldene Button)</div>
                <div class="step-desc">
                    Klicken Sie ganz unten in der Box auf <strong>„Status jetzt speichern &amp; veröffentlichen“</strong>.<br>
                    In Bruchteilen einer Sekunde erscheint eine grüne Bestätigung (<em>„Status erfolgreich gespeichert &amp; synchronisiert!“</em>). Die Startseite und alle Infoboards aktualisieren sich automatisch.
                </div>
            </div>
        </div>

        <div class="card-gold" style="margin-top: 5px;">
            <div style="font-weight: 800; color: var(--primary); font-size: 8.6pt; margin-bottom: 2px;">
                ⚡ Was geschieht im Hintergrund beim Speichern?
            </div>
            <div style="font-size: 8.1pt; color: var(--charcoal); line-height: 1.35;">
                Das System überträgt den neuen Status sofort an den zentralen Web-Server. Besucher der Website sehen den neuen Status ohne Neuladen der Seite, und die Infobildschirme im Clubhaus und in der Gastronomie schalten sich im laufenden Betrieb synchron um.
            </div>
        </div>
    </div>

    <div class="page-footer">
        <div class="page-footer-left">
            <span>Gut Wissmannshof</span>
            <span class="footer-dot"></span>
            <span>News &amp; Platzstatus Leitfaden</span>
            <span class="footer-dot"></span>
            <span>Modul 1</span>
        </div>
        <div class="page-footer-right">Seite 2 von 5</div>
    </div>
</div>

<!-- SEITE 3 DE -->
<div class="page">
    <div class="page-header">
        <div class="page-header-left">
            <img src="data:image/png;base64,{logo_b64}" class="header-logo-mini" alt="Gut Wissmannshof">
            <span class="header-brand">Gut Wissmannshof</span>
            <span class="header-tag">Modul 2: Content Studio</span>
        </div>
        <div class="page-header-right">News &amp; Turniere veröffentlichen</div>
    </div>

    <div class="page-content">
        <h2 class="section-title">News-Editor Studio: Beiträge professionell veröffentlichen</h2>

        <p style="font-size: 8.7pt; color: var(--muted); margin-bottom: 9px;">
            Ob Turnierbericht, Ankündigung eines Gourmet-Abends im Restaurant oder Platzarbeiten: Im News-Studio erstellen Sie ansprechende Beiträge mit Titelbild, formatiertem Text und Fotogalerie.
        </p>

        <div class="grid-2">
            <div>
                <h3 class="block-title" style="margin-bottom: 5px;">Die wichtigsten Eingabefelder:</h3>

                <div class="step-row">
                    <div class="step-num">1</div>
                    <div class="step-body">
                        <div class="step-title">Titel &amp; Kategorie</div>
                        <div class="step-desc">
                            Prägnante Überschrift (z.&nbsp;B. <em>„Spannendes Finale bei den Clubmeisterschaften 2026“</em>).<br>
                            Kategorie wählen: <span class="badge badge-gold">Turniere</span> <span class="badge badge-green">Aktuelles</span> <span class="badge badge-amber">Gastronomie</span> <span class="badge badge-dark">Platz &amp; Resort</span>.
                        </div>
                    </div>
                </div>

                <div class="step-row">
                    <div class="step-num">2</div>
                    <div class="step-body">
                        <div class="step-title">Der Teaser (Vorschautext)</div>
                        <div class="step-desc">
                            2 bis 3 kurze Sätze (ca. 100–160 Zeichen). Erscheint auf den Kacheln der Startseite und weckt das Interesse zum Weiterlesen.
                        </div>
                    </div>
                </div>

                <div class="step-row">
                    <div class="step-num">3</div>
                    <div class="step-body">
                        <div class="step-title">Titelbild festlegen</div>
                        <div class="step-desc">
                            Klick auf <strong>„Datei auswählen“</strong> (Upload vom PC/Handy) oder Bild aus dem Resort-Archiv wählen. Das System bietet eine automatische <strong>16:9 Ausschnitt-Vorschau</strong> für perfekte Kachel-Optik.
                        </div>
                    </div>
                </div>

                <div class="step-row">
                    <div class="step-num">4</div>
                    <div class="step-body">
                        <div class="step-title">Fließtext &amp; Formatierungs-Toolbar</div>
                        <div class="step-desc">
                            Nutzen Sie die Buttons oberhalb des Textfeldes:
                            <div style="margin-top: 3px; display: flex; gap: 4px; flex-wrap: wrap;">
                                <span class="badge badge-gold">+ Absatz</span>
                                <span class="badge badge-gold">+ Zwischenüberschrift</span>
                                <span class="badge badge-gold">+ Zitat-Box</span>
                                <span class="badge badge-gold">Fett / Kursiv</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div class="card-white" style="border: 1.5px solid var(--gold); background: #FCFAF6;">
                    <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 5px;">
                        <span style="font-size: 11pt;">📸</span>
                        <h3 class="block-title" style="color: var(--primary); margin: 0;">Fotos im Text einbetten</h3>
                    </div>
                    <p style="font-size: 8.2pt; color: var(--charcoal); margin-bottom: 5px;">
                        Klicken Sie auf den Button <strong>„+ Foto in Text einfügen“</strong>:
                    </p>
                    <ul style="font-size: 7.9pt; color: var(--muted); margin-left: 15px; line-height: 1.35; margin-bottom: 5px;">
                        <li>Laden Sie beliebig viele Schnappschüsse hoch.</li>
                        <li>Geben Sie eine <strong>Bildunterschrift</strong> ein (z.&nbsp;B. <em>„Siegerehrung Brutto Damen“</em>).</li>
                        <li>Leser können das Foto auf der Website per Klick in voller 4K-Auflösung vergrößern!</li>
                    </ul>
                    <span class="badge badge-green">Automatisch für Mobilgeräte optimiert</span>
                </div>

                <div class="card-white">
                    <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 5px;">
                        <span style="font-size: 11pt;">⏱</span>
                        <h3 class="block-title" style="color: var(--primary); margin: 0;">Zeitsteuerung &amp; Gültigkeitsdauer</h3>
                    </div>
                    <p style="font-size: 8.1pt; color: var(--charcoal); margin-bottom: 3px;">
                        Setzen Sie optional ein <strong>Ablaufdatum</strong> (z.&nbsp;B. Turnieranmeldung bis zum 15. Juli). Nach diesem Tag wandert der Beitrag automatisch ins Archiv, ohne dass Sie daran denken müssen!
                    </p>
                </div>

                <div class="card-white" style="border-left: 3px solid var(--green);">
                    <div style="font-size: 7.2pt; font-weight: 800; text-transform: uppercase; color: var(--green-text); margin-bottom: 2px;">
                        👁 Echtzeit-Vorschau (Live-Preview)
                    </div>
                    <p style="font-size: 8.1pt; color: var(--charcoal);">
                        Auf der rechten Bildschirmseite sehen Sie synchron zwei Vorschauen: 
                        1. <strong>Kachelansicht</strong> (wie auf der Startseite) und 
                        2. <strong>Vollbild-Artikel</strong> (wie beim Klick auf „Weiterlesen“).
                    </p>
                </div>
            </div>
        </div>

        <div class="alert-tip" style="margin-top: 3px;">
            <strong>Speichern:</strong> Klicken Sie unten auf <strong>„Beitrag speichern &amp; veröffentlichen“</strong>. Möchten Sie einen Artikel vorab vorbereiten, wählen Sie als Status einfach <strong>„Entwurf“</strong>.
        </div>
    </div>

    <div class="page-footer">
        <div class="page-footer-left">
            <span>Gut Wissmannshof</span>
            <span class="footer-dot"></span>
            <span>News &amp; Platzstatus Leitfaden</span>
            <span class="footer-dot"></span>
            <span>Modul 2</span>
        </div>
        <div class="page-footer-right">Seite 3 von 5</div>
    </div>
</div>

<!-- SEITE 4 DE -->
<div class="page">
    <div class="page-header">
        <div class="page-header-left">
            <img src="data:image/png;base64,{logo_b64}" class="header-logo-mini" alt="Gut Wissmannshof">
            <span class="header-brand">Gut Wissmannshof</span>
            <span class="header-tag">Modul 3: Verwaltung</span>
        </div>
        <div class="page-header-right">Beitrags-Liste, Sync &amp; Backup</div>
    </div>

    <div class="page-content">
        <h2 class="section-title">Beitragsverwaltung, Status &amp; Datensicherheit</h2>

        <p style="font-size: 8.7pt; color: var(--muted); margin-bottom: 9px;">
            Unterhalb des Editors finden Sie die zentrale Übersicht aller bestehenden Artikel. Hier verwalten Sie Veröffentlichungsstatus, bearbeiten bestehende Beiträge und erstellen Sicherheitskopien.
        </p>

        <table class="status-table">
            <thead>
                <tr>
                    <th style="width: 32%;">Titel / Thema</th>
                    <th style="width: 18%;">Kategorie</th>
                    <th style="width: 16%;">Datum</th>
                    <th style="width: 18%;">Status</th>
                    <th style="width: 16%;">Aktionen</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Bärli-Cup Saisonauftakt 2026</strong></td>
                    <td><span class="badge badge-gold">Turniere</span></td>
                    <td>28. März 2026</td>
                    <td><span class="badge badge-green">● Veröffentlicht</span></td>
                    <td><span class="code-pill">✏️ Edit</span> <span class="code-pill" style="color: red;">🗑</span></td>
                </tr>
                <tr>
                    <td><strong>Frühjahrs-Menü im Restaurant</strong></td>
                    <td><span class="badge badge-amber">Gastronomie</span></td>
                    <td>15. April 2026</td>
                    <td><span class="badge badge-green">● Veröffentlicht</span></td>
                    <td><span class="code-pill">✏️ Edit</span> <span class="code-pill" style="color: red;">🗑</span></td>
                </tr>
                <tr>
                    <td><strong>Platzarbeiten Grüns Fairway 12</strong></td>
                    <td><span class="badge badge-dark">Platz &amp; Resort</span></td>
                    <td>02. Mai 2026</td>
                    <td><span class="badge badge-amber">Entwurf</span></td>
                    <td><span class="code-pill">✏️ Edit</span> <span class="code-pill" style="color: red;">🗑</span></td>
                </tr>
                <tr>
                    <td><strong>Oktoberfest Vierer 2025</strong></td>
                    <td><span class="badge badge-gold">Turniere</span></td>
                    <td>10. Okt. 2025</td>
                    <td><span class="badge badge-gold">Archiv</span></td>
                    <td><span class="code-pill">✏️ Edit</span> <span class="code-pill" style="color: red;">🗑</span></td>
                </tr>
            </tbody>
        </table>

        <div class="grid-3" style="margin-top: 7px;">
            <div class="card-white">
                <div style="font-size: 7.8pt; font-weight: 800; color: var(--primary); margin-bottom: 3px;">✏️ BEITRAG BEARBEITEN</div>
                <div style="font-size: 8.1pt; color: var(--charcoal); line-height: 1.35;">
                    Ein Klick auf das <strong>blaue Stift-Symbol</strong> lädt den kompletten Artikel samt Bildern zurück in das Editor-Formular. Nach Korrekturen einfach neu speichern.
                </div>
            </div>

            <div class="card-white">
                <div style="font-size: 7.8pt; font-weight: 800; color: var(--primary); margin-bottom: 3px;">🔄 STATUS WECHSELN</div>
                <div style="font-size: 8.1pt; color: var(--charcoal); line-height: 1.35;">
                    Mit einem Klick auf die Status-Pille schalten Sie zwischen <strong>Veröffentlicht</strong>, <strong>Entwurf</strong> und <strong>Archiv</strong> um – ohne den Text öffnen zu müssen.
                </div>
            </div>

            <div class="card-white">
                <div style="font-size: 7.8pt; font-weight: 800; color: var(--red); margin-bottom: 3px;">🗑 BEITRAG LÖSCHEN</div>
                <div style="font-size: 8.1pt; color: var(--charcoal); line-height: 1.35;">
                    Klick auf den roten Mülleimer löscht den Artikel. Zur Sicherheit fragt ein Dialogfenster nach einer Bestätigung, um versehentliches Löschen zu verhindern.
                </div>
            </div>
        </div>

        <h3 class="block-title" style="margin-top: 5px; margin-bottom: 5px;">Automatische Synchronisation &amp; Datensicherung</h3>

        <div class="grid-2">
            <div class="card-gold">
                <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 3px;">
                    <span style="font-size: 11pt;">☁️</span>
                    <strong style="color: var(--primary); font-size: 8.6pt;">Multi-Device &amp; Cloud-Sync</strong>
                </div>
                <p style="font-size: 8.1pt; color: var(--charcoal); line-height: 1.35;">
                    Egal ob Sie am Rechner im Sekretariat, am Laptop des Pro-Shops oder von zuhause arbeiten: Die grüne Sync-Anzeige oben rechts bestätigt, dass alle Geräte auf demselben aktuellen Stand sind.
                </p>
            </div>

            <div class="card-white" style="border: 1px solid var(--border);">
                <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 3px;">
                    <span style="font-size: 11pt;">💾</span>
                    <strong style="color: var(--primary); font-size: 8.6pt;">1-Klick Backup (Sicherheitskopie)</strong>
                </div>
                <p style="font-size: 8.1pt; color: var(--charcoal); line-height: 1.35;">
                    Mit Klick auf <strong>„JSON-Backup herunterladen“</strong> sichern Sie alle News-Artikel und Bilder lokal auf Ihrem Computer. Im Fall eines Serverwechsels lässt sich das Archiv jederzeit mit <strong>„Backup importieren“</strong> wiederherstellen.
                </p>
            </div>
        </div>

        <div class="alert-tip" style="margin-top: 3px;">
            <strong>Empfehlung für die Clubleitung:</strong> Laden Sie sich am Monatsende mit einem Klick das <em>JSON-Backup</em> herunter und speichern Sie es auf dem Clublaufwerk. Damit sind alle Berichte und Fotos zu 100% ausfallsicher archiviert.
        </div>
    </div>

    <div class="page-footer">
        <div class="page-footer-left">
            <span>Gut Wissmannshof</span>
            <span class="footer-dot"></span>
            <span>News &amp; Platzstatus Leitfaden</span>
            <span class="footer-dot"></span>
            <span>Modul 3</span>
        </div>
        <div class="page-footer-right">Seite 4 von 5</div>
    </div>
</div>

<!-- SEITE 5 DE -->
<div class="page">
    <div class="page-header">
        <div class="page-header-left">
            <img src="data:image/png;base64,{logo_b64}" class="header-logo-mini" alt="Gut Wissmannshof">
            <span class="header-brand">Gut Wissmannshof</span>
            <span class="header-tag">Spickzettel &amp; Hilfe</span>
        </div>
        <div class="page-header-right">Praxis-Tipps &amp; FAQ</div>
    </div>

    <div class="page-content">
        <h2 class="section-title">Checkliste &amp; Häufige Fragen (FAQ)</h2>

        <div class="card-gold" style="margin-bottom: 9px;">
            <div style="font-weight: 800; color: var(--primary); font-size: 9.3pt; margin-bottom: 7px; display: flex; align-items: center; gap: 6px;">
                <span>📋</span> Die 6-Punkte-Checkliste vor der Veröffentlichung
            </div>
            <div class="grid-2" style="margin-bottom: 0;">
                <div>
                    <div class="check-item">
                        <div class="check-box-icon">✓</div>
                        <div><strong>Aussagekräftige Überschrift:</strong> Neugier weckend und fehlerfrei.</div>
                    </div>
                    <div class="check-item">
                        <div class="check-box-icon">✓</div>
                        <div><strong>Richtige Kategorie:</strong> Turniere, Aktuelles oder Gastronomie zugeordnet.</div>
                    </div>
                    <div class="check-item">
                        <div class="check-box-icon">✓</div>
                        <div><strong>Kurzer Teaser:</strong> Max. 2–3 Sätze für die Startseiten-Kachel.</div>
                    </div>
                </div>
                <div>
                    <div class="check-item">
                        <div class="check-box-icon">✓</div>
                        <div><strong>Scharfes Titelbild:</strong> Bevorzugt Querformat (16:9 Ausschnitt prüfen).</div>
                    </div>
                    <div class="check-item">
                        <div class="check-box-icon">✓</div>
                        <div><strong>Strukturierter Text:</strong> Absätze und Zwischenüberschriften genutzt.</div>
                    </div>
                    <div class="check-item">
                        <div class="check-box-icon">✓</div>
                        <div><strong>Live-Vorschau kontrolliert:</strong> Kachel &amp; Artikel sehen harmonisch aus.</div>
                    </div>
                </div>
            </div>
        </div>

        <h3 class="block-title" style="margin-bottom: 5px;">Häufige Fragen aus der Praxis (FAQ):</h3>

        <div class="card-white" style="margin-bottom: 7px;">
            <div style="font-weight: 700; color: var(--primary); font-size: 8.6pt; margin-bottom: 2px;">
                ❓ Wie schnell sind Änderungen auf der Website für Besucher sichtbar?
            </div>
            <div style="font-size: 8.2pt; color: var(--charcoal); line-height: 1.35;">
                <strong>Sofort.</strong> Sowohl der morgendliche Platzstatus als auch neu veröffentlichte News sind innerhalb von wenigen Sekunden live abrufbar.
            </div>
        </div>

        <div class="card-white" style="margin-bottom: 7px;">
            <div style="font-weight: 700; color: var(--primary); font-size: 8.6pt; margin-bottom: 2px;">
                ❓ Mein Titelbild sieht auf der Startseite abgeschnitten aus. Woran liegt das?
            </div>
            <div style="font-size: 8.2pt; color: var(--charcoal); line-height: 1.35;">
                Die News-Kacheln auf der Startseite verwenden ein modernes <strong>16:9 Querformat</strong>. Verwenden Sie möglichst Querformat-Fotos oder nutzen Sie im Bildwähler den Zuschnitt-Schieberegler, um den Fokus auf die Personen oder das Hauptmotiv zu legen.
            </div>
        </div>

        <div class="card-white" style="margin-bottom: 7px;">
            <div style="font-weight: 700; color: var(--primary); font-size: 8.6pt; margin-bottom: 2px;">
                ❓ Können mehrere Mitarbeiter gleichzeitig im Redaktionsbereich arbeiten?
            </div>
            <div style="font-size: 8.2pt; color: var(--charcoal); line-height: 1.35;">
                <strong>Ja.</strong> Das System verfügt über eine automatische Synchronisation. Es empfiehlt sich jedoch, dass nicht zwei Personen zeitgleich denselben einzelnen Artikel editieren, um gegenseitiges Überschreiben zu vermeiden.
            </div>
        </div>

        <div class="card-white" style="margin-bottom: 7px;">
            <div style="font-weight: 700; color: var(--primary); font-size: 8.6pt; margin-bottom: 2px;">
                ❓ Ich sehe meine Änderungen auf meinem Smartphone noch nicht. Was hilft?
            </div>
            <div style="font-size: 8.2pt; color: var(--charcoal); line-height: 1.35;">
                Manche Mobilbrowser speichern Webseiten zwischen. Wischen Sie auf der Startseite von oben nach unten, um die Seite neu zu laden, oder öffnen Sie ein privates Browser-Tab.
            </div>
        </div>

        <div style="background: var(--primary); color: #FFFFFF; border-radius: 8px; padding: 10px 14px; margin-top: 3px; display: flex; justify-content: space-between; align-items: center;">
            <div>
                <div style="font-size: 7.8pt; font-weight: 800; color: var(--gold); text-transform: uppercase;">Technischer Support &amp; Webmaster-Hilfe</div>
                <div style="font-size: 8.3pt; color: #EDE7DA;">Bei Fragen zu Systemerweiterungen, Serverupdates oder Sonderformaten wenden Sie sich an Ihren Web-Administrator.</div>
            </div>
            <div style="text-align: right; font-size: 7.8pt; font-weight: 700; color: #FFFFFF;">
                Gut Wissmannshof<br><span style="color: var(--gold);">www.wissmannshof.golf</span>
            </div>
        </div>
    </div>

    <div class="page-footer">
        <div class="page-footer-left">
            <span>Gut Wissmannshof</span>
            <span class="footer-dot"></span>
            <span>News &amp; Platzstatus Leitfaden</span>
            <span class="footer-dot"></span>
            <span>Zusammenfassung</span>
        </div>
        <div class="page-footer-right">Seite 5 von 5</div>
    </div>
</div>

</body>
</html>
"""

# -------------------------------------------------------------
# COMPACT ENGLISH TEMPLATE (4 PAGES)
# -------------------------------------------------------------
html_en = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Gut Wissmannshof — News Editorial & Course Status Quick Guide</title>
    <style>
        @page {{
            size: A4 portrait;
            margin: 10mm 12mm 12mm 12mm;
        }}

        :root {{
            --primary: #0D2218;
            --primary-light: #163828;
            --gold: #B8963E;
            --gold-dark: #9E7F30;
            --gold-bg: #F9F6F0;
            --cream: #F8F5EE;
            --cream-dark: #EDE7DA;
            --charcoal: #2A2E2B;
            --muted: #5E6660;
            --border: #E2DBD0;
            --white: #FFFFFF;
            --green: #28A745;
            --green-bg: #E8F5E9;
            --green-text: #1B5E20;
            --red: #C82333;
            --red-bg: #FDEDEC;
            --red-text: #891621;
            --amber: #E67E22;
            --amber-bg: #FEF9E7;
            --amber-text: #935116;
        }}

        * {{
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
        }}

        body {{
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            color: var(--charcoal);
            background: #FFFFFF;
            font-size: 9.3pt;
            line-height: 1.42;
        }}

        .page {{
            width: 100%;
            height: 272mm;
            max-height: 272mm;
            page-break-after: always;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            overflow: hidden;
            background: #FFFFFF;
            padding: 0;
        }}
        .page:last-child {{
            page-break-after: auto;
        }}

        .page-header {{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 7px;
            border-bottom: 1.5px solid var(--border);
            margin-bottom: 10px;
        }}
        .page-header-left {{
            display: flex;
            align-items: center;
            gap: 10px;
        }}
        .header-logo-mini {{
            height: 24px;
            width: auto;
        }}
        .header-brand {{
            font-size: 8pt;
            font-weight: 800;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: var(--primary);
        }}
        .header-tag {{
            font-size: 7.5pt;
            font-weight: 700;
            color: var(--gold-dark);
            background: var(--gold-bg);
            border: 1px solid var(--border);
            padding: 2px 7px;
            border-radius: 999px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }}
        .page-header-right {{
            font-size: 7.5pt;
            font-weight: 600;
            color: var(--muted);
        }}

        .page-footer {{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 7px;
            border-top: 1px solid var(--border);
            margin-top: 8px;
            font-size: 7.5pt;
            color: var(--muted);
        }}
        .page-footer-left {{
            display: flex;
            align-items: center;
            gap: 8px;
        }}
        .footer-dot {{
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: var(--gold);
        }}
        .page-footer-right {{
            font-weight: 700;
            color: var(--primary);
        }}

        .page-content {{
            flex: 1;
            display: flex;
            flex-direction: column;
        }}

        h2.section-title {{
            font-size: 12.5pt;
            font-weight: 800;
            color: var(--primary);
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 9px;
            padding-bottom: 4px;
            border-bottom: 2px solid var(--gold);
        }}
        h3.block-title {{
            font-size: 9.8pt;
            font-weight: 700;
            color: var(--primary);
            margin-bottom: 3px;
        }}

        .card {{
            background: var(--cream);
            border: 1px solid var(--border);
            border-radius: 8px;
            padding: 10px 13px;
            margin-bottom: 9px;
        }}
        .card-white {{
            background: var(--white);
            border: 1px solid var(--border);
            border-radius: 8px;
            padding: 10px 13px;
            margin-bottom: 9px;
            box-shadow: 0 1px 4px rgba(0,0,0,0.03);
        }}
        .card-gold {{
            background: linear-gradient(135deg, #FAF7EE 0%, #F5EEDB 100%);
            border: 1.5px solid #D6C291;
            border-radius: 8px;
            padding: 11px 14px;
            margin-bottom: 10px;
        }}

        .badge {{
            display: inline-flex;
            align-items: center;
            gap: 4px;
            font-size: 7.2pt;
            font-weight: 700;
            padding: 2px 7px;
            border-radius: 4px;
            text-transform: uppercase;
            letter-spacing: 0.04em;
        }}
        .badge-green {{ background: var(--green-bg); color: var(--green-text); border: 1px solid #C8E6C9; }}
        .badge-red {{ background: var(--red-bg); color: var(--red-text); border: 1px solid #FFCDD2; }}
        .badge-amber {{ background: var(--amber-bg); color: var(--amber-text); border: 1px solid #FFE082; }}
        .badge-gold {{ background: var(--gold-bg); color: var(--gold-dark); border: 1px solid #E2DBD0; }}
        .badge-dark {{ background: var(--primary); color: #FFFFFF; }}

        .grid-2 {{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 11px;
            margin-bottom: 9px;
        }}
        .grid-3 {{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 9px;
            margin-bottom: 9px;
        }}
        .grid-4 {{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            gap: 7px;
            margin-bottom: 9px;
        }}

        .step-row {{
            display: flex;
            align-items: flex-start;
            gap: 10px;
            margin-bottom: 8px;
        }}
        .step-num {{
            width: 22px;
            height: 22px;
            min-width: 22px;
            border-radius: 50%;
            background: var(--primary);
            color: var(--white);
            font-size: 8pt;
            font-weight: 800;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 1px;
        }}
        .step-num.gold {{
            background: var(--gold);
            color: var(--primary);
        }}
        .step-body {{
            flex: 1;
        }}
        .step-title {{
            font-size: 9.3pt;
            font-weight: 700;
            color: var(--primary);
            margin-bottom: 2px;
        }}
        .step-desc {{
            font-size: 8.6pt;
            color: var(--charcoal);
            line-height: 1.35;
        }}

        table.status-table {{
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 9px;
            font-size: 8.4pt;
        }}
        table.status-table th {{
            background: var(--primary);
            color: var(--white);
            padding: 6px 9px;
            text-align: left;
            font-size: 7.8pt;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }}
        table.status-table th:first-child {{ border-top-left-radius: 6px; }}
        table.status-table th:last-child {{ border-top-right-radius: 6px; }}
        table.status-table td {{
            padding: 6px 9px;
            border-bottom: 1px solid var(--border);
            vertical-align: middle;
        }}
        table.status-table tr:nth-child(even) td {{
            background: var(--cream);
        }}

        .alert-tip {{
            background: #F0F7F4;
            border-left: 3.5px solid var(--green);
            padding: 7px 11px;
            border-radius: 0 6px 6px 0;
            margin-bottom: 7px;
            font-size: 8.4pt;
        }}
        .alert-important {{
            background: #FDF9EE;
            border-left: 3.5px solid var(--gold);
            padding: 7px 11px;
            border-radius: 0 6px 6px 0;
            margin-bottom: 7px;
            font-size: 8.4pt;
        }}
        .code-pill {{
            font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
            background: #ECE6D8;
            padding: 2px 6px;
            border-radius: 4px;
            font-size: 8.3pt;
            font-weight: 700;
            color: var(--primary);
            border: 1px solid #D6CCA8;
        }}

        .mockup-bar {{
            background: var(--primary);
            color: var(--white);
            padding: 6px 11px;
            border-radius: 6px 6px 0 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 7.8pt;
            font-weight: 700;
        }}
        .mockup-body {{
            background: var(--white);
            border: 1.5px solid var(--primary);
            border-top: none;
            border-radius: 0 0 6px 6px;
            padding: 8px 10px;
            margin-bottom: 9px;
        }}

        .cover-hero {{
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
            color: var(--white);
            border-radius: 12px;
            padding: 24px 22px;
            margin-top: 10px;
            margin-bottom: 16px;
            position: relative;
        }}
        .cover-hero::after {{
            content: "";
            position: absolute;
            bottom: 0;
            right: 0;
            width: 130px;
            height: 130px;
            background: radial-gradient(circle, rgba(184,150,62,0.22) 0%, transparent 70%);
            border-radius: 50%;
        }}
        .cover-badge-top {{
            display: inline-block;
            background: var(--gold);
            color: var(--primary);
            font-weight: 800;
            font-size: 7.8pt;
            padding: 4px 10px;
            border-radius: 999px;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            margin-bottom: 10px;
        }}
        .cover-hero h1 {{
            font-size: 20pt;
            line-height: 1.2;
            margin-bottom: 8px;
            font-weight: 800;
            color: #FFFFFF;
        }}
        .cover-hero p {{
            font-size: 9.6pt;
            color: #EDE7DA;
            line-height: 1.4;
            max-width: 90%;
        }}

        .cover-access-box {{
            background: var(--gold-bg);
            border: 2px solid var(--gold);
            border-radius: 10px;
            padding: 14px 16px;
            margin-bottom: 15px;
        }}

        .check-item {{
            display: flex;
            align-items: flex-start;
            gap: 8px;
            margin-bottom: 6px;
            font-size: 8.5pt;
        }}
        .check-box-icon {{
            width: 16px;
            height: 16px;
            min-width: 16px;
            border-radius: 4px;
            background: var(--green);
            color: #FFFFFF;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 8.5pt;
            font-weight: 900;
            margin-top: 1px;
        }}
    </style>
</head>
<body>

<!-- PAGE 1 EN: OVERVIEW & ACCESS -->
<div class="page">
    <div class="page-header">
        <div class="page-header-left">
            <img src="data:image/png;base64,{logo_b64}" class="header-logo-mini" alt="Gut Wissmannshof">
            <span class="header-brand">Gut Wissmannshof Golf Resort</span>
            <span class="header-tag">Operations Manual • English</span>
        </div>
        <div class="page-header-right">Season 2026 • Compact Guide</div>
    </div>

    <div class="page-content">
        <div class="cover-hero">
            <span class="cover-badge-top">Compact Staff Guide</span>
            <h1>News Editorial &amp;<br>Live Course Status Studio</h1>
            <p>Intuitive quick-start handbook for Front Desk, Pro Shop, Greenkeeping, and Management to manage live website alerts, club monitors, and tournament news.</p>
        </div>

        <div class="cover-access-box">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h3 style="font-size: 10.5pt; color: var(--primary); font-weight: 800; display: flex; align-items: center; gap: 6px;">
                    🔑 Direct Access &amp; Login Credentials
                </h3>
                <span class="badge badge-gold">Staff Confidential</span>
            </div>
            
            <div class="grid-2" style="margin-bottom: 8px;">
                <div style="background: #FFFFFF; border: 1px solid var(--border); border-radius: 6px; padding: 10px 12px;">
                    <div style="font-size: 7.2pt; text-transform: uppercase; font-weight: 800; color: var(--muted); margin-bottom: 4px;">Web Portal URL (Open in browser)</div>
                    <div style="font-size: 9.3pt; font-weight: 800; color: var(--primary);">
                        <span style="color: var(--primary); text-decoration: underline;">wissmannshof.golf/admin-news.html</span>
                    </div>
                </div>
                <div style="background: #FFFFFF; border: 1px solid var(--border); border-radius: 6px; padding: 10px 12px;">
                    <div style="font-size: 7.2pt; text-transform: uppercase; font-weight: 800; color: var(--muted); margin-bottom: 4px;">Editorial Password</div>
                    <div style="font-size: 10.8pt; font-family: monospace; font-weight: 800; color: #B8963E; letter-spacing: 0.05em;">
                        Sgr2026# <span style="font-size: 7.2pt; font-weight: 500; color: var(--muted); font-family: sans-serif;">(Alt: Wissmannshof2026)</span>
                    </div>
                </div>
            </div>

            <div style="font-size: 8.2pt; color: var(--muted); line-height: 1.35;">
                💡 <strong>Everyday Tip:</strong> Bookmark the link in your browser (Chrome, Safari, Edge). The portal runs seamlessly on desktop PCs, iPads/tablets, and mobile phones with persistent login.
            </div>
        </div>

        <h2 class="section-title">The Two Core Modules at a Glance</h2>

        <div class="grid-2" style="margin-bottom: 12px;">
            <div class="card-white" style="border-top: 3px solid var(--green);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                    <h3 class="block-title" style="color: var(--green-text);">1. Live Course &amp; Resort Status</h3>
                    <span class="badge badge-green">Daily Morning Routine</span>
                </div>
                <p style="font-size: 8.5pt; color: var(--charcoal); margin-bottom: 8px;">
                    Fast 60-second morning update. Controls golf cart permissions, trolley rules, open course loops, summer vs. winter greens, and front desk hours.
                </p>
                <div style="font-size: 7.8pt; font-weight: 700; color: var(--muted);">
                    📍 Live on: Homepage Hero Bar, Booking Page &amp; Clubhouse Digital Displays.
                </div>
            </div>

            <div class="card-white" style="border-top: 3px solid var(--gold);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                    <h3 class="block-title" style="color: var(--gold-dark);">2. News &amp; Content Studio</h3>
                    <span class="badge badge-gold">Articles &amp; Events</span>
                </div>
                <p style="font-size: 8.5pt; color: var(--charcoal); margin-bottom: 8px;">
                    Publish club news, tournament recaps, culinary events, course maintenance notices, and promotions. Includes real-time preview, high-res photos, and auto-archiving.
                </p>
                <div style="font-size: 7.8pt; font-weight: 700; color: var(--muted);">
                    📍 Live on: Homepage News Grid, News Archive &amp; Social Links.
                </div>
            </div>
        </div>

        <div class="alert-important">
            <strong>No technical skills required:</strong> Every setting uses visual toggle switches, preset dropdowns, and form fields. Changes sync instantly across all devices.
        </div>
    </div>

    <div class="page-footer">
        <div class="page-footer-left">
            <span>Gut Wissmannshof</span>
            <span class="footer-dot"></span>
            <span>Editorial Quick Guide</span>
            <span class="footer-dot"></span>
            <span>Season 2026</span>
        </div>
        <div class="page-footer-right">Page 1 of 4</div>
    </div>
</div>

<!-- PAGE 2 EN: MORNING ROUTINE -->
<div class="page">
    <div class="page-header">
        <div class="page-header-left">
            <img src="data:image/png;base64,{logo_b64}" class="header-logo-mini" alt="Gut Wissmannshof">
            <span class="header-brand">Gut Wissmannshof</span>
            <span class="header-tag">Module 1: Morning Routine</span>
        </div>
        <div class="page-header-right">Live Course &amp; Resort Status</div>
    </div>

    <div class="page-content">
        <h2 class="section-title">Morning Routine: Update Course Status in 60 Seconds</h2>
        
        <p style="font-size: 8.7pt; color: var(--muted); margin-bottom: 9px;">
            Every morning, golfers check our website first to see whether carts are allowed and which greens are in play. The status box is located at the very top of the admin page.
        </p>

        <!-- Mockup of the 4 Status Boxes -->
        <div class="mockup-bar">
            <span>⛳ SECTION 1: LIVE RESORT &amp; COURSE STATUS (HOMEPAGE &amp; DISPLAYS)</span>
            <span style="color: #90EE90; font-size: 7.2pt;">● LIVE SYNCHRONIZED</span>
        </div>
        <div class="mockup-body">
            <div class="grid-4" style="margin-bottom: 0;">
                <div style="background: #FAF8F3; border: 1px solid var(--border); border-radius: 6px; padding: 7px;">
                    <div style="font-size: 7.2pt; font-weight: 800; color: var(--muted);">1. OPENING HOURS</div>
                    <div style="font-size: 8.8pt; font-weight: 800; color: var(--primary); margin: 2px 0;">09:00 - 15:00 hrs</div>
                    <div style="font-size: 6.8pt; color: var(--muted);">Reception &amp; Phones</div>
                </div>
                <div style="background: #FAF8F3; border: 1px solid var(--border); border-radius: 6px; padding: 7px;">
                    <div style="font-size: 7.2pt; font-weight: 800; color: var(--muted);">2. GOLF CARTS</div>
                    <span class="badge badge-green" style="margin: 2px 0;">✓ ALLOWED</span>
                    <div style="font-size: 6.8pt; color: var(--muted);">Note: stay on cart paths</div>
                </div>
                <div style="background: #FAF8F3; border: 1px solid var(--border); border-radius: 6px; padding: 7px;">
                    <div style="font-size: 7.2pt; font-weight: 800; color: var(--muted);">3. TROLLEYS</div>
                    <span class="badge badge-green" style="margin: 2px 0;">✓ ALLOWED</span>
                    <div style="font-size: 6.8pt; color: var(--muted);">Winter wheels recommended</div>
                </div>
                <div style="background: #FAF8F3; border: 1px solid var(--border); border-radius: 6px; padding: 7px;">
                    <div style="font-size: 7.2pt; font-weight: 800; color: var(--muted);">4. COURSE &amp; GREENS</div>
                    <span class="badge badge-green" style="margin: 2px 0;">✓ OPEN</span>
                    <div style="font-size: 6.8pt; color: var(--muted);">18-Holes Regular</div>
                </div>
            </div>
        </div>

        <h3 class="block-title" style="margin-top: 3px; margin-bottom: 7px;">4-Step Quick Instructions:</h3>

        <div class="step-row">
            <div class="step-num">1</div>
            <div class="step-body">
                <div class="step-title">Verify Reception &amp; Phone Hours</div>
                <div class="step-desc">
                    Enter today’s service hours, e.g. <span class="code-pill">daily 09:00 - 15:00 hrs</span>. This dynamically updates guest guidance and phone assistant greetings.
                </div>
            </div>
        </div>

        <div class="step-row">
            <div class="step-num">2</div>
            <div class="step-body">
                <div class="step-title">Set Golf Carts &amp; Trolleys Rules</div>
                <div class="step-desc">
                    Select state: <strong>Allowed (Green)</strong>, <strong>Restricted (Amber)</strong>, or <strong>Prohibited (Red)</strong>.<br>
                    <em>Optional note:</em> e.g. <em>“Stay on cart paths only”</em> or <em>“Winter wheels required”</em>.
                </div>
            </div>
        </div>

        <div class="step-row">
            <div class="step-num">3</div>
            <div class="step-body">
                <div class="step-title">Select Course Status &amp; Greens (Use 1-Click Presets!)</div>
                <div class="step-desc">
                    Select whether the course is <strong>Open</strong>, <strong>Partially Open</strong>, or <strong>Closed (Frost/Weather)</strong>, and whether <strong>Summer Greens</strong> or <strong>Winter Greens</strong> are in play.<br>
                    <strong>Speed Tip:</strong> The <em>„Schnellvorlage wählen“</em> dropdown automatically configures common scenarios with a single click (e.g. <em>„18-Loch regulär geöffnet“</em> or <em>„Witterungsbedingt gesperrt“</em>).
                </div>
            </div>
        </div>

        <div class="step-row">
            <div class="step-num gold">4</div>
            <div class="step-body">
                <div class="step-title">Save &amp; Publish (The Golden Button)</div>
                <div class="step-desc">
                    Click <strong>„Status jetzt speichern &amp; veröffentlichen“</strong> at the bottom of the card.<br>
                    A green confirmation toast appears instantly. The public website and clubhouse TV screens update without reloading.
                </div>
            </div>
        </div>

        <div class="card-gold" style="margin-top: 5px;">
            <div style="font-weight: 800; color: var(--primary); font-size: 8.6pt; margin-bottom: 2px;">
                ⚡ Instant Live Synchronization
            </div>
            <div style="font-size: 8.1pt; color: var(--charcoal); line-height: 1.35;">
                Saved statuses broadcast immediately to web visitors and active digital clubhouse boards. No server reboot or manual deployment required.
            </div>
        </div>
    </div>

    <div class="page-footer">
        <div class="page-footer-left">
            <span>Gut Wissmannshof</span>
            <span class="footer-dot"></span>
            <span>Editorial Quick Guide</span>
            <span class="footer-dot"></span>
            <span>Module 1</span>
        </div>
        <div class="page-footer-right">Page 2 of 4</div>
    </div>
</div>

<!-- PAGE 3 EN: NEWS STUDIO -->
<div class="page">
    <div class="page-header">
        <div class="page-header-left">
            <img src="data:image/png;base64,{logo_b64}" class="header-logo-mini" alt="Gut Wissmannshof">
            <span class="header-brand">Gut Wissmannshof</span>
            <span class="header-tag">Module 2: Content Studio</span>
        </div>
        <div class="page-header-right">Publishing News &amp; Tournaments</div>
    </div>

    <div class="page-content">
        <h2 class="section-title">News Studio: Create, Format &amp; Publish Articles</h2>

        <p style="font-size: 8.7pt; color: var(--muted); margin-bottom: 9px;">
            Publish engaging tournament reports, restaurant culinary specials, or course renovation updates with crisp photography and real-time live preview.
        </p>

        <div class="grid-2">
            <div>
                <h3 class="block-title" style="margin-bottom: 5px;">Key Input Fields:</h3>

                <div class="step-row">
                    <div class="step-num">1</div>
                    <div class="step-body">
                        <div class="step-title">Headline &amp; Category</div>
                        <div class="step-desc">
                            Catchy title (e.g. <em>„Thrilling Finish at the 2026 Club Championships“</em>).<br>
                            Pick category: <span class="badge badge-gold">Turniere (Tournaments)</span> <span class="badge badge-green">Aktuelles (News)</span> <span class="badge badge-amber">Gastronomie</span> <span class="badge badge-dark">Platz &amp; Resort</span>.
                        </div>
                    </div>
                </div>

                <div class="step-row">
                    <div class="step-num">2</div>
                    <div class="step-body">
                        <div class="step-title">Teaser (Card Summary)</div>
                        <div class="step-desc">
                            2 to 3 punchy sentences (100–160 chars). This text is shown directly on homepage cards to entice readers to click.
                        </div>
                    </div>
                </div>

                <div class="step-row">
                    <div class="step-num">3</div>
                    <div class="step-body">
                        <div class="step-title">Hero Featured Image</div>
                        <div class="step-desc">
                            Click <strong>„Datei auswählen“</strong> to upload a photo or pick from the Resort Image Library. The tool offers an automatic <strong>16:9 aspect crop</strong> for clean card appearance.
                        </div>
                    </div>
                </div>

                <div class="step-row">
                    <div class="step-num">4</div>
                    <div class="step-body">
                        <div class="step-title">Text Formatting Toolbar</div>
                        <div class="step-desc">
                            Format your story using quick toolbar buttons:
                            <div style="margin-top: 3px; display: flex; gap: 4px; flex-wrap: wrap;">
                                <span class="badge badge-gold">+ Paragraph</span>
                                <span class="badge badge-gold">+ Subheading (H3)</span>
                                <span class="badge badge-gold">+ Quote</span>
                                <span class="badge badge-gold">Bold / Italic</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div class="card-white" style="border: 1.5px solid var(--gold); background: #FCFAF6;">
                    <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 5px;">
                        <span style="font-size: 11pt;">📸</span>
                        <h3 class="block-title" style="color: var(--primary); margin: 0;">Embed Photos in Article Body</h3>
                    </div>
                    <p style="font-size: 8.2pt; color: var(--charcoal); margin-bottom: 5px;">
                        Click <strong>„+ Foto in Text einfügen“</strong>:
                    </p>
                    <ul style="font-size: 7.9pt; color: var(--muted); margin-left: 15px; line-height: 1.35; margin-bottom: 5px;">
                        <li>Upload multiple event or action shots.</li>
                        <li>Add a descriptive <strong>caption</strong> (e.g. <em>„Award ceremony Ladies Gross“</em>).</li>
                        <li>Website visitors can tap photos to view in full-screen 4K lightbox!</li>
                    </ul>
                    <span class="badge badge-green">Mobile-optimized automatically</span>
                </div>

                <div class="card-white">
                    <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 5px;">
                        <span style="font-size: 11pt;">⏱</span>
                        <h3 class="block-title" style="color: var(--primary); margin: 0;">Time Scheduling &amp; Expiry</h3>
                    </div>
                    <p style="font-size: 8.1pt; color: var(--charcoal); margin-bottom: 3px;">
                        Optionally set an <strong>expiry date</strong> (e.g. tournament signup deadline). Once expired, the article automatically moves to the archive.
                    </p>
                </div>

                <div class="card-white" style="border-left: 3px solid var(--green);">
                    <div style="font-size: 7.2pt; font-weight: 800; text-transform: uppercase; color: var(--green-text); margin-bottom: 2px;">
                        👁 Real-Time Live Preview
                    </div>
                    <p style="font-size: 8.1pt; color: var(--charcoal);">
                        The right column dynamically displays both:
                        1. <strong>Card Teaser Preview</strong> (homepage grid) and 
                        2. <strong>Full Article View</strong> (reader layout).
                    </p>
                </div>
            </div>
        </div>

        <div class="alert-tip" style="margin-top: 3px;">
            <strong>Publishing:</strong> Click <strong>„Beitrag speichern &amp; veröffentlichen“</strong> to go live immediately. Choose status <strong>„Entwurf“ (Draft)</strong> if work is still in progress.
        </div>
    </div>

    <div class="page-footer">
        <div class="page-footer-left">
            <span>Gut Wissmannshof</span>
            <span class="footer-dot"></span>
            <span>Editorial Quick Guide</span>
            <span class="footer-dot"></span>
            <span>Module 2</span>
        </div>
        <div class="page-footer-right">Page 3 of 4</div>
    </div>
</div>

<!-- PAGE 4 EN: MANAGEMENT, SYNC & CHECKLIST -->
<div class="page">
    <div class="page-header">
        <div class="page-header-left">
            <img src="data:image/png;base64,{logo_b64}" class="header-logo-mini" alt="Gut Wissmannshof">
            <span class="header-brand">Gut Wissmannshof</span>
            <span class="header-tag">Module 3 &amp; Reference</span>
        </div>
        <div class="page-header-right">Management &amp; Checklist</div>
    </div>

    <div class="page-content">
        <h2 class="section-title">Article Management, Multi-Device Sync &amp; Checklist</h2>

        <p style="font-size: 8.7pt; color: var(--muted); margin-bottom: 9px;">
            Below the editor, the central article table allows editing, changing visibility status, deleting, and downloading safety backups.
        </p>

        <div class="grid-3" style="margin-bottom: 9px;">
            <div class="card-white">
                <div style="font-size: 7.8pt; font-weight: 800; color: var(--primary); margin-bottom: 3px;">✏️ EDIT ARTICLE</div>
                <div style="font-size: 8.1pt; color: var(--charcoal); line-height: 1.35;">
                    Click the <strong>blue pencil icon</strong> to load the full post back into the editor for corrections.
                </div>
            </div>

            <div class="card-white">
                <div style="font-size: 7.8pt; font-weight: 800; color: var(--primary); margin-bottom: 3px;">🔄 1-CLICK STATUS</div>
                <div style="font-size: 8.1pt; color: var(--charcoal); line-height: 1.35;">
                    Toggle between <strong>Published (Green)</strong>, <strong>Draft (Amber)</strong>, and <strong>Archived (Gold)</strong> directly in the table.
                </div>
            </div>

            <div class="card-white">
                <div style="font-size: 7.8pt; font-weight: 800; color: var(--red); margin-bottom: 3px;">🗑 DELETE ARTICLE</div>
                <div style="font-size: 8.1pt; color: var(--charcoal); line-height: 1.35;">
                    Click the red trash bin. A confirmation modal prevents accidental deletions.
                </div>
            </div>
        </div>

        <div class="grid-2" style="margin-bottom: 9px;">
            <div class="card-gold">
                <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 3px;">
                    <span style="font-size: 11pt;">☁️</span>
                    <strong style="color: var(--primary); font-size: 8.6pt;">Multi-Device Cloud Sync</strong>
                </div>
                <p style="font-size: 8.1pt; color: var(--charcoal); line-height: 1.35;">
                    Whether working at the front desk or on a laptop in the office, the green sync status confirms all workstations are in harmony.
                </p>
            </div>

            <div class="card-white" style="border: 1px solid var(--border);">
                <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 3px;">
                    <span style="font-size: 11pt;">💾</span>
                    <strong style="color: var(--primary); font-size: 8.6pt;">1-Click Backup Export</strong>
                </div>
                <p style="font-size: 8.1pt; color: var(--charcoal); line-height: 1.35;">
                    Click <strong>„JSON-Backup herunterladen“</strong> to export an offline archive file of all articles and images to your local drive.
                </p>
            </div>
        </div>

        <!-- Checklist Card -->
        <div class="card-gold" style="margin-bottom: 9px;">
            <div style="font-weight: 800; color: var(--primary); font-size: 9.3pt; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
                <span>📋</span> Pre-Publishing Quality Checklist
            </div>
            <div class="grid-2" style="margin-bottom: 0;">
                <div>
                    <div class="check-item">
                        <div class="check-box-icon">✓</div>
                        <div><strong>Engaging Headline:</strong> Clear, informative, and typo-free.</div>
                    </div>
                    <div class="check-item">
                        <div class="check-box-icon">✓</div>
                        <div><strong>Correct Category:</strong> Tournaments, News, or Gastronomy.</div>
                    </div>
                    <div class="check-item">
                        <div class="check-box-icon">✓</div>
                        <div><strong>Short Teaser:</strong> Max. 2–3 sentences for card view.</div>
                    </div>
                </div>
                <div>
                    <div class="check-item">
                        <div class="check-box-icon">✓</div>
                        <div><strong>Sharp Hero Image:</strong> Landscape format (16:9).</div>
                    </div>
                    <div class="check-item">
                        <div class="check-box-icon">✓</div>
                        <div><strong>Structured Text:</strong> Use subheadings &amp; paragraphs.</div>
                    </div>
                    <div class="check-item">
                        <div class="check-box-icon">✓</div>
                        <div><strong>Live Preview Checked:</strong> Harmonious visual appeal.</div>
                    </div>
                </div>
            </div>
        </div>

        <div style="background: var(--primary); color: #FFFFFF; border-radius: 8px; padding: 10px 14px; margin-top: 3px; display: flex; justify-content: space-between; align-items: center;">
            <div>
                <div style="font-size: 7.8pt; font-weight: 800; color: var(--gold); text-transform: uppercase;">Technical Support &amp; Webmaster</div>
                <div style="font-size: 8.3pt; color: #EDE7DA;">For system upgrades, feature requests, or password resets, reach out to your web administration team.</div>
            </div>
            <div style="text-align: right; font-size: 7.8pt; font-weight: 700; color: #FFFFFF;">
                Gut Wissmannshof<br><span style="color: var(--gold);">www.wissmannshof.golf</span>
            </div>
        </div>
    </div>

    <div class="page-footer">
        <div class="page-footer-left">
            <span>Gut Wissmannshof</span>
            <span class="footer-dot"></span>
            <span>Editorial Quick Guide</span>
            <span class="footer-dot"></span>
            <span>Module 3 &amp; Checklist</span>
        </div>
        <div class="page-footer-right">Page 4 of 4</div>
    </div>
</div>

</body>
</html>
"""

# Write HTML files
with open("anleitung-news-redaktion-de.html", "w", encoding="utf-8") as f:
    f.write(html_de)
print("Wrote anleitung-news-redaktion-de.html")

with open("guide-news-editorial-en.html", "w", encoding="utf-8") as f:
    f.write(html_en)
print("Wrote guide-news-editorial-en.html")

# Function to compile HTML to PDF using Chrome Headless
def compile_pdf(html_rel_path, pdf_temp_path):
    chrome_exe = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
    abs_html = os.path.abspath(html_rel_path)
    file_uri = "file:///" + abs_html.replace("\\", "/")
    temp_profile = os.path.join(tempfile.gettempdir(), f"chrome-pdf-{os.getpid()}-{os.path.basename(html_rel_path)}")
    
    cmd = [
        chrome_exe,
        "--headless=new",
        "--disable-gpu",
        f"--user-data-dir={temp_profile}",
        "--no-pdf-header-footer",
        f"--print-to-pdf={pdf_temp_path}",
        file_uri
    ]
    
    result = subprocess.run(cmd, capture_output=True, text=True)
    if os.path.exists(temp_profile):
        shutil.rmtree(temp_profile, ignore_errors=True)
        
    if os.path.exists(pdf_temp_path) and os.path.getsize(pdf_temp_path) > 0:
        return True
    else:
        print("Chrome error:", result.stderr)
        return False

temp_dir = tempfile.gettempdir()
pdf_de_temp = os.path.join(temp_dir, "Anleitung_Gut_Wissmannshof_News_Redaktion_DE.pdf")
pdf_en_temp = os.path.join(temp_dir, "Guide_Gut_Wissmannshof_News_Editorial_EN.pdf")
pdf_combined_temp = os.path.join(temp_dir, "Gut_Wissmannshof_News_Redaktion_Komplett_DE_EN.pdf")

print("Compiling German PDF...")
if compile_pdf("anleitung-news-redaktion-de.html", pdf_de_temp):
    reader_de = pypdf.PdfReader(pdf_de_temp)
    print(f"German PDF successfully generated ({len(reader_de.pages)} pages, {os.path.getsize(pdf_de_temp)} bytes)")
else:
    print("Failed to generate German PDF")

print("Compiling English PDF...")
if compile_pdf("guide-news-editorial-en.html", pdf_en_temp):
    reader_en = pypdf.PdfReader(pdf_en_temp)
    print(f"English PDF successfully generated ({len(reader_en.pages)} pages, {os.path.getsize(pdf_en_temp)} bytes)")
else:
    print("Failed to generate English PDF")

# Merge DE and EN into combined PDF
print("Merging DE and EN into combined bilingual master PDF...")
writer = pypdf.PdfWriter()
writer.append(pdf_de_temp)
writer.append(pdf_en_temp)
writer.add_metadata({
    "/Title": "Gut Wissmannshof — News Redaktion & Platzstatus Leitfaden (DE & EN)",
    "/Author": "Gut Wissmannshof Golf Resort",
    "/Subject": "Bedienungsanleitung & Quick Reference Guide für News Redaktion & Platzstatus",
    "/Keywords": "Gut Wissmannshof, Golf, News, Redaktion, Platzstatus, Carts, Trolleys"
})
with open(pdf_combined_temp, "wb") as f_out:
    writer.write(f_out)
writer.close()

reader_comb = pypdf.PdfReader(pdf_combined_temp)
print(f"Combined PDF generated ({len(reader_comb.pages)} pages, {os.path.getsize(pdf_combined_temp)} bytes)")

# Copy files to Workspace and Artifacts directory
artifact_dir = r"C:\Users\MW-T-\.gemini\antigravity\brain\cd4e502d-c38b-4764-a0c3-57d9edbc6cad"
files_to_copy = [
    (pdf_de_temp, "Anleitung_Gut_Wissmannshof_News_Redaktion_DE.pdf"),
    (pdf_en_temp, "Guide_Gut_Wissmannshof_News_Editorial_EN.pdf"),
    (pdf_combined_temp, "Gut_Wissmannshof_News_Redaktion_Komplett_DE_EN.pdf"),
    (pdf_combined_temp, "Anleitung_Gut_Wissmannshof_News_Redaktion.pdf"),
]

for src, fname in files_to_copy:
    # Workspace
    dst_ws = os.path.join(".", fname)
    shutil.copyfile(src, dst_ws)
    print(f"Copied to workspace: {dst_ws}")
    
    # Artifact directory
    if os.path.exists(artifact_dir):
        dst_art = os.path.join(artifact_dir, fname)
        shutil.copyfile(src, dst_art)
        print(f"Copied to artifact dir: {dst_art}")

# Cleanup temp files
for p in [pdf_de_temp, pdf_en_temp, pdf_combined_temp]:
    if os.path.exists(p):
        try: os.remove(p)
        except: pass

print("All builds and distributions completed successfully!")
