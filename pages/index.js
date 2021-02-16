import Head from "next/head";
import Header from "../components/Header";

export default function Index() {
    return (
        <main>
            <Head>
                <title>José Marques - Front-End Developer</title>
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
                    content="José Marques is a Front-End developer from Coimbra, Portugal."
                />
            </Head>
            <Header />
        </main>
    );
}
