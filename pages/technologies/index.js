import Head from 'next/head'
import React from 'react'
import Technologies from '../../components/Technologies'

function TechnologiesPage() {
    return (
        <main>
            <Head>
                <title>Tech Stack - José Marques - Front-End Web Developer & Web Designer</title>
                <meta name="description" content="These are my favorite Technologies! Im José Marques and im an Front-End Web Developer and Web Designer from Coimbra, Portugal." />
                <meta property="og:title" content="Tech Stack - José Marques - Front-End Web Developer & Web Designer" />
                <meta property="og:description" content="These are my favorite Technologies! Im José Marques and im an Front-End Web Developer and Web Designer from Coimbra, Portugal." />
            </Head>
            <Technologies />
        </main>
    )
}

export default TechnologiesPage
