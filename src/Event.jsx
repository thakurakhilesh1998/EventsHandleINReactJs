import React, { useState } from 'react';
import './index.css';


const Event=()=>{

    let color="yellow";
    let message="Click Me 😄";
    const [bg,setBg]=useState(color);
    const [msg,setMsg]=useState(message);
    const bgChange=()=>
    {
        color="purple";
        message="You cliked wow ❤️"
        setMsg(message);
        setBg(color);
    }
    const onDoubleClick=()=>
    {
        message="You clicked 👍"
        setMsg(message);
        color="red";
        setBg(color);
    }
    return (
        <>
            <div id="clickme" style={{backgroundColor:bg}}>
                <button onClick={bgChange} onDoubleClick={onDoubleClick}>{msg}</button>
            </div>
        </>
    );
}

export {Event};