import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung — Saple | Bethesna Verwaltung GmbH',
  description: 'Datenschutzerklärung der Saple Website. Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.',
}

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="border-b border-foreground/10">
        <div className="max-w-[800px] mx-auto px-6 py-8 flex items-center justify-between">
          <Link href="/" className="text-2xl font-display tracking-tight hover:opacity-70 transition-opacity">
            SAPLE
          </Link>
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Zurück zur Startseite
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[800px] mx-auto px-6 py-16 lg:py-24">
        <h1 className="text-4xl md:text-5xl font-display tracking-tight mb-4">Datenschutzerklärung</h1>
        <p className="text-sm text-muted-foreground mb-12 font-mono">Stand: April 2026</p>

        <div className="space-y-10 text-base leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-lg font-medium text-foreground mb-3">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-base font-medium text-foreground mt-6 mb-2">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
              Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen
              Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz
              entnehmen Sie unserer nachfolgend aufgeführten Datenschutzerklärung.
            </p>

            <h3 className="text-base font-medium text-foreground mt-6 mb-2">Datenerfassung auf dieser Website</h3>
            <p className="font-medium text-foreground">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
            <p className="mt-2">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
              können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
            </p>

            <p className="font-medium text-foreground mt-4">Wie erfassen wir Ihre Daten?</p>
            <p className="mt-2">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B.
              um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach
              Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem
              technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </p>

            <p className="font-medium text-foreground mt-4">Wofür nutzen wir Ihre Daten?</p>
            <p className="mt-2">
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten.
              Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>

            <p className="font-medium text-foreground mt-4">Welche Rechte haben Sie bezüglich Ihrer Daten?</p>
            <p className="mt-2">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
              gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung
              oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt
              haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das
              Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
              zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-foreground mb-3">2. Hosting</h2>
            <p>
              Wir hosten die Inhalte unserer Website bei Netlify, Inc. (2325 3rd Street, Suite 296, San Francisco,
              CA 94107, USA). Wenn Sie unsere Website besuchen, werden Ihre personenbezogenen Daten auf den
              Servern von Netlify verarbeitet. Hierbei können auch personenbezogene Daten an die Server von Netlify
              in den USA übermittelt werden.
            </p>
            <p className="mt-3">
              Details entnehmen Sie der Datenschutzerklärung von Netlify:{' '}
              <a
                href="https://www.netlify.com/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity"
              >
                https://www.netlify.com/privacy/
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-foreground mb-3">3. Verantwortliche Stelle</h2>
            <p>
              Bethesna Verwaltung GmbH<br />
              Lankwitzer Straße 9<br />
              12107 Berlin<br />
              Deutschland
            </p>
            <p className="mt-3">
              Telefon: +49 30 75425744<br />
              E-Mail: kontakt@saple.de
            </p>
            <p className="mt-3">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit
              anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-foreground mb-3">4. Ihre Rechte</h2>

            <h3 className="text-base font-medium text-foreground mt-6 mb-2">Auskunft, Berichtigung, Löschung</h3>
            <p>
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
              Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck
              der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten.
            </p>

            <h3 className="text-base font-medium text-foreground mt-6 mb-2">Recht auf Einschränkung der Verarbeitung</h3>
            <p>
              Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              Hierzu können Sie sich jederzeit an uns wenden.
            </p>

            <h3 className="text-base font-medium text-foreground mt-6 mb-2">Widerspruch gegen Werbe-E-Mails</h3>
            <p>
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von
              nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen.
              Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten
              Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-foreground mb-3">5. Datenerfassung auf dieser Website</h2>

            <h3 className="text-base font-medium text-foreground mt-6 mb-2">Cookies</h3>
            <p>
              Unsere Website verwendet ausschließlich technisch notwendige Cookies. Diese sind erforderlich, um
              die grundlegenden Funktionen der Website sicherzustellen. Technisch notwendige Cookies werden auf
              Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Wir setzen keine Tracking- oder
              Marketing-Cookies ein.
            </p>

            <h3 className="text-base font-medium text-foreground mt-6 mb-2">Server-Log-Dateien</h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten
              Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="mt-3">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
              Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>

            <h3 className="text-base font-medium text-foreground mt-6 mb-2">Kontaktaufnahme</h3>
            <p>
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus
              hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens
              bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="mt-3">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre
              Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
              Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten
              Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-foreground mb-3">6. Externe Dienste</h2>

            <h3 className="text-base font-medium text-foreground mt-6 mb-2">Google Fonts (lokal eingebunden)</h3>
            <p>
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten sogenannte Google Fonts. Die
              Google Fonts sind lokal installiert und werden über den eigenen Server geladen. Eine Verbindung
              zu Servern von Google findet dabei nicht statt.
            </p>

            <h3 className="text-base font-medium text-foreground mt-6 mb-2">Externe Medien</h3>
            <p>
              Einige Bilder und Videos auf dieser Website werden über externe Content Delivery Networks (CDN)
              geladen. Beim Abrufen dieser Inhalte wird Ihre IP-Adresse an den jeweiligen Anbieter übermittelt.
              Dies ist technisch notwendig, um die Inhalte auszuliefern.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-foreground mb-3">7. Änderung dieser Datenschutzerklärung</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen
              rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der
              Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
