import styles from './Banner.module.scss';
import left from '../../assets/images/Group.png';
const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className="container">
                <div className={styles.left}>
                    <h6>WELCOME</h6>
                    <h2>Lorem ipsum dolor sit amet consectetur </h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?
                    </p>
                    <button className={styles.btn}>Explore</button>
                </div>
                <img src={left} alt="" />
            </div>
        </div>
    )
}

export default Banner