import React from "react";
import styles from './feedback.module.css';


const Section = ({title, children}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.action}>
                <h2 className={styles.title}>{title}</h2>
                {children}
            </div>
        </div>

    )
};


export default Section;


