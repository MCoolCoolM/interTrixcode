import * as React from 'react';
import styles from './styles.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.section}>
                    <div className={styles.column1}>
                        <div>
                            <img src="logo.svg"/>
                        </div>

                        <div className={styles.txt}>
                            Digits is a website template built to work seamlesly with the WordPress block editor to
                            create beautifully designed pages in minutes.
                        </div>
                    </div>


                    <div className={styles.column2}>
                        <div className={styles.pages}>
                            Pages
                        </div>
                        <div className={styles.nav1}>
                            <ul className={styles.li}>
                                <li>Home</li>
                                <li>About</li>
                                <li>News</li>
                                <li>Pricing</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>


                    <div className={styles.column3}>
                        <div className={styles.demos}>
                            Demos
                        </div>
                        <div className={styles.nav2}>
                            <ul className={styles.li}>
                                <li>Classic</li>
                                <li>Boxy</li>
                                <li>Gradient</li>
                                <li>Minimal</li>
                                <li>Night</li>
                            </ul>
                        </div>
                    </div>


                    <div className={styles.column4}>
                        <div className={styles.resources}>
                            Resources
                        </div>
                        <div className={styles.icon}>
                            <img src="icon-facebook.svg" alt=""/>
                            <img src="icon-instagram.svg" alt=""/>
                            <img src="icon-twitter.svg" alt=""/>
                            <img src="icon-dribbble.svg" alt=""/>
                            <img src="icon-envato.svg" alt=""/>
                        </div>

                        <div className={styles.doc}>
                            <ul className={styles.li}>
                                <li>Download now</li>
                                <li>Documentation</li>
                            </ul>
                        </div>
                    </div>
                </div>

                    <div className={styles.bottom}>
                        <div className={styles.sponsor}>
                            Copyright © 2020 tempy.club
                        </div>

                        <div className={styles.politics}>
                            <ul className={styles.list}>
                                <li>
                                    Privacy Policy
                                </li>
                                <li>
                                    Terms of Use
                                </li>
                                <li>
                                    GDPR
                                </li>
                            </ul>
                        </div>
                    </div>



            </div>
        </footer>
    )
}

export default Footer;