import styles from './Header.module.scss';
import logo from '../../assets/images/logo.png';
function Header() {
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
        </div>
    </header>;
}

export default Header
