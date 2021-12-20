import * as React from 'react';
import styles from './styles.module.scss';

const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.header__headerContainer}>
                <div className={styles.header__headerContainer__logo}>
                    <img src="/logo.svg"/>
                </div>

                <nav className={styles.header__headerContainer__menu}>
                    <a href="#">
                        Homepages
                    </a>
                    <a href="#">
                        Product
                    </a>
                    <div className={styles.header__headerContainer__menu__dropdown}>
                        <button className={styles.header__headerContainer__menu__dropdown__dropbtn}>
                            Company &#9660;
                        </button>
                        <div className={styles.header__headerContainer__menu__dropdown__dropContent}>
                            <a href="#">Homepages</a>
                            <a href="#">Product</a>
                            <a href="#">Pricing</a>
                            <a href="#">Blog</a>
                            <a href="#">Contacts</a>
                        </div>
                    </div>

                    <a href="#">
                        Pricing
                    </a>
                    <a href="#">
                        Blog
                    </a>
                </nav>

                <div className={styles.header__headerContainer__contacts}>
                    <a href="#">
                        +996999666333
                    </a>
                    <button className={styles.header__headerContainer__contacts__button}>
                        <a href="#">
                            Contact Us
                        </a>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header