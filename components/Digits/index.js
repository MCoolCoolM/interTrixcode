import * as React from 'react';
import styles from './styles.module.scss';

const Digits = () => {
    return (
        <div className={styles.digits}>
            <div className={styles.digitsContainer}>
                <div className={styles.section}>
                    <div className={styles.info}>
                        Simplicity meets innovative design
                    </div>

                    <div className={styles.additional}>
                        <div className="container1">
                            It's really easy to start using Digits.
                            <div>
                                Install the theme,
                                choose a demo and
                            </div>
                            <div>
                                start designing the future of your business!
                            </div>
                        </div>
                    </div>

                    <button className={styles.button}>
                        Buy Digits
                    </button>
                </div>


                <div className={styles.parents}>
                    <div className={styles.child}>
                        <img src="/browser 2.svg"/>
                        <img src="/browser 11.svg"/>
                        <img src="/browser 10.svg"/>
                    </div>

                    <div className={styles.child}>
                        <img src="/browser 8.svg"/>
                        <img src="/browser 5.svg"/>
                    </div>

                    <div className={styles.child}>
                        <img src="/browser 6.svg"/>
                        <img src="/browser 1.svg"/>
                    </div>

                    <div className={styles.child}>
                        <img src="/browser 4.svg"/>
                        <img src="/browser 3.svg"/>
                    </div>

                    <div className={styles.child}>
                        <img src="/browser 7.svg"/>
                        <img src="/browser 9.svg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Digits;