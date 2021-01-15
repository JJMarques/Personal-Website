import styles from '../styles/Technologies.module.css'
import { BiArrowBack } from 'react-icons/bi'
import { 
    SiTypescript, 
    SiJavascript, 
    SiReact, 
    SiNextDotJs,
    SiSass,
    SiStyledComponents,
    SiNodeDotJs,
    SiCss3,
    SiHtml5,
    SiGit,
    SiDocker,
    SiRedux,
    SiGatsby,
    SiAdobexd,
    SiFigma,
    SiJest } from 'react-icons/si'
import { FiArrowUpRight } from 'react-icons/fi'
import Link from 'next/link'

export default function Technologies() {

    const iconStyle = { width: '50px', height: 'auto', margin: '1em' }

    return(
        <div className={styles.technologies}>
            <div className={styles.technologiesContainers}>
                <div className={styles.titleReturn}>
                    <h1 className={styles.title}>Tech-stack</h1>
                    <Link href="/">
                        <a className={styles.return}><BiArrowBack style={{ color: 'rgb(218, 50, 190)', marginRight: '1em' }}/> Return</a>
                    </Link>
                </div>
                <div className={styles.separator}></div>
                <div className={styles.technologiesDisplay}>
                    <div>
                        <h1>Languages</h1>
                        <div className={styles.technologiesList}>
                            <div className={styles.technologyItem}>
                                <SiJavascript 
                                    style={iconStyle} 
                                />
                                <small>JavaScript</small>
                            </div>
                            <div className={styles.technologyItem}>
                                <SiTypescript style={iconStyle} />
                                <small>Typescript</small>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1>Frameworks / libraries</h1>
                        <div className={styles.technologiesList}>
                            <div className={styles.technologyItem}>
                                <SiReact style={iconStyle} />
                                <small>React.js</small>
                            </div>
                            <div className={styles.technologyItem}>
                                <SiNextDotJs style={iconStyle} />
                                <small>Next.js</small>
                            </div>
                            <div className={styles.technologyItem}>
                                <SiNodeDotJs style={iconStyle} />
                                <small>Node.js</small>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1>Styling</h1>
                        <div className={styles.technologiesList}>
                            <div className={styles.technologyItem}>
                                <SiCss3 style={iconStyle} />
                                <small>CSS3</small>
                            </div>
                            <div className={styles.technologyItem}>
                                <SiSass style={iconStyle} />
                                <small>Sass</small>
                            </div>
                            <div className={styles.technologyItem}>
                                <SiStyledComponents style={iconStyle} />
                                <small>Styled Components</small>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1>Others...</h1>
                        <div className={styles.technologiesList}>
                            <div className={styles.technologyItem}>
                                <SiHtml5 style={iconStyle} />
                                <small>HTML5</small>
                            </div>
                            <div className={styles.technologyItem}>
                                <SiGit style={iconStyle} />
                                <small>Git</small>
                            </div>
                            <div className={styles.technologyItem}>
                                <SiDocker style={iconStyle} />
                                <small>Docker</small>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1>Web Design / Prototyping</h1>
                        <div className={styles.technologiesList}>
                            <div className={styles.technologyItem}>
                                <SiAdobexd style={iconStyle} />
                                <small>Adobe Xd</small>
                            </div>
                            <div className={styles.technologyItem}>
                                <SiFigma style={iconStyle} />
                                <small>Figma</small>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1>Getting better at...</h1>
                        <div className={styles.technologiesList}>
                            <div className={styles.technologyItem}>
                                <SiGatsby style={iconStyle} />
                                <small>Gatsby</small>
                            </div>
                            <div className={styles.technologyItem}>
                                <SiRedux style={iconStyle} />
                                <small>Redux</small>
                            </div>
                            <div className={styles.technologyItem}>
                                <SiJest style={iconStyle} />
                                <small>Jest</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.navigation}>
                <Link href="/projects">
                        <a>
                            <FiArrowUpRight 
                                style={{ marginRight: '10px' }} 
                            />
                            Projects
                        </a>
                    </Link>
                    <Link href="/about-me">
                        <a>
                            <FiArrowUpRight 
                                style={{ marginRight: '10px' }} 
                            />
                            About Me
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