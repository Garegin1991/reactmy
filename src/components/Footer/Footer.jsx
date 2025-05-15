import React from 'react'
import styles from './Footer.module.scss'


import facebook from '../../assets/images/fbook.png'
import instagram from '../../assets/images/instagram.png'
import twitter from '../../assets/images/twitter.png'
import pinterest from '../../assets/images/pinterest.png'
import tiktok from '../../assets/images/tiktok.png'
import viber from '../../assets/images/viber.png'
import youtube from '../../assets/images/youtube.png'

function Footer() {
  return  <footer>
      <div className={styles.container}>
      <nav className={styles.footbar}>
        <a href="#"><img src={facebook} alt='Facebook' /></a>
        <a href="#"><img src={instagram} alt='Instagram' /></a>
        <a href="#"><img src={twitter} alt='Twitter' /></a>
        <a href="#"><img src={pinterest} alt='Pinterest' /></a>
        <a href="#"><img src={tiktok} alt='TikTok' /></a>
        <a href="#"><img src={viber} alt='Viber' /></a>
        <a href="#"><img src={youtube} alt='YouTube' /></a>
      </nav>
      <p>© Start, 2022. All rights reserved.</p>
      </div>
    </footer>
  
}

export default Footer
