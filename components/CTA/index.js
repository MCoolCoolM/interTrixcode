import * as React from 'react';
import styles from './styles.module.scss';

const CTA = () => {
    return (
        <div className={styles.cta}>
            <div className={styles.ctaContainer}>
                <div className={styles.info}>
                    Ready to launch
                    your next website?
                </div>
                <div className={styles.additional}>
                    <button className={styles.btn}>
                        <img className={styles.img} src="/Group.svg"/>
                            Get in touch now
                    </button>
                    <span className={styles.span}>
                        Or, take a peek inside our
                        <a className={styles.a} href="#">
                            design studio
                        </a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CTA;