import React,{useState,useEffect} from 'react'
import { dataService } from './Services/DataService';

export default function University() {

    const [value,setValue]=useState({});

    useEffect(()=>
    {
        dataService.getMessage().subscribe(x=>
            {
                setValue(x);
            });
    },[value]
    )
    return (
        <div>
            <h3>University</h3>
            <h1>{JSON.stringify(value)}</h1>

        </div>
    )
}
