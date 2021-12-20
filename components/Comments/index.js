import * as React from 'react';
import styles from './styles.module.scss';

const Comments = () => {
    return (
        <div className={styles.comments}>
            <div className={styles.comments__commentsContainer}>
                <section className={styles.comments__commentsContainer__section}>
                    <div className={styles.comments__commentsContainer__section__info}>
                        What others are saying
                    </div>

                    <div className={styles.comments__commentsContainer__section__rectangle}>
                        <div>
                            <div className={styles.comments__commentsContainer__section__rectangle__txt1}>
                                Completely beautiful website and amazing support! This is my second website from this
                                author and I love both of the sites so much and she has helped me so well when I needed
                                it!
                            </div>

                            <div className={styles.comments__commentsContainer__section__rectangle__comments1}>
                                <img src="Rectangle 8.svg"/>
                            </div>

                            <div className={styles.comments__commentsContainer__section__rectangle__img1}>
                                <img src="image 5.svg"/>
                            </div>

                            <div className={styles.comments__commentsContainer__section__rectangle__user1}>
                                Happy User
                            </div>

                            <div className={styles.comments__commentsContainer__section__rectangle__club1}>
                                <a href="#">
                                    tempy.club
                                </a>
                            </div>
                        </div>

                        <div>
                            <div className={styles.comments__commentsContainer__section__rectangle__txt2}>
                                Really easy to use and customize. easy to understand. Darinka helped me with my site!
                                She
                                answers very quickly, a good service! Thank you very much!
                            </div>

                            <div className={styles.comments__commentsContainer__section__rectangle__comments2}>
                                <img src="Rectangle 8.svg"/>
                            </div>

                            <div className={styles.comments__commentsContainer__section__rectangle__img2}>
                                <img src="image 6.svg"/>
                            </div>

                            <div className={styles.comments__commentsContainer__section__rectangle__user2}>
                                Happy User
                            </div>

                            <div className={styles.comments__commentsContainer__section__rectangle__club1}>
                                <a href="#">
                                    tempy.club
                                </a>
                            </div>
                        </div>

                        <div>
                            <div className={styles.comments__commentsContainer__section__rectangle__txt3}>
                                Really pleasing to look at! Documentation (including installation instructions) are
                                clear and that is coming from a relatively new WordPress user.
                            </div>

                            <div className={styles.comments__commentsContainer__section__rectangle__comments3}>
                                <img src="Rectangle 8.svg"/>
                            </div>

                            <div className={styles.comments__commentsContainer__section__rectangle__img3}>
                                <img src="image 7.svg"/>
                            </div>

                            <div className={styles.comments__commentsContainer__section__rectangle__user3}>
                                Happy User
                            </div>

                            <div className={styles.comments__commentsContainer__section__rectangle__club3}>
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