import React from "react";
import styles from './my-style.module.css';
import facebook from './facebook.jpg'
import linkedin from './linkedin.jpg';
import gmail from './gmail.jpg';
import instagram from './instagram.jpg';


const Footer = () => {


    return (
        <footer>
            <div className={styles.ContactMe} id="H4">
                <h1 className={styles.contact}>Contact Me</h1>
                <div className={styles.box1}>
                    <a href="https://www.facebook.com/profile.php?id=100095221617672" target="main"><img src={facebook}
                        height="80" /></a>
                    <a href="https://www.linkedin.com/in/utkarsh-mishra-a23539289/" target="main"><img src={linkedin}
                        height="80" /></a>
                    <a href="https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=utmmishra2005@gmail.com&hl=en-GB" target="main"><img src={gmail} height="80" /></a>
                    <a href="https://instagram.com/utkarshmishra25125?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr"
                        target="main"><img src={instagram} height="80" /></a>
                </div>
            </div>



            <div className={styles.foot}>
                <p> All rights reserved &copy; 2023 </p>
            </div>
        </footer>

    )
}

export default Footer;