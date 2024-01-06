import React from "react";
import styles from './feedback.module.css'

const Notification = ({ message }) => {
    return (
         <div className={styles.result}>
           <p className={styles.text}>{message}</p>
        </div>)
       
};
export default Notification;