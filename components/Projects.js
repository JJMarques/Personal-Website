import React from 'react'
import styles from '../styles/Projects.module.css'
import { BiArrowBack } from 'react-icons/bi'
import { FiGithub, FiArrowUpRight } from 'react-icons/fi'
import Link from 'next/link'
import Image from 'next/image'

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
                            <img 
                                src={project.img} 
                                className={styles.projectImg} 
                                alt={project.name} 
                            />
                            <div className={styles.projectIcons}>
                                <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
                                    <a href={project.githubHref} target="_blank" rel="noreferrer">
                                        <FiGithub style={{ fontSize: '1.5em' }} />
                                    <small>Github</small>
                                    </a>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
                                    <a href={project.pageHref} target="_blank" rel="noreferrer">
                                        <FiArrowUpRight style={{ fontSize: '1.5em' }} />
                                    <small>Visit</small>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
