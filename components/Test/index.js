import * as React from 'react';
import styles from './styles.module.scss';

const Test = () => {
    return (
        <div className={styles.test}>
            <div className={styles.testContainer}>
                <div className={styles.image}>
                    <div className={styles.block}>
                        <img src="browser 2.svg"/>
                        <img src="browser 11.svg"/>
                        <img src="browser 10.svg"/>
                    </div>

                    <div className={styles.block}>
                        <img src="browser 8.svg"/>
                        <img src="browser 5.svg"/>
                    </div>

                    <div className={styles.block}>
                        <img src="browser 6.svg"/>
                        <img src="browser 1.svg"/>
                    </div>

                    <div className={styles.block}>
                        <img src="browser 4.svg"/>
                        <img src="browser 3.svg"/>
                    </div>

                    <div className={styles.block}>
                        <img src="browser 7.svg"/>
                        <img src="browser 9.svg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Test;