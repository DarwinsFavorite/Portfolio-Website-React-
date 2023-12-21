import React, { useState, useRef } from 'react';
import styles from './my-style.module.css';

const Achievement = () => {
    return (
        <div className={styles.arch} id="H1">
            <h2 className={styles.achieve}>Achievement</h2>
            <ul className={styles.Achievement}>
                <li>JEE Mains AIR-5800</li>
                <li>JEE Advanced AIR-2200</li>
                <li><a href="http://127.0.0.1:5501/medal1.jpg" target="main"> Division level NCC Debate Gold Medalist</a> </li>
                <li><a href="http://127.0.0.1:5501/UTKARSH%20CLASS%2012%20copy_page-0001.jpg" target="main">96.4% in CBSE Class 12</a> </li>
            </ul>

        </div>
    )
}


export default Achievement;