import styles from './Team.module.scss';
import ceo from '../../assets/images/ceo.png';
import cto from '../../assets/images/cto.png';
import designer from '../../assets/images/designer.png';
import dev from '../../assets/images/dev.png';

const Team = () => {
    return (
        <section className={`${styles.team} ${styles.container}`}>
            <h5>Team</h5>
            <h2>Our Talants</h2>
            <p>Lorem ipsum, dolor sit amet consectetur
                Suscipit nemo hic quos, ab,</p>

            <div className={styles.teams}>
                <div className={styles.card}>
                    <img src={ceo} alt="Google" />
                    <div className={styles.about}>
                        <h4>Peg Legge</h4>
                        <span>CEO</span>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src={cto} alt="Google" />
                    <div className={styles.about}>
                        <h4>Richard Guerra</h4>
                        <span>CTO</span>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src={designer} alt="Google" />
                    <div className={styles.about}>
                        <h4>Alexandra Stolz</h4>
                        <span>DESIGNER</span>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src={dev} alt="Google" />
                    <div className={styles.about}>
                        <h4>Janet Bray</h4>
                        <span>DEVELOPER</span>
                    </div>
                </div>
            </div>
            <button>Learn More</button>
        </section>
    )
}

export default Team