import * as React from 'react';
import styles from './styles.module.scss';

const Comments = () => {
    return (
        <div className={styles.comments}>
            <div className={styles.commentsContainer}>

                <section className={styles.section}>
                    <div className={styles.info}>
                        What others are saying
                    </div>

                    <div className={styles.rectangle}>
                        <div>
                            <div className={styles.txt1}>
                                Completely beautiful website and amazing support! This is my second website from this
                                author and I love both of the sites so much and she has helped me so well when I needed
                                it!
                            </div>

                            <div className={styles.comments1}>
                                <img src="Rectangle 8.svg"/>
                            </div>

                            <div className={styles.img1}>
                                <img src="image 5.svg"/>
                            </div>

                            <div className={styles.user1}>
                                Happy User
                            </div>

                            <div className={styles.club1}>
                                <a href="#">
                                    tempy.club
                                </a>
                            </div>
                        </div>

                        <div>
                            <div className={styles.txt2}>
                                Really easy to use and customize. easy to understand. Darinka helped me with my site!
                                She
                                answers very quickly, a good service! Thank you very much!
                            </div>

                            <div className={styles.comments2}>
                                <img src="Rectangle 8.svg"/>
                            </div>

                            <div className={styles.img2}>
                                <img src="image 6.svg"/>
                            </div>

                            <div className={styles.user2}>
                                Happy User
                            </div>

                            <div className={styles.club1}>
                                <a href="#">
                                    tempy.club
                                </a>
                            </div>
                        </div>

                        <div>
                            <div className={styles.txt3}>
                                Really pleasing to look at! Documentation (including installation instructions) are
                                clear and that is coming from a relatively new WordPress user.
                            </div>

                            <div className={styles.comments3}>
                                <img src="Rectangle 8.svg"/>
                            </div>

                            <div className={styles.img3}>
                                <img src="image 7.svg"/>
                            </div>

                            <div className={styles.user3}>
                                Happy User
                            </div>

                            <div className={styles.club3}>
                                <a href="#">
                                    tempy.club
                                </a>
                            </div>
                        </div>

                    </div>
                </section>

            </div>
        </div>
    )
}

export default Comments;