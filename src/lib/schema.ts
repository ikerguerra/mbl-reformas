import { Organization, WithContext } from 'schema-dts';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://construccionesmbl.vercel.app";

export const organizationSchema: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${baseUrl}/#organization`,
  "name": "Construcciones MBL",
  "url": baseUrl,
  "logo": {
    "@type": "ImageObject",
    "url": `${baseUrl}/assets/LogoMBL-Light.svg`,
    "width": "180",
    "height": "60"
  },
  "image": [
    `${baseUrl}/assets/hero-reformas-integrales.jpg`,
    `${baseUrl}/assets/hero-reformas-banos.jpg`,
    `${baseUrl}/assets/hero-reformas-cocinas.jpg`
  ],
  "description": "Empresa líder en reformas integrales en Asturias. Especialistas en reformas de baños, cocinas, locales comerciales y reformas integrales con más de 15 años de experiencia.",
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
    "latitude": "43.5322",
    "longitude": "-5.6771"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Gijón"
    },
    {
      "@type": "City",
      "name": "Oviedo"
    },
    {
      "@type": "City",
      "name": "Avilés"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios de Reformas",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Reformas Integrales",
        "description": "Renovación completa de viviendas y locales"
      },
      {
        "@type": "OfferCatalog",
        "name": "Reformas de Baños",
        "description": "Modernización y renovación de baños"
      },
      {
        "@type": "OfferCatalog",
        "name": "Reformas de Cocinas",
        "description": "Diseño y renovación de cocinas"
      },
      {
        "@type": "OfferCatalog",
        "name": "Reformas de Locales Comerciales",
        "description": "Adaptación y renovación de espacios comerciales"
      }
    ]
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+34-684-675-898",
      "contactType": "customer service",
      "availableLanguage": ["Spanish"],
      "areaServed": "ES"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/construccionesmbl",
    "https://www.instagram.com/construccionesmbl"
  ],
  "openingHoursSpecification": [
    {
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
    }
  ],
  "priceRange": "€€",
  "keywords": "reformas integrales asturias, reformas gijon, reformas baños, reformas cocinas, reformas locales comerciales"
};