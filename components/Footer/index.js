import * as React from 'react';
import styles from './styles.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__footerContainer}>
                <section className={styles.footer__footerContainer__section}>
                    <div className={styles.footer__footerContainer__section__column1}>
                        <div>
                            <img src="logo.svg"/>
                        </div>

                        <div className={styles.footer__footerContainer__section__column1__txt}>
                            Digits is a website template built to work seamlesly with the WordPress block editor to
                            create beautifully designed pages in minutes.
                        </div>
                    </div>


                    <div className={styles.footer__footerContainer__section__column2}>
                        <div className={styles.footer__footerContainer__section__column2__pages}>
                            Pages
                        </div>

                        <div className={styles.footer__footerContainer__section__column2__nav1}>
                            <ul className={styles.footer__footerContainer__section__li}>
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


                    <div className={styles.footer__footerContainer__section__column3}>
                        <div className={styles.footer__footerContainer__section__column3__demos}>
                            Demos
                        </div>
                        <div className={styles.footer__footerContainer__section__column3__nav2}>
                            <ul className={styles.footer__footerContainer__section__li}>
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


                    <div className={styles.footer__footerContainer__section__column4}>
                        <div className={styles.footer__footerContainer__section__column4__resources}>
                            Resources
                        </div>
                        <div className={styles.footer__footerContainer__section__column4__icon}>
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


                        <div className={styles.footer__footerContainer__section__column4__doc}>
                            <ul className={styles.footer__footerContainer__section__li}>
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
                </section>


                <div className={styles.bottom}>
                    <div className={`${styles.bottom} ${styles.bottom_sponsor}`}>
                        Copyright © 2020 tempy.club
                    </div>

                    <div className={`${styles.bottom} ${styles.bottom_politics}`}>
                        <ul className={`${styles.bottom} ${styles.bottom_politics} ${styles.bottom_politics_list}`}>
                            <li>
                                <a href="#">
                                    Privacy Policy
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Terms of Use
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    GDPR
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;