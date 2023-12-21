import React, { useState, useRef } from 'react';
import styles from './my-style.module.css';
import PHOTOcopy from './PHOTOcopy.jpg';

const About = () => {
    const [height, setHeight] = useState(300);
    const difference = 2;
    const intervalRef = useRef(null);

    const increase = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(zoomIn, 10);
    };

    const decrease = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(zoomOut, 10);
    };

    const zoomIn = () => {
        if (height < 350) {
            setHeight((prevHeight) => prevHeight + difference);
        } else {
            clearInterval(intervalRef.current);
        }
    };

    const zoomOut = () => {
        if (height > 300) {
            setHeight((prevHeight) => prevHeight - difference);
        } else {
            clearInterval(intervalRef.current);
        }
    };

    const handleMouseLeave = () => {
        clearInterval(intervalRef.current);
    };

    const handleMouseOut = () => {
        clearInterval(intervalRef.current);
        setHeight(300); // Reset height to the original size
    };

    return (
        <div className={styles.about}>
            <h1 className={styles.xyz1}>About </h1>
            <p className={styles.xyz} >
                <p className= {styles.content}>Hello, Myself Utkarsh Mishra, a first-year undergraduate student at the Department of Electrical Engineering, Indian Institute of Technology, Kharagpur. I am from Ratlam, Madhya Pradesh. I might be a bit talkative sometimes, but trust me I won't speak rubbish 😅. I am delighted that you visited my website. Looking forward to interact with you.</p> 
                <div onMouseOver={increase} onMouseLeave={handleMouseLeave} onMouseOut={handleMouseOut} className={styles.image} id="profile">
                    <img src={PHOTOcopy} alt="photo" height={`${height}px`} />
                </div>
            </p>
        </div>
    );
};

export default About;





