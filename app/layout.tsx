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
    default: 'Saple — Creative Performance Studio | Content & Ads, die Kunden bringen',
    template: '%s — Saple',
  },
  description: 'Saple ist dein Creative Performance Studio in Berlin. Wir produzieren Reels, Video Ads und Social Content, der messbar neue Kunden bringt.',
  keywords: ['Creative Performance Studio', 'Berlin', 'Reels', 'Video Ads', 'Social Content', 'Content-Produktion', 'Performance Marketing', 'Social Media Ads'],
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
    title: 'Saple — Creative Performance Studio | Content & Ads, die Kunden bringen',
    description: 'Wir produzieren Reels, Video Ads und Social Content, der nicht nur gut aussieht — sondern messbar neue Kunden bringt.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Saple — Creative Performance Studio Berlin',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saple — Creative Performance Studio Berlin',
    description: 'Content & Ads, die Kunden bringen. Reels, Strategie, Wachstum — alles aus einem Studio.',
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
      description: 'Creative Performance Studio aus Berlin. Content & Ads, die Kunden bringen.',
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
      name: 'Saple — Creative Performance Studio',
      description: 'Creative Performance Studio in Berlin. Reels, Video Ads, Social Content und Performance Marketing für Unternehmen, die messbar wachsen wollen.',
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
      priceRange: '€€',
      areaServed: {
        '@type': 'GeoCircle',
        geoMidpoint: { '@type': 'GeoCoordinates', latitude: 52.52, longitude: 13.405 },
        geoRadius: '500000',
      },
      serviceType: ['Content-Produktion', 'Video Ads', 'Social Media Marketing', 'Performance Marketing', 'Reels Produktion', 'Creative Ads'],
      currenciesAccepted: 'EUR',
      paymentAccepted: 'Überweisung, Rechnung',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://saple-website.netlify.app/#website',
      url: 'https://saple-website.netlify.app',
      name: 'Saple',
      description: 'Creative Performance Studio Berlin',
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
