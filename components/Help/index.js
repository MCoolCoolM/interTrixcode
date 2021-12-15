import * as React from 'react';
import styles from './styles.module.scss';

const Help = () => {
    return (
        <div className={styles.help}>
            <div className={styles.helpContainer}>
                <section className={styles.advertising}>
                    <div className={styles.trust}>
                        Trusted by forward-thinking software teams around the world
                    </div>

                    <div className={styles.logo}>
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
                    <div className={styles.info}>
                        <div className="container">
                            Whatever work you do,
                            <div>
                                we're able to help
                            </div>
                        </div>
                    </div>

                    <div className={styles.block1}>
                        <div className={styles.graphic1}>
                            <img className={styles.rectangle4} src="/Rectangle 4.svg"/>
                            <img className={styles.rectangle5} src="/Rectangle 5.svg"/>
                            <img className={styles.image4} src="/image 4.svg"/>
                        </div>

                        <div>
                            <div className={styles.box1}>
                                <div className={styles.icon1}>
                                    <img src="/Icon 1.svg"/>
                                </div>

                                <div className={styles.info1}>
                                    <div className={styles.Purpose1}>
                                        Design and Assets
                                    </div>
                                    <div className={styles.Description1}>
                                        Make your brand stand out with pixel-perfect design crafted to perfection.
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className={styles.block2}>
                        <div className={styles.graphic2}>
                            <img className={styles.ellipse1} src="/Ellipse 1.svg"/>
                            <img className={styles.rectangle6} src="/Rectangle 6.svg"/>
                            <img className={styles.image5} src="/image 3.svg"/>
                        </div>

                        <div>
                            <div className={styles.box2}>
                                <div className={styles.icon2}>
                                    <img src="/Icon 2.svg"/>
                                </div>

                                <div className={styles.info2}>
                                    <div className={styles.Purpose2}>
                                        Easy Content
                                    </div>
                                    <div className={styles.Description2}>
                                        Import your demos or build pages visually. Bonus: All images and illustrations
                                        included!
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className={styles.block3}>
                        <div className={styles.graphic3}>
                            <img className={styles.vector2} src="/Vector 2.svg"/>
                            <img className={styles.rectangle7} src="/Rectangle 7.svg"/>
                            <img className={styles.image6} src="/image 2.svg"/>
                        </div>

                        <div>
                            <div className={styles.box3}>
                                <div className={styles.icon3}>
                                    <img src="/Icon 3.svg"/>
                                </div>

                                <div className={styles.info3}>
                                    <div className={styles.Purpose3}>
                                        Fast and Reliable
                                    </div>
                                    <div className={styles.Description3}>
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