import React, {useState} from "react";

export const UseStateComponents = () => {
    let [count, setCount]=useState("0")

    let renderBar = () =>{
const bars = [];
        for(let i=0; i < count; i++) {

        }
    }

    return (
        <div>
            <h1>Use State</h1>
            <div style={{
                border: "2px solid green",
                height:"100px",
                width:"800px",
                margin: "10px auto",
                display: "flex"
            }}>
                <div style={{
                    height: "100px",
                    width: "100px",
                    backgroundColor: "red"
                }}>


                </div>

            </div>
        </div>

    )
}


