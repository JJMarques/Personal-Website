import React from 'react'
import Link from 'next/link'
import styles from '../styles/Header.module.scss'
import { BsArrowUpRight, BsPersonFill } from 'react-icons/bs'
import { FiInstagram, FiGithub } from 'react-icons/fi'
import { SiGmail } from 'react-icons/si'

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.social}>
                <a 
                    href="https://www.instagram.com/jmarques_98/" 
                    rel="noreferrer" 
                    target="_blank"
                    aria-label="My instagram page"
                >
                    <FiInstagram />
                </a>
                <a 
                    href="https://github.com/JJMarques" 
                    target="_blank" rel="noreferrer" 
                    style={{ marginLeft: '30px' }}
                    aria-label="My github account"
                >
                    <FiGithub />
                </a>
                <a
                    href="mailto:jjgm98@gmail.com" 
                    target="_blank" rel="noreferrer" 
                    style={{ marginLeft: '30px' }}
                    aria-label="Contact me via email"
                >
                    <SiGmail />
                </a>
            </div>
            <h1 className={styles.name}>José Marques</h1>
            <div className={styles.roles}>
                <h2>Front-end Web Developer</h2>
                <span>&</span>
                <h2>Web Designer</h2>
            </div>
            <div className={styles.callToAction}>
                <Link href="/projects">
                    <a> <BsArrowUpRight style={{ marginRight: '1em' }} /> Projects </a>
                </Link>
                <Link href="/technologies">
                    <a> <BsArrowUpRight style={{ marginRight: '1em' }} /> Tech Stack</a>
                </Link>
            </div>
            <div className={styles.otherOptions}>
                <span style={{ fontWeight: '200' }}>Or...</span>
                <Link href="/about-me">
                    <a><BsPersonFill style={{ marginRight: '20px' }} /> Know more about me</a>
                </Link>
            </div>
        </div>
    )
}

export default Header
