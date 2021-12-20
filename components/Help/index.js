import * as React from 'react';
import styles from './styles.module.scss';

const Help = () => {
    return (
        <div className={styles.help}>
            <div className={styles.help__helpContainer}>
                <section className={styles.help__helpContainer__advertising}>
                    <div className={styles.help__helpContainer__advertising__trust}>
                        Trusted by forward-thinking software teams around the world
                    </div>

                    <div className={styles.help__helpContainer__advertising__logo}>
                        <img src="/logo-1.svg"/>
                        <img src="/logo-2.svg"/>
                        <img src="/logo-3.svg"/>
                        <img src="/logo-4.svg"/>
                        <img src="/logo-5.svg"/>
                        <img src="/logo-6.svg"/>
                        <img src="/logo-7.svg"/>
                    </div>
                </section>

                <section>
                    <div className={styles.help__helpContainer__info}>
                        <div className="container">
                            Whatever work you do,
                            <div>
                                we're able to help
                            </div>
                        </div>
                    </div>

                    <div className={styles.help__helpContainer__block1}>
                        <div className={styles.help__helpContainer__block1__graphic1}>
                            <img className={styles.help__helpContainer__block1__graphic1__rectangle4}
                                 src="/Rectangle 4.svg"/>
                            <img className={styles.help__helpContainer__block1__graphic1__rectangle5}
                                 src="/Rectangle 5.svg"/>
                            <img className={styles.help__helpContainer__block1__graphic1__image4}
                                 src="/image 4.svg"/>
                        </div>

                        <div>
                            <div className={styles.help__helpContainer__block1__box1}>
                                <div className={styles.help__helpContainer__block1__box1__icon1}>
                                    <img src="/Icon 1.svg"/>
                                </div>

                                <div className={styles.help__helpContainer__block1__box1__info1}>
                                    <div className={styles.help__helpContainer__block1__box1__info1__purpose1}>
                                        Design and Assets
                                    </div>
                                    <div className={styles.help__helpContainer__block1__box1__info1__description1}>
                                        Make your brand stand out with pixel-perfect design crafted to perfection.
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className={styles.help__helpContainer__block2}>
                        <div className={styles.help__helpContainer__block2__graphic2}>
                            <img className={styles.help__helpContainer__block2__graphic2__ellipse1}
                                 src="/Ellipse 1.svg"/>
                            <img className={styles.help__helpContainer__block2__graphic2__rectangle6}
                                 src="/Rectangle 6.svg"/>
                            <img className={styles.help__helpContainer__block2__graphic2__image5}
                                 src="/image 3.svg"/>
                        </div>

                        <div>
                            <div className={styles.help__helpContainer__block2__box2}>
                                <div className={styles.help__helpContainer__block2__box2__icon2}>
                                    <img src="/Icon 2.svg"/>
                                </div>

                                <div className={styles.help__helpContainer__block2__box2__info2}>
                                    <div className={styles.help__helpContainer__block2__box2__info2__purpose2}>
                                        Easy Content
                                    </div>
                                    <div className={styles.help__helpContainer__block2__box2__info2__description2}>
                                        Import your demos or build pages visually. Bonus: All images and illustrations
                                        included!
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className={styles.help__helpContainer__block3}>
                        <div className={styles.help__helpContainer__block3__graphic3}>
                            <img className={styles.help__helpContainer__block3__graphic3__vector2}
                                 src="/Vector 2.svg"/>
                            <img className={styles.help__helpContainer__block3__graphic3__rectangle7}
                                 src="/Rectangle 7.svg"/>
                            <img className={styles.help__helpContainer__block3__graphic3__image6}
                                 src="/image 2.svg"/>
                        </div>

                        <div>
                            <div className={styles.help__helpContainer__block3__box3}>
                                <div className={styles.help__helpContainer__block3__box3__icon3}>
                                    <img src="/Icon 3.svg"/>
                                </div>

                                <div className={styles.help__helpContainer__block3__box3__info3}>
                                    <div className={styles.help__helpContainer__block3__box3__info3__purpose3}>
                                        Fast and Reliable
                                    </div>
                                    <div className={styles.help__helpContainer__block3__box3__info3__description3}>
                                        No heavy-weight plugins. No builders. No unneccesary file loading. Pure
                                        WordPress.
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </div>
    )
}

export default Help;