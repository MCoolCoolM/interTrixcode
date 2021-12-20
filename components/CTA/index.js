import * as React from 'react';
import styles from './styles.module.scss';

const CTA = () => {
    return (
        <div className={styles.cta}>
            <div className={styles.cta__ctaContainer}>
                <div className={styles.cta__ctaContainer__info}>
                    Ready to launch
                    your next website?
                </div>
                <div className={styles.cta__ctaContainer__additional}>
                    <button className={styles.cta__ctaContainer__additional__btn}>
                        <img className={styles.cta__ctaContainer__additional__btn__img} src="/Group.svg"/>
                            Get in touch now
                    </button>
                    <span className={styles.cta__ctaContainer__additional__span}>
                        Or, take a peek inside our
                        <a className={styles.cta__ctaContainer__additional__span__a} href="#">
                            design studio
                        </a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CTA;