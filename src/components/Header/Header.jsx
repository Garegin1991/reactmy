import styles from './Header.module.scss';
import logo from '../../assets/images/logo.png';
import MenuIcon from '../../Icons/MenuIcon';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Header() {
    const [menuState, setMenuState] = useState(false)
    return <header >
        <div className={styles.container}>
            <Link to="/" className={styles.logo}>
                <img src={logo} alt="Logo" />Start
            </Link>
            <nav className={styles.navbar}>
                <Link to="/">Home</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            <div className={styles.mobile_menu}>
                <button className={styles.btn} onClick={() => { setMenuState(!menuState) }}>
                    <MenuIcon size={40} isOpen={menuState} />
                </button>
                <div style={{ right: menuState ? '0' : "-100%" }} className={styles.menu_block}>
                    <nav className={styles.navbar_mobile}>
                        <Link to="/">Home</Link>
                        <Link to="/portfolio">Portfolio</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/contact">Contact</Link>
                    </nav>
                </div>
            </div>
        </div>

    </header>;
}

export default Header
