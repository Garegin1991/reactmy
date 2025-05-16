import styles from './MenuIcon.module.scss'

const MenuIcon = ({ size = 40, isOpen = false }) => {
    return (
        <svg className={styles.menu}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {isOpen ? (
                // CLOSE ICON — X
                <path
                    d="M6 6L18 18M6 18L18 6"
                    stroke=""
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            ) : (
                // MENU ICON — 3 lines
                <path
                    d="M4 6H20M4 12H20M4 18H20"
                    stroke=""
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            )}
        </svg>
    );
};




export default MenuIcon;
