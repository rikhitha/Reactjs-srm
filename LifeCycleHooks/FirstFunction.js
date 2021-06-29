import React,{useEffect, useState} from 'react'

export default function FirstFunction({color}) {

    const[values,setValues]=useState(
        {
            multiples:0,
            value2:0,
            ts:new Date(),
            value1 :"chennai",
            color:color,

        }
    );
    
     
    const[value2,setValue2]=useState(5);
    const handleButtonOnCLick =() =>
    {
          console.log("button clicked");
          setValues((prev) =>
          {
              return {
                  ...prev,
                  multiples:prev.multiples+2,
              };
          }

          );
          console.log(values);
    };

    useEffect(() =>
    {
        console.log("constructor /update useEffect");
        setValues((prev)=>
        {
            return {
                ...prev,
                value1:"value1 changed in useEffect".concat(Math.random()),

            };
        }
        );
        
    },[value2,values.multiples])

    return (
        <div>
            <h1>React Life Cyclehook(Function)</h1>
                <br>
                </br>
                
                <h3>Multiples::: {values.multiples}</h3>
                <h3>Date::: {values.ts.toString()}</h3> 
                <button onClick={handleButtonOnCLick}>Update count</button>
        </div>
    )
}
