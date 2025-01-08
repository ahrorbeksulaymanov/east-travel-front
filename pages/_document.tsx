import SEO from '@/SEO'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />

        {/* Montserrat font */}
        <link href="https://fonts.googleapis.com/css2?family=Marcellus&family=Marcellus+SC&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />

        {/* Noto Serif font */}
        <link href="https://fonts.googleapis.com/css2?family=Marcellus&family=Marcellus+SC&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Noto+Serif:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>

        {/* Public Sans font*/}
        <link href="https://fonts.googleapis.com/css2?family=Marcellus&family=Marcellus+SC&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Noto+Serif:wght@100;200;300;400;500;600;700;800;900&family=Public+Sans:wght@400;500;600;700;800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
        
        {/* AOS animation css */}
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        <SEO />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
