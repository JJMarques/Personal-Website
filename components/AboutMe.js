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
                    <h3 style={{ fontWeight: '300', lineHeight: '1.8em' }}>
                        <strong>Hello there!</strong> 
                        <br/>
                        My name is José Marques, i'm 22 years old, 
                        and im from Coimbra, Portugal.
                        <br/>
                        <br/>
                        
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
