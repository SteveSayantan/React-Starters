import React,{useState,useEffect} from "react";

const SingleColor=({rgb,weight,index,hexColor})=>{
    const[alert,setAlert]=useState(false);

    const copyToClipBoard=()=>{
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
    }

    useEffect(()=>{
        let clear=setTimeout(setAlert,3000,false);
        return ()=>clearTimeout(clear);
    },[alert])

    const bcg= rgb.join(',');   // this rgb is basically an array containing r g b values, we join them to form a string .
    const hexValue=`#${hexColor}`

    return<article onClick={copyToClipBoard} className={`color ${index>10 && 'color-light'}`} style={{backgroundColor:`rgb(${bcg})`}}>
        <p className="percent-value">{weight}%</p>
        <p className="color-value">{hexValue}</p>
        {alert && <p className="alert">copied to clipboard</p> }
    </article>
}

export default SingleColor;