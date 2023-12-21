import React, { useState } from 'react';
import styles from './my-style.module.css';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [mouse, setMouse] = useState(false);


    function Func1() {
        setMouse(true);
    }
    function Func2() {
        setMouse(false);
    }


    function Mymouse() {
        document.getElementById("Naam").style.color = 'black';
    }
    function Myself() {
        document.getElementById("Naam").style.color = 'rgb(119 154 119)';
    }



    return (
        <p className={styles.header} >
            <p className={styles.nav}>
                <p className={styles.nums}>
                    <h3 id="Naam" className={styles.name} onMouseOver={Mymouse} onMouseOut={Myself} >Utkarsh Mishra</h3>
                    <p className={styles.option}
                        style={{ transform: open ? "translateX(0px)" : " " }}>
                        <p className={styles.b1}>
                            <a href="#H1">Achievement</a></p>
                        <p className={styles.b1} ><a href="#H2">Interest</a></p>
                        <p className={styles.b1}><a href="#H3">Project and Skills</a></p>
                        <p className={styles.b1}><a href="#H4">Contact Me</a></p>
                    </p>
                    <i onClick={() => setOpen(!open)}  style={{color: '#759753'}}className={`fa-solid fa-house fa-s  ${styles.burger}`}></i>
                </p>

            </p>

        </p>


    );
}

export default Navbar; 


