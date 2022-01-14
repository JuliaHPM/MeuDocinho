import React from "react";

export default function Input(props){
    return (
        <input placeholder={props.placeholder} className={"input mt-3"} type={props.type}></input>
    )
}