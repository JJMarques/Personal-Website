import React from 'react'
import styles from '../styles/Projects.module.css'
import { BiArrowBack } from 'react-icons/bi'
import { FiGithub, FiArrowUpRight } from 'react-icons/fi'
import Link from 'next/link'

function Projects({ projects }) {

    return (
        <div className={styles.projects}>
            <div className={styles.projectsContainers}>
                <div className={styles.titleReturn}>
                    <h1 className={styles.title}>Projects</h1>
                    <Link href="/">
                        <a className={styles.return}><BiArrowBack style={{ color: 'rgb(218, 50, 190)', marginRight: '1em' }}/> Return</a>
                    </Link>
                </div>
                <div className={styles.separator}></div>
                <div className={styles.projectsDisplay}>
                    {projects.map( (project, key) => (
                        <div className={styles.projectCard} key={key}>
                            <img src={project.img} className={styles.projectImg} alt={project.name} />
                            <div className={styles.projectIcons}>
                                <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
                                    <a href={project.githubHref} target="_blank">
                                        <FiGithub style={{ fontSize: '1.5em' }} />
                                    </a>
                                    <small>Github</small>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
                                    <a href={project.pageHref} target="_blank">
                                        <FiArrowUpRight style={{ fontSize: '1.5em' }} />
                                    </a>
                                    <small>Visit</small>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className={styles.projectCardDisabled}>
                        <div className={styles.projectIcons}>
                            <h2 style={{ fontWeight: '300' }}> Coming soon...</h2>
                        </div>
                    </div>
                    <div className={styles.projectCardDisabled}>
                        <div className={styles.projectIcons}>
                            <h2 style={{ fontWeight: '300' }}> Coming soon...</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
