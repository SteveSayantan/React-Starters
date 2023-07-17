import React, { useState } from "react";

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
//These are React-icons (SVG). We have to install react-icons package to use them. They can be imported as a component and thereafter they can be used as shown.

import data from "./data";


function Review(){
    const [index,setIndex]=useState(0);
    const{name,job,image,text}=data[index];


    const nextPerson=()=>{
        setIndex((value)=>{
            value++;
            return value%data.length;
        })
    }

    const prevPerson=()=>{
        setIndex((value)=>{
            value--;
            return value<0? data.length+value:value;
        })
    }
    
    const randomPerson=()=>{
        let newValue= Math.floor(data.length*Math.random());
        setIndex((value)=>{
           return newValue==value?(value<data.length-1?value+1:value-1):newValue;
        })
    }
    
    return <article className="review">
        <div className="img-container">
            <img src={image} alt={name} className="person-img" />
            <span className="quote-icon">
                <FaQuoteRight/>
            </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={prevPerson}>
                   <FaChevronLeft/>
                </button>
                <button className="next-btn" onClick={nextPerson}>
                   <FaChevronRight/>
                </button>
                </div>
            <button className="random-btn" onClick={randomPerson}>surprise me</button>
        </article>
}

export default Review;