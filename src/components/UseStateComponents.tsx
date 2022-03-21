import React, {useState} from 'react';

export const UseStateComponents = () => {
    const [count, setCount] = useState(0)
    const [message, setMessage] =useState("You are not even close")

    const changeCount = (operation:any) =>{
        if (operation === "add"){
            if(count<10) setCount(count +1)
            if (count >5 && count <=9) setMessage("You are getting closer")
        } else {
            if (count>0) setCount(count-1)
        }
    }

    const renderBar = () => {
        const bars = [];
        for (let i = 0; i < count; i++) {
            bars.push(
                <div style={{
                    backgroundColor: "green",
                    height: "100%",
                    width: "10%",
                }}>
                </div>)
        }
return bars
    }

    return (
        <div>
            <h1>{message}</h1>
            <div style={{
                border: "0.1rem solid rgba(0,0,0,3)",
                height: "100px",
                width: "80%",
                margin: "2rem auto",
                display: "flex",
            }}>
                {renderBar()}
            </div>
            <button onClick={()=>{changeCount("subtract")}}>Subtract Bar</button>
            <button onClick={()=>{changeCount ("add")}}>Add Bar</button>
        </div>
    );
};

