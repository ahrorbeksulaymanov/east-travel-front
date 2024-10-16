import Head from "next/head";

const SEO = ({ title, description, keywords, image }: { title?: string, description?: string, keywords?: string, image?: string }) => {
    
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <title>{title || 'East Tour'}</title>
            <link rel="icon" href={image || 'http://easttour.uz/logo-light.png'} />
            <meta name="title" content={title || 'East Tour'} />
            <meta name="description" content={description || 'East tour travel agency! Travel to Uzbekistan, Tashkent, Samarkand, Bukhara, Zamin'} />
            <meta name="keywords" content={keywords || 'East tour, tour, East, uzbekistan tour, travel, travels, tours, Uzbekistan, Tashkent, Samarkand, Bukhara, Zamin'} />

            <meta name="google-site-verification" content="LSj3nXDNNkl1Gu_eMP26YvQPiP0euV7VJEHSdZaeois" />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="http://easttour.uz/" />
            <meta property="og:title" content={title || 'East Tour'} />
            <meta property="og:description" content={description || 'East tour travel agency! Travel to Uzbekistan, Tashkent, Samarkand, Bukhara, Zamin'} />
            <meta property="og:image" content={image || 'http://easttour.uz/logo-dark.png'} />
            <meta property="og:site_name" content="East Tour" />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="http://easttour.uz/" />
            <meta property="twitter:title" content={title || 'East Tour'} />
            <meta property="twitter:description" content={description || 'East tour travel agency! Travel to Uzbekistan, Tashkent, Samarkand, Bukhara, Zamin'} />
            <meta property="twitter:image" content={image || 'http://easttour.uz/logo-dark.png'} />
        </Head>
    )
}
export default SEO;