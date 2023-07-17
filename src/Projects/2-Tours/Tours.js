import React, { useState } from "react";
import Tour from "./tour";

const Tours=({tours,removeTour})=>{

    // const[expandedCard,setExpandedCard]= useState(null)      // To be used with tour-toggle only. Provide as prop to the Tour component.

   
    return <section>
        <div className="title">
            <h2>Our Tours</h2>
            <div className="underline"></div>
        </div>
        <ul>
            {tours.map((tour)=><Tour key={tour.id} {...tour} removeTour={removeTour} />)}
        </ul>
    </section>
    
}
export default Tours;