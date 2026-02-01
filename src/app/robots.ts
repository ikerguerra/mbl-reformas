import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://construccionesmbl.vercel.app'

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: [
                '/api/',
                '/_next/',
                '/*?',
                '/*?*',
                '/*/404',
                '/404',
            ],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
