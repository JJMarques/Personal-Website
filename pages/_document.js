import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta
                        name="description"
                        content="José Marques is a Front-End developer from Coimbra, Portugal."
                    />
                    <meta
                        property="og:title"
                        content="José Marques - Front-End Developer"
                    />
                    <meta
                        property="og:description"
                        content="José Marques is a Front-End Developer from Coimbra, Portugal."
                    />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content="/og-image.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
