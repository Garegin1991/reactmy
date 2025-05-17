import { useEffect } from 'react';
import styles from './Contact.module.scss';



const Contact = () => {
    const classes = (...classnNames) => {
        console.log(classnNames.join(" "));
        return classnNames.join(" ")
    }

    return (
        <section className={classes("container", styles.contact)}>
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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10294.515758056246!2d43.8430187!3d40.7894758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4041b834b8f7c0e5%3A0x8e1b403b569bdf49!2sGyumri%2C%20Armenia!5e0!3m2!1sen!2s!4v1680000000000"

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

