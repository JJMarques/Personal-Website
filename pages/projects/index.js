import React from 'react'
import Projects from '../../components/Projects'
import Head from 'next/head'

export default function ProjectsPage({ projects }) {
    return (
        <main>
            <Head>
                <title>Projects - José Marques - Front-End Web Developer & Web Designer</title>
                <meta name="description" content="Check out my Projects! Im José Marques and im a Front-End Web Developer and Web Designer from Coimbra, Portugal." />
                <meta property="og:title" content="Projects - José Marques - Front-End Web Developer & Web Designer" />
                <meta property="og:description" content="Check out my Projects! Im José Marques and im a Front-End Web Developer and Web Designer from Coimbra, Portugal." />
            </Head>
            <Projects projects={projects} />
        </main>
    )
}


export async function getStaticProps() {
    
    let projects = [
        {
            name: 'PokeSearch',
            img: '/pokesearch.png',
            githubHref: 'https://github.com/JJMarques/PokeSearch-v1-react',
            pageHref: 'https://pokesearch2020.netlify.app/'
        },
        {
            name: 'Meteorologia PT',
            img: '/meteorologia.png',
            githubHref: 'https://github.com/JJMarques/V2-meteorologia-app-react',
            pageHref: 'https://meteorologia-pt.netlify.app/'
        }
    ]
    
    return {
        props: {
            projects
        }
    }
}