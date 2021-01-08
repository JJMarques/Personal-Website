import Head from 'next/head'
import AboutMe from '../../components/AboutMe'

export default function AboutMePage() {
    return(
        <main>
            <Head>
                <title>About Me - José Marques - Front-End Web Developer & Web Designer</title>
                <meta name="description" content="Get to know me! Im José Marques and im an Front-End Web Developer and Web Designer from Coimbra, Portugal." />
                <meta property="og:title" content="About Me - José Marques - Front-End Web Developer & Web Designer" />
                <meta property="og:description" content="Get to know me! Im José Marques and im an Front-End Web Developer and Web Designer from Coimbra, Portugal." />
            </Head>
            <AboutMe />
        </main>
    )
}