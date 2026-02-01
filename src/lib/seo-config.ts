const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://construccionesmbl.vercel.app";

export const defaultSEOConfig = {
  defaultTitle: "Construcciones MBL - Reformas Integrales en Gijón y Asturias | Expertos en Reformas",
  titleTemplate: "%s | Construcciones MBL Gijón - Profesionales en Reformas",
  description: "✓Más de 15 años de experiencia ✓Presupuesto sin compromiso ✓Reformas integrales, baños, cocinas y locales comerciales en Gijón y toda Asturias. Calidad, compromiso y garantía en cada proyecto.",
  canonical: baseUrl,
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: baseUrl,
    siteName: "Construcciones MBL",
    title: "Construcciones MBL - Expertos en Reformas en Asturias",
    description: "Empresa líder en reformas integrales en Asturias. Más de 15 años transformando espacios con calidad y profesionalidad.",
    images: [
      {
        url: `${baseUrl}/assets/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Construcciones MBL - Reformas en Asturias",
      }
    ]
  },
  additionalMetaTags: [
    {
      name: "author",
      content: "Construcciones MBL"
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    },
    {
      name: "geo.region",
      content: "ES-AS"
    },
    {
      name: "geo.placename",
      content: "Gijón"
    }
  ],
  languageAlternates: [
    {
      hrefLang: "es",
      href: baseUrl
    }
  ]
};