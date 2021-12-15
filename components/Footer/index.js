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
                                <li>
                                    <a href="#">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        News
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className={styles.column3}>
                        <div className={styles.demos}>
                            Demos
                        </div>
                        <div className={styles.nav2}>
                            <ul className={styles.li}>
                                <li>
                                    <a href="#">
                                        Classic
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Boxy
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Gradient
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Minimal
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Night
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className={styles.column4}>
                        <div className={styles.resources}>
                            Resources
                        </div>
                        <div className={styles.icon}>
                            <a href="https://www.facebook.com/">
                                <img src="icon-facebook.svg" alt=""/>
                            </a>
                            <a href="https://www.instagram.com/">
                                <img src="icon-instagram.svg" alt=""/>
                            </a>
                            <a href="https://www.twitter.com/">
                                <img src="icon-twitter.svg" alt=""/>
                            </a>
                            <a href="https://www.dribbble.com/">
                                <img src="icon-dribbble.svg" alt=""/>
                            </a>
                            <a href="https://www.envato.com/">
                                <img src="icon-envato.svg" alt=""/>
                            </a>


                        </div>

                        <div className={styles.doc}>
                            <ul className={styles.li}>
                                <li>
                                    <a href="#">
                                        Download now
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Documentation
                                    </a>
                                </li>
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