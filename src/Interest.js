import React, { useState, useRef } from 'react';
import styles from './my-style.module.css';

const Interest = () => {
    const Robotics =() =>{
        alert("My interest in robotics developed from class 8, from then I made a few easy projects and would love to pursue robotics as my career option");

    }

    const Data= () => {
        alert("Interest in Machine Learning is very recent. I have to explore this field a lot before opening it as a carrer options");
    }

    const Music = () =>{
        alert("Since childhood I was keen interested in Music therefore I learnt Table and later I also started to play Cajon. Moreover, I love dancing!")
    }
    const Cricket = () =>{
        alert("Since, I am born in India, I played cricket since childhood.Also, interest in swimming got enhanced when I came to IIT Kharagpur.")
    }

    
    

    return (
        <div className={styles.Interest}  id="H2">
            <h2 className={styles.xyz3}>Interest</h2>
            <div className={styles.xyz4}>
                <p onMouseOver={Robotics} >Robotics</p>

                <p onMouseOver={Data} >ML, AI and Data Science</p>
                <p onMouseOver={Music}>Music , Dance and Acting</p>
                <p onMouseOver={Cricket}>Swimming and Cricket</p>
            </div>
        </div>
    )
}

export default Interest;