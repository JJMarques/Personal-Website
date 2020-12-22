import React from 'react'
import Projects from '../../components/Projects'

export default function ProjectsPage({ projects }) {
    return (
        <Projects projects={projects} />
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