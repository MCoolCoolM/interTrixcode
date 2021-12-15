import * as React from 'react';
import styles from './styles.module.scss';


const SectionIntro = () => {
    return (
        <section className={styles.sectionIntro}>
            <div className={styles.sectionIntro__container}>
                <div className={styles.sectionIntro__sectionContainer}>
                    <div className={styles.sectionIntro__sectionContainer__info}>
                        Good design meets great user experience
                    </div>
                    <div className={styles.sectionIntro__sectionContainer__additional}>
                        For everyone,from beginners to experts
                    </div>
                    <div className={styles.sectionIntro__sectionContainer__button}>
                        <button className={`${styles.button} ${styles.button_buy}`}>Buy Digits</button>
                        <button className={`${styles.button} ${styles.button_see}`}>See the Features</button>
                    </div>
                    <div className={styles.sectionIntro__sectionContainer__graphic}>
                        <img src="/Graphic.svg"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionIntro;