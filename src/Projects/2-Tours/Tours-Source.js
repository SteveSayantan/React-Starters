import React, { useEffect, useState } from 'react';
import Loading from './loading';
import Tours from './Tours';


const url = 'https://course-api.com/react-tours-project';

const TourComponent=()=>{
    const [loading,setLoading]=useState(true);
    const [tours,setTours]=useState([]);

    const removeTour=(id)=>{            //This function should be passed to each tour component. We would do that with the help of props (This method is known as props drilling where we have to pass a state value or a function from top component to the bottom component) 
        const newTours= tours.filter((tour)=>tour.id!=id)
        setTours(newTours);
    }

    useEffect(()=>fetchData,[]);
    
    const fetchData= async ()=>{
        try {
            setLoading(true);
            const response= await fetch(url);
            const data= await response.json();
            setLoading(false); 
            setTours(data);
            // console.log(data);
        } catch (error) {
            setLoading(false);
           console.log(error); 
        }
    }

    
    if(loading){
        return <main><Loading/></main>;
    } 

    if(tours.length==0){
        return <main>
            <div className="title">
                <h2>no tours left</h2>
                <button className='btn' onClick={fetchData}>Refresh</button>
            </div>
        </main>
    }
    return <main>
        <Tours tours={tours} removeTour={removeTour}></Tours>
    </main> 
}
export default TourComponent;