import Head from "next/head";
import Header from "../components/Header";

export default function Index() {
    return(
        <main>
            <Head>
                <title>José Marques - Front-End Web Developer & Web Designer</title>
                <meta name="description" content="José Marques is a Front-End web developer and also a Web Designer from Coimbra, Portugal." />
                <meta property="og:title" content="José Marques - Front-End Web Developer & Web Designer" />
                <meta property="og:description" content="José Marques is a Front-End web developer and also a Web Designer from Coimbra, Portugal." />
            </Head>
            <Header />
        </main>
    )
}