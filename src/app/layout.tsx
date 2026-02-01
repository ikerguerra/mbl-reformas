import type { Metadata } from "next";
import { Open_Sans, Oswald } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BootstrapClient from "@/components/BootstrapClient";
import WhatsAppButton from "@/components/WhatsAppButton";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"]
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://construccionesmbl.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "MBL - Reformas Integrales y Construcción en Asturias",
    template: "%s | Construcciones MBL"
  },
  description: "Empresa de reformas integrales, cocinas y baños en Gijón, Oviedo y Avilés. Calidad, compromiso y sostenibilidad en cada proyecto de construcción.",
  keywords: ["reformas integrales asturias", "reformas gijón", "reformas baños asturias", "reformas cocinas asturias", "construcción asturias"],
  authors: [{ name: "Construcciones MBL" }],
  creator: "Construcciones MBL",
  publisher: "Construcciones MBL",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: "MBL - Reformas Integrales y Construcción en Asturias",
    description: "Expertos en reformas integrales, baños y cocinas en Asturias. Creamos espacios sostenibles y de alta calidad.",
    url: baseUrl,
    siteName: "Construcciones MBL",
    locale: "es_ES",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "w6smJe1jzAywMG56URRibLgECL0A2ZUE2PsrDWTROlM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Construcciones MBL",
    "image": `${baseUrl}/logoMBL.svg`,
    "@id": baseUrl,
    "url": baseUrl,
    "telephone": "684675898",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Argentina 132 (Cristasa of.221)",
      "addressLocality": "Gijón",
      "addressRegion": "Asturias",
      "postalCode": "33213",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.545,
      "longitude": -5.694
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/share/16tUCqBDie/?mibextid=wwXIfr",
      "https://www.instagram.com/construccionesmbl"
    ]
  };

  return (
    <html lang="es">
      <body className={`${openSans.variable} ${oswald.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <BootstrapClient />
        <Header />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
