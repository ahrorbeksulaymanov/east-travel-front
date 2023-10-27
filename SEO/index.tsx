import Head from "next/head";

const SEO = () => {
    
    return (
        <Head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1  maximum-scale=1, user-scalable=0"
            />
            <meta charSet="utf-8" />
            <title>East tour</title>
            <link rel="icon" href="./favicon.svg" />
            <meta name='title' content={'East tour'} />
            <meta name="description" content={'East tour travel agency!'} />
            <meta name="keywords" content={'East tour, tour, East, uzbekistan tour, travel, travels, tours'} />

            <meta name="og:type" content={'website'} />
            <meta name="og:url" content={'http://easttour.uz/'} />
            <meta name="og:title" content={"East tour"} />
            <meta name="og:description" content={'East tour travel agency!'} />
            <meta name="og:image" content={`image`} />
            <meta name="og:site_name" content={'East tour'} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="http://easttour.uz/" />
            <meta property="twitter:title" content="East tour" />
            <meta property="twitter:description" content='"East tour travel agency!' />
            <meta property="twitter:image" content="https://easttour.uz/media/cwhttgutvn20_44_02_14_12.png" />        
        </Head>
    )
}
export default SEO;