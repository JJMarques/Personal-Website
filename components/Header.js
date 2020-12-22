import React from 'react'
import Link from 'next/link'
import styles from '../styles/Header.module.css'
import { BsArrowUpRight } from 'react-icons/bs'

function Header() {
    return (
        <div className={styles.header}>
            <h1 className={styles.name}>José Marques</h1>
            <div className={styles.roles}>
                <span>Front-end Web Developer</span>
                <h3>&</h3>
                <span>Web Designer</span>
            </div>
            <div className={styles.callToAction}>
                <Link href="/projects">
                    <a> <BsArrowUpRight style={{ marginRight: '1em' }} /> Projects </a>
                </Link>
                <a> <BsArrowUpRight style={{ marginRight: '1em' }} /> Technologies</a>
            </div>
            
        </div>
    )
}

export default Header
