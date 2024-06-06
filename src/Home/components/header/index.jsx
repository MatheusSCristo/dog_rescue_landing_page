import React from 'react';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import styles from './style.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.text_container}>
            <h1>DOG</h1>
            <img src='/logo/rescue_dog_logo.jpg' alt='logo' />
            <h1>RESCUE</h1>
        </div>
        <div className={styles.icon_container}>
            <FaLinkedinIn size={25}/>
            <FaFacebookF size={25}/>
            <FaXTwitter size={25}/>
            <RiInstagramFill size={25}/>
        </div>
    </div>
  )
}

export default Header