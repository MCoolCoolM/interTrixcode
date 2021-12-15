import * as React from 'react';
import styles from './styles.module.scss';


const SectionIntro = () => {
    return (
        <section className={styles.sectionIntro}>
            <div className={styles.all}>
                <div className={styles.sectionContainer}>
                    <div className="container">
                        <div className={styles.info}>
                           Good design meets
                        <div>
                            great user experience
                        </div></div>

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
            </div>
        </section>
    )
}

export default SectionIntro;