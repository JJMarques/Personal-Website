import Head from "next/head";
import AboutMe from "../../components/AboutMe";

export default function AboutMePage() {
    return (
        <main>
            <Head>
                <title>About Me - José Marques - Front-End Developer</title>
                <meta
                    name="description"
                    content="Get to know me! Im José Marques and im a Front-End Developer from Coimbra, Portugal."
                />
                <meta
                    property="og:title"
                    content="About Me - José Marques - Front-End Developer"
                />
                <meta
                    property="og:description"
                    content="Get to know me! Im José Marques and im a Front-End Developer from Coimbra, Portugal."
                />
            </Head>
            <AboutMe />
        </main>
    );
}
