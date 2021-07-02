import React,{ useState, useEffect } from 'react'

export default function WeatherReport()
 
{
    const [data, setData] = useState({
        
        today:new Date(),
        Precipitation: 20,
        Humidity: 81,
        Wind: 16
       });
    return (
        <div class="w3-container w3-teal">
            <center>
        <h2>Today date::{data.today.toString()}</h2>
        <h2>Precipitation::{data.Precipitation}%</h2>
        <h2>Humidity::{data.Humidity}%</h2>
       <h2>Wind::{data.Wind}km/h</h2>
       </center>
        </div>
        //09382169b8d7f286379aa8e2081e76ed
        
    )
}
