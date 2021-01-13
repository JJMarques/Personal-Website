import React from 'react'
import styles from '../styles/AboutMe.module.css'
import Link from 'next/link'
import { BiArrowBack } from 'react-icons/bi'
import { FiArrowUpRight } from 'react-icons/fi'

function AboutMe() {
    return (
        <div className={styles.aboutMe}>
            <div className={styles.aboutMeContainer}>
                <div className={styles.titleReturn}>
                    <h1 className={styles.title}>About Me</h1>
                    <Link href="/">
                        <a className={styles.return}><BiArrowBack style={{ color: 'rgb(218, 50, 190)', marginRight: '1em' }}/> Return</a>
                    </Link>
                </div>
                <div className={styles.separator}></div>
                <div className={styles.aboutMeDisplay}>
                    <h2 style={{ fontWeight: '300', lineHeight: '1.8em' }}>
                        <strong>Hello there!</strong> 
                    </h2>
                        <br/>
                            <p>
                            My name is José Marques and im from Coimbra, Portugal. Im 22 years old.
                            <br/><br/>
                            I graduated in <strong>Multimedia</strong> from <strong>Instituto Superior Miguel Torga</strong> and 
                            since then <strong>Web Development</strong> has been my biggest professional passion.
                            <br/>
                            I like to challenge myself to learn new things and to keep improving myself and that also applies to coding and development.
                            <br/><br/>
                            I love <strong>front-end technologies</strong> (despite having some experience with back-end) and building <strong>good-looking</strong>,&nbsp; 
                            <strong>performant</strong>, and <strong>acessible</strong> Web applications. 
                            <br/>As a huge fan of <strong>React.js</strong>, lately i've been very 
                            interested on <strong>jamstack</strong>, so <strong>Next.js</strong> and <strong>Gatsby</strong> are currently my favorite technologies. <Link href="/technologies">You can find more information on my Tech Stack page.</Link>
                            <br/> 
                            I also have an eye for design, so i always look forward to build interesting and responsive user interfaces.
                        </p>
                </div>
                <div className={styles.navigation}>
                    <Link href="/technologies">
                        <a>
                            <FiArrowUpRight 
                                style={{ marginRight: '10px' }} 
                            />
                            My tech-stack
                        </a>
                    </Link>
                    <Link href="/projects">
                        <a>
                            <FiArrowUpRight 
                                style={{ marginRight: '10px' }} 
                            />
                            Projects
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
