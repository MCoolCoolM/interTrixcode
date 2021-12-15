import * as React from 'react';
import styles from './styles.module.scss';

const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.logo}>
                    <img src="/logo.svg"/>
                </div>

               <nav className={styles.menu}>
                   <a href="#">
                       Homepages
                   </a>
                   <a href="#">
                       Product
                   </a>
                   <div className={styles.dropdown}>
                       <button className={styles.dropbtn}>
                           Company
                       </button>
                       <div className={styles.dropContent}>
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

                <div className={styles.contacts}>
                    <a href="#">
                        +996999666333
                    </a>
                    <button className={styles.button}>
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