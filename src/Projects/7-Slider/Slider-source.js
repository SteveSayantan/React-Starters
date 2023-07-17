import React, { useEffect, useState } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import Review from './review';
import data from './data';
import people from './data';

function Slider(){
    const[index,setIndex]=useState(2);

    useEffect(function(){
       if(index<0)setIndex(data.length-1);
       if(index==data.length) setIndex(0); 
    },[index])


    useEffect(()=>{
     let clearSlider=setInterval(setIndex,3000,(index-1)); 

        return ()=>clearInterval(clearSlider); //This cleanUp function is crucial. Without it, for each change in the index there would be a setInterval function added, which will break the functionality.
    },[index])

    return <section className="section">
        <div className="title">
           <h2>
            <span>/</span>reviews   
            </h2> 
        </div>
        <div className="section-center">
          {
              data.map((people,peopleIndex)=>{
                
                let position='nextSlide';

                if(peopleIndex==index) position='activeSlide';
                
                if(peopleIndex==index-1||(index==0 && peopleIndex== data.length-1 )) position='lastSlide';

                return <Review key={people.id} position={position} {...people}/>
              })
          }
          <button className="prev" onClick={()=>setIndex(index-1)}><FiChevronLeft/></button> 
          <button className="next" onClick={()=>setIndex(index+1)}><FiChevronRight/></button> 
        </div>
    </section>
}

export default Slider;