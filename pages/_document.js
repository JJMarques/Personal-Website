import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return(
            <Html lang="en">
                <Head>
                    <meta name="description" content="José Marques is a Front-End web developer and also a Web Designer from Coimbra, Portugal." />
                    <meta property="og:title" content="José Marques - Front-End Web Developer & Web Designer" />
                    <meta property="og:description" content="José Marques is a Front-End Web Developer / Web Designer from Coimbra, Portugal." />
                    <meta property="og:type" content="website"/>
                    <meta property="og:image" content="/og-image.png"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument