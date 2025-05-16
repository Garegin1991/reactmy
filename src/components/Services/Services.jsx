import styles from './Services.module.scss';

const Services = () => {
    return (
        <section className={`${styles.services} ${styles.container}`}>
            <div>
                <h5>Plans</h5>
                <h2>Our Services</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className={styles.cards}>
            <div className={styles.card}>
                <h3>Basic</h3>
                <div className={styles.price}>$100 <span className={styles.month}>/month</span></div>
                <div className={styles.description}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam
                </div>
                <ul className={styles.features}>
                    <li>Lorem ipsum, dolor sit</li>
                    <li>Lorem ipsum, dolor sit</li>
                    <li>Lorem ipsum, dolor sit</li>
                    <li>Lorem ipsum, dolor sit</li>
                    <li>Lorem ipsum, dolor sit</li>
                </ul>
                <button className={styles.btn}>Learn More</button>
            </div>
            <div className={styles.card}>
                <h3>Plus</h3>
                <div className={styles.price}>$250 <span className={styles.month}>/month</span></div>
                <div className={styles.description}>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam
                </div>
                <ul className={styles.features}>
                    <li>Lorem ipsum, dolor sit</li>
                    <li>Lorem ipsum, dolor sit</li>
                    <li>Lorem ipsum, dolor sit</li>
                    <li>Lorem ipsum, dolor sit</li>
                    <li>Lorem ipsum, dolor sit</li>
                </ul>
                <button className={styles.btn}>Learn More</button>
            </div>
            <div className={styles.card}>
                <h3>Pro</h3>
                <div className={styles.price}>$400 <span className={styles.month}>/month</span></div>
                <div className={styles.description}>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam
                </div>
                <ul className={styles.features}>
                    <li>Lorem ipsum, dolor sit</li>
                    <li>Lorem ipsum, dolor sit</li>
                    <li>Lorem ipsum, dolor sit</li>
                    <li>Lorem ipsum, dolor sit</li>
                    <li>Lorem ipsum, dolor sit</li>
                </ul>
                <button className={styles.btn}>Learn More</button>
            </div>
            </div>
        </section>
    )
}

export default Services;
