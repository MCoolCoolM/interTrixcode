import * as React from 'react';
import styles from './styles.module.scss';


const SectionIntro = () => {
    return (
        <section className={styles.sectionIntro}>
            <div className={styles.all}>
                <div className={styles.sectionContainer}>

                    <div className={styles.info}>
                        Good design meets great user experience
                    </div>

                    <div className={styles.additional}>
                        For everyone,from beginners to experts
                    </div>

                    <div className={styles.button}>
                        <button className={styles.buy}>Buy Digits</button>
                        <button className={styles.see}>See the Features</button>
                    </div>

                    <div className={styles.graphic}>
                        <img src="/Graphic.svg"/>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default SectionIntro;