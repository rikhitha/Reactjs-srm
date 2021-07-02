import React ,{useEffect,useState} from 'react'

import Datetime from 'react-datetime';

import Moment from 'react-moment';

import "react-datetime/css/react-datetime.css";

import styles from './DateTimeStyle.module.css'; 

export default function DateTime() 
{
    const[date,setdate]=useState(
        {
            
            ts:new Date(),
            uname:"Rikhitha Manoj"

            
            

        }
    );
    
    return (
        <div>
            
            <div class="w3-container w3-black">
            <h3 className={styles.user}>UserName: {date.uname}</h3>
            <h3 className={styles.datepic}>{date.ts.toString()}</h3>
            <h2 className={styles.datepic}>Date & Time :<Datetime /></h2>
            </div>
        </div>
    )
}
