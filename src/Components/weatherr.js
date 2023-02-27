import React, { useEffect, useState } from 'react';
import "./weather.css"
const Wheather=()=>{
   const [find,setfind]=useState()
   const [data,setdata]=useState("")
   const [city,setcity]=useState("")
   const [dis,setdis]=useState(false)
   const [arr,setarr]=useState([])
     const handle=()=>{
       
        const dd= fetch(`https://api.openweathermap.org/data/2.5/weather/?q=${find}&appid=4f8810298135f1d47c997230b9210cf4`)
        .then((res)=>{return res.json()}).then((final)=>{
           setdata(final.main)
           setcity(final)
           setdis(true)
           setfind("")
           setarr([...arr,find])
           if(arr.length===3){
            setarr("")
           }
        }).catch((err)=>{
            console.log(err)
        })
          }

      useEffect=(()=>{
        handle()
      },[])
     
      console.log(city.humidity)
    return(
        <div id="main">
             
             <h1 id="head">Weather App</h1>
           <input id="input" type="text" onChange={(event)=>{setfind(event.target.value)}} value={find} placeholder="Enter City name" />
           <button  id="button" onClick={handle} >Search</button>

            
          {dis ? 
          <div>
           <div id="dataone">
           <div className="tt">1. Weather detail of City : {city.name}</div>
          <div className="tt">2. Current Temperature : {data.temp} </div>
          <div className="tt">3. Temperature Range : {data.temp_max} to {data.temp_min} </div>
          <div className="tt">4. Humidity: {data.humidity} </div>
          <div className="tt">5. Sealevel : {data.pressure}  </div>
          <div className="tt">6. Groundlevel : {data.feels_like} </div>
          
          </div>
          <h2 id="head1">Last three cities entries</h2>
          <h4 id="cc">{arr}</h4>
          </div>
          : " " }
            
          
        </div>
    )
}
export default Wheather