import React from 'react';
import styles from './my-style.module.css';

const TeamcartPopup = ({ onClose }) => {
  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        <span className={styles.close} onClick={onClose}>&times;</span>
        <p>This is the Teamcart Popup content.</p>
        
      </div>
    </div>
  );
};

export default TeamcartPopup;