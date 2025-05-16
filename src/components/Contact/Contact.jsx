import styles from './Contact.module.scss';

const Contact = () => {
    return (
        <section className={`${styles.contact} ${styles.container}`}>
            <div className={styles.cont}>
                <h2>Contact Us</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className={styles.grid}>
                <form className={styles.form}>
                    <div>
                        <label className={styles.name}>Name</label>
                        <input
                            type="text"
                            className={styles.nameInput}
                        />
                    </div>
                    <div>
                        <label className={styles.email}>Email</label>
                        <input
                            type="email"
                            className={styles.emailInput}
                        />
                    </div>
                    <div>
                        <label className={styles.message}>Message</label>
                        <textarea
                            rows="4"
                            className={styles.Area}>
                        </textarea>
                    </div>
                    <button
                        type="submit"
                        className={styles.btn}>
                        Submit
                    </button>
                </form>
                <div>
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.966310482777!2d-96.01390372336482!3d41.25716180330595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87938dd9ff645d4d%3A0x2c3eaf246c64689b!2sOmaha%2C%20NE%2C%20USA!5e0!3m2!1sen!2s!4v1670000000000"
                        className={styles.iframe}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </section>
    )
}

export default Contact

