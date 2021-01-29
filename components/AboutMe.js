import React from 'react'
import styles from '../styles/AboutMe.module.scss'
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
                        <strong>Welcome!</strong> 
                    </h2>
                        <br/>
                            <p>
                            My name is José Marques and im from Coimbra, Portugal. Im 22 years old.
                            <br/><br/>
                            I graduated in <strong>Multimedia</strong> from <strong>Instituto Superior Miguel Torga</strong> and 
                            since then <strong>Web Development</strong> has been my biggest professional passion.
                            <br/>
                            I like to challenge myself to learn new things and to keep improving myself, and that also applies to coding and development.
                            <br/><br/>
                            I love to work with <strong>front-end technologies</strong> and build <strong>good-looking</strong>,&nbsp; 
                            <strong>performant</strong>, and <strong>accessible</strong> Web applications.
                            <br/>
                            I started out by getting a solid knowledge of <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>vanilla JavaScript</strong>, and about the 
                            Web in general, and then moved on to frameworks and started to gradually implement <strong>TypeScript</strong>.
                            <br/><strong>React.js</strong> is my go-to JavaScript library, and lately i've been moving towards Jamstack 
                            (Next.js/Gatsby). <Link href="/technologies">You can find more information on my Tech Stack page.</Link>
                            <br/><br/> 
                            I also have an eye for design and always look forward to building interesting and fully responsive user interfaces.
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
                <div className={styles.footer}>
                    <p>José Marques 2021 - Contact me at <a href="mailto:jjgm98@gmail.com">jjgm98@gmail.com</a></p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
