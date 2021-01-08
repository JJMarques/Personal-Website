import React from 'react'
import Link from 'next/link'
import styles from '../styles/Header.module.css'
import { BsArrowUpRight, BsPersonFill } from 'react-icons/bs'
import { FiInstagram, FiGithub } from 'react-icons/fi'

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.social}>
                <a href="https://www.instagram.com/jmarques_98/" rel="noreferrer" target="_blank">
                    <FiInstagram />
                </a>
                <a href="https://github.com/JJMarques" target="_blank" rel="noreferrer" style={{ marginLeft: '30px' }}>
                    <FiGithub />
                </a>
            </div>
            <h1 className={styles.name}>José Marques</h1>
            <div className={styles.roles}>
                <h3>Front-end Web Developer</h3>
                <span>&</span>
                <h3>Web Designer</h3>
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
                <h3 style={{ fontWeight: '200' }}>Or...</h3>
                <Link href="/about-me">
                    <a><BsPersonFill style={{ marginRight: '20px' }} /> Know more about me</a>
                </Link>
            </div>
        </div>
    )
}

export default Header
