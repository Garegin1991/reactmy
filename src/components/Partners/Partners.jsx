import styles from './Partners.module.scss';
import google from '../../assets/images/google.png';
import microsoft from '../../assets/images/microsoft.png';
import airbnb from '../../assets/images/airbnb.png';
import facebook from '../../assets/images/facebook.png';
import spotify from '../../assets/images/spotify.png';
import image1 from '../../assets/images/Group (2).png';
import image2 from '../../assets/images/Group (3).png';

const Partners = () => {
    return (
        <section className={`${styles.partners} ${styles.container}`}>
            <h5>PARTNERS</h5>
            <h2>Lorem Ipsum Dolor</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

            <div className={styles.logos}>
                <img src={google} alt="Google" />
                <img src={microsoft} alt="Microsoft" />
                <img src={airbnb} alt="Airbnb" />
                <img src={facebook} alt="Facebook" />
                <img src={spotify} alt="Spotify" />
            </div>
            <button>Learn More</button>

            <div className={`${styles.container} ${styles.cards}`}>

                <div className={styles.card}>
                    <img src={image1} alt="Man with laptop" />
                    <div className={styles.desc}>
                        <h3>Lorem ipsum dolor sit amet consectetur</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
                        <button>Learn More</button>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.desc}>
                        <h3>Lorem ipsum dolor sit amet consectetur</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
                        <button>Learn More</button>
                    </div>
                    <img src={image2} alt="Man with laptop" />
                </div>

            </div>
        </section>
    );
};

export default Partners;
