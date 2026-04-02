import React from "react"
import type { Metadata } from 'next'
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: '--font-instrument'
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: '--font-instrument-serif'
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://saple-website.netlify.app'),
  title: {
    default: 'Saple — Social Media Agentur für Gastronomie in Berlin | Content-Produktion & Strategie',
    template: '%s — Saple',
  },
  description: 'Saple ist Ihre Social-Media-Agentur in Berlin, spezialisiert auf Gastronomie. Reels, Strategie, Wachstum — alles aus einer Hand. Sichtbarkeit, die bleibt.',
  keywords: ['Social Media Agentur', 'Berlin', 'Gastronomie', 'Restaurant Marketing', 'Instagram Reels', 'TikTok', 'Content-Produktion', 'Food-Fotografie', 'Social Media Marketing'],
  authors: [{ name: 'Saple — Bethesna Verwaltung GmbH' }],
  creator: 'Saple',
  publisher: 'Bethesna Verwaltung GmbH',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://saple-website.netlify.app',
    siteName: 'Saple',
    title: 'Saple — Social Media Agentur für Gastronomie in Berlin',
    description: 'Reels, Strategie, Wachstum — alles aus einer Hand. Die Social-Media-Agentur für Gastronomen in Berlin.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Saple — Social Media Agentur für Gastronomie in Berlin',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saple — Social Media Agentur für Gastronomie in Berlin',
    description: 'Reels, Strategie, Wachstum — alles aus einer Hand. Sichtbarkeit, die bleibt.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://saple-website.netlify.app',
  },
}

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://saple-website.netlify.app/#organization',
      name: 'Saple',
      legalName: 'Bethesna Verwaltung GmbH',
      url: 'https://saple-website.netlify.app',
      logo: 'https://saple-website.netlify.app/icon.svg',
      description: 'Social-Media-Agentur für Gastronomie in Berlin. Reels, Strategie, Wachstum — alles aus einer Hand.',
      foundingDate: '2024',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Lankwitzer Straße 9',
        addressLocality: 'Berlin',
        postalCode: '12107',
        addressCountry: 'DE',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+49-30-75425744',
        contactType: 'customer service',
        email: 'kontakt@saple.de',
        availableLanguage: ['German'],
      },
      sameAs: [
        'https://www.instagram.com/saple.de/',
        'https://www.tiktok.com/@saple.de',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://saple-website.netlify.app/#localbusiness',
      name: 'Saple — Social Media Agentur',
      description: 'Social-Media-Agentur spezialisiert auf Gastronomie in Berlin. Content-Produktion, Reels, TikTok, Instagram, Strategie und Wachstum.',
      url: 'https://saple-website.netlify.app',
      telephone: '+49-30-75425744',
      email: 'kontakt@saple.de',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Lankwitzer Straße 9',
        addressLocality: 'Berlin',
        postalCode: '12107',
        addressCountry: 'DE',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 52.4334,
        longitude: 13.3731,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      priceRange: '€€€',
      areaServed: {
        '@type': 'City',
        name: 'Berlin',
      },
      serviceType: ['Social Media Marketing', 'Content-Produktion', 'Instagram Reels', 'TikTok Content', 'Food-Fotografie', 'Social Media Strategie'],
      currenciesAccepted: 'EUR',
      paymentAccepted: 'Überweisung, Rechnung',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://saple-website.netlify.app/#website',
      url: 'https://saple-website.netlify.app',
      name: 'Saple',
      description: 'Social-Media-Agentur für Gastronomie in Berlin',
      publisher: { '@id': 'https://saple-website.netlify.app/#organization' },
      inLanguage: 'de-DE',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
