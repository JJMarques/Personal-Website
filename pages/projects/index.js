import React from "react";
import Projects from "../../components/Projects";
import Head from "next/head";

export default function ProjectsPage({ projects }) {
    return (
        <main>
            <Head>
                <title>Projects - José Marques - Front-End Developer</title>
                <meta
                    name="description"
                    content="Check out my Projects! Im José Marques and im a Front-End Developer from Coimbra, Portugal."
                />
                <meta
                    property="og:title"
                    content="Projects - José Marques - Front-End Developer"
                />
                <meta
                    property="og:description"
                    content="Check out my Projects! Im José Marques and im a Front-End Developerfrom Coimbra, Portugal."
                />
            </Head>
            <Projects projects={projects} />
        </main>
    );
}

export async function getStaticProps() {
    let projects = [
        {
            name: "🔥 News PT",
            img: "/hotnewspt.png",
            description:
                "This website fetches and filters the most relevant news of the portuguese press! It is powered by News API and built with Next.js.",
            githubHref: "https://github.com/JJMarques/hot-news-portugal",
            pageHref: "https://hot-news-portugal.jjmarques.vercel.app/",
        },
        {
            name: "PokeSearch",
            img: "/pokesearch.png",
            description:
                "A Web app that allows you to search for all the current Pokemons! It is Powered by PokeApi and built with React.js.",
            githubHref: "https://github.com/JJMarques/PokeSearch-v1-react",
            pageHref: "https://pokesearch2020.netlify.app/",
        },
        {
            name: "Meteorologia PT",
            img: "/meteorologia.png",
            description:
                "A Web app that fetches weekly information about the weather in the districts of Portugal. It is powered by IPMA and built with React.js ",
            githubHref:
                "https://github.com/JJMarques/V2-meteorologia-app-react",
            pageHref: "https://meteorologia-pt.netlify.app/",
        },
        {
            name: "José Marques - Unsplash",
            img: "/phportfolio.png",
            description:
                "A webpage that displays my photographic portfolio on Unsplash, it also shows some stats about my photographies. It is fully provided by the Unsplash API",
            githubHref: "https://github.com/JJMarques/unsplash-album",
            pageHref: "https://jose-marques-unsplash.vercel.app/",
        },
        {
            name: "Redux ToDo",
            img: "/reduxtodo.png",
            description:
                "A simple ToDo app that stores your daily tasks. It also allows you to edit the content of the task, and check / delete the task. It was built with React.js and Redux",
            githubHref: "https://github.com/JJMarques/redux-tasklist",
            pageHref: "https://redux-tasklist.vercel.app/",
        },
        {
            name: "Breaking Bad Searcher",
            img: "/breakingbad.png",
            description:
                "A Web site that allows you to search for Breaking Bad characters. It is powered by the Breaking Bad API and built with Next.js",
            githubHref: "https://github.com/JJMarques/breaking-bad",
            pageHref: "https://breaking-bad-gules.vercel.app/",
        },
        {
            name: "Task List Manager",
            img: "/tasklist.png",
            description:
                "Another Task List app built with Next.js and Chakra UI. The purpose of the app was to experiment Chakra UI and to implement TypeScript.",
            githubHref: "https://github.com/JJMarques/taskList-nextjs",
            pageHref: "https://task-list-nextjs.vercel.app/",
        },
    ];

    return {
        props: {
            projects,
        },
    };
}
