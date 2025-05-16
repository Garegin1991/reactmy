import styles from './Header.module.scss';
import logo from '../../assets/images/logo.png';
import MenuIcon from '../../Icons/MenuIcon';
import { useState } from 'react';
function Header() {
    const [menuState, setMenuState] = useState(false)
    return <header >
        <div className={styles.container}>
            <a href="" className={styles.logo}>
                <img src={logo} alt="Logo" />Start
            </a>
            <nav className={styles.navbar}>
                <a href="#home">Home</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
            </nav>
            <div className={styles.mobile_menu}>
                <button className={styles.btn} onClick={() => { setMenuState(!menuState) }}>
                    <MenuIcon size={40} isOpen={menuState}/>
                </button>
                <div style={{ right: menuState ? '0' : "-100%" }} className={styles.menu_block}>
                    <nav className={styles.navbar_mobile}>
                        <a href="#home">Home</a>
                        <a href="#portfolio">Portfolio</a>
                        <a href="#services">Services</a>
                        <a href="#contact">Contact</a>
                    </nav>
                </div>
            </div>
        </div>

    </header>;
}

export default Header
