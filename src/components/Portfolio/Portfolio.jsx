
import styles from './Portfolio.module.scss';
import geometric from '../../assets/images/portfolio/geometric.png'
import halowen from '../../assets/images/portfolio/halowen.png'
import landing from '../../assets/images/portfolio/landing.png'
import rocket from '../../assets/images/portfolio/rocket.png'
import shoping from '../../assets/images/portfolio/shoping.png'
import trick from '../../assets/images/portfolio/trick.png'
import virtual from '../../assets/images/portfolio/virtual.png'
import webDesign from '../../assets/images/portfolio/webDesign.png'
const Portfolio = () => {
    return (

        <section className={`${styles.portfolio} ${styles.container}`}>
            <div>
                <h5>Works</h5>
                <h2>Portfolio</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
             <div className={styles.images}>
                    <img src={landing} alt=''/>
                    <img src={webDesign} alt=''/>
                    <img src={rocket} alt=''/>
                    <img src={shoping} alt=''/>
                    <img src={geometric} alt=''/>
                    <img src={trick} alt=''/>
                    <img src={halowen} alt=''/>
                    <img src={virtual} alt=''/>
             </div>
                  <button>Learn More</button>
        </section>
    )
}

export default Portfolio