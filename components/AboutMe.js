import React from 'react'
import styles from '../styles/AboutMe.module.css'
import Link from 'next/link'
import { BiArrowBack } from 'react-icons/bi'

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
                            My name is José Marques, i'm 22 years old, 
                            and im from Coimbra, Portugal.
                            <br/><br/>
                            I graduated in <strong>Multimedia</strong> from <strong>Instituto Superior Miguel Torga</strong> and 
                            since then <strong>Web Development</strong> has been my biggest professional passion.
                            <br/>
                            I focus on developing <strong>clean</strong> and <strong>reusable</strong> code,
                            and to follow and promote <strong>the industry best practices</strong> and <strong>good code readability.</strong>
                            <br/><br/>
                            I choose my technologies based on the necessities of the project and the development experience they provide, but
                            im always open to try / learn new things.
                        </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
