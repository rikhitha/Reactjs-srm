import React from 'react';

import styles from './DateTimeStyle.module.css'; 

export default function ErrorMessage({message}) {
    return (
        <div >
            { 
                message &&  <span className={styles.error}>{message}</span> 
            }
        </div>
    )
}
