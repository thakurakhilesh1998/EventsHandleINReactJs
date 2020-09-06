import React, { useState } from 'react';
import {Event} from './Event';

const App=()=>{

    let time=new Date().toLocaleTimeString();
    let [cTime,setTime]=useState(time);

    

    const upDateTime=()=>
    {
        console.log("new time");
        setTime(new Date().toLocaleTimeString());
    }
    setInterval(upDateTime,1000);
    return(
        <>
        <h1 className="currentDate">Current Time is :{cTime}</h1>
        <Event/>
        </>
    );
}

export {App};