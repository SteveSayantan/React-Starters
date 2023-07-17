import React from "react";

/* This is not included in the original project. The toggle functionality is different in this one */

const Tour=({id,image,info,price,name,removeTour,expandedCard,setExpandedCard})=>{

    const handleToggle=(id)=>{
        setExpandedCard((prev)=>{
            if(prev==id) return null;
            return id;
        })
    }
    return <li className="single-tour">
        <img src={image} alt={name} />
        <footer>
            <div className="tour-info">
                <h4>{name}</h4>
                <h4 className="tour-price">${price}</h4>
            </div>
            <p>{id==expandedCard?info:`${info.substring(0,200)}...`}
            <button onClick={()=>handleToggle(id)}>{id==expandedCard?"show less":"read more"}</button>
            </p>
            <button className="delete-btn" onClick={()=>removeTour(id)}>not interested</button>
        </footer>
    </li>
}
export default Tour;