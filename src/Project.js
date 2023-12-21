
import React, { useState, useRef } from 'react';
import styles from './my-style.module.css';


const Project = () => {










    return (
        <div className={styles.final} id="H3" >
            <div className={styles.Project}>
                <h2 className={styles.pro}>Projects</h2>
                <div className={styles.box2}>
                    <div className={styles.Car} ><a href="http://127.0.0.1:5501/car.jpg" target="main"> Teamcart RC car</a></div>
                    <div><a href="http://127.0.0.1:5501/linefollow.MP4" target="main">Line following bot[Winner]</a></div>
                    <div>Large scale tesla tower</div>
                    <div>Organised many inter school events</div>
                </div>
            </div>
            <div className={styles.skills}>
                <h2 className={styles.ski}>Skills</h2>
                <div className={styles.box3}>
                    <p> C++, JavaScript, React JS</p>

                    <p>Management Skills</p>
                    <p>Writing and acting Humorous sketch</p>
                    <p>Play Musical Instrument Cajon</p>
                </div>
            </div>
        </div>
    )


}

export default Project;

