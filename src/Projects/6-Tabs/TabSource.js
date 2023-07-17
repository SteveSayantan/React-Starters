import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'


function Tabs(){
    const[jobs,setJobs]=useState([])
    const [loading,setLoading]=useState(true);
    const [value,setValue]=useState(0);

   async function fetchJob(){
        setLoading(true);
        const resp= await fetch(url);
        const jobs= await resp.json();
        setJobs(jobs);
        setLoading(false);
   }

   useEffect(()=>{fetchJob()},[]);

   if(loading){
       return <section className="section loading">
           <h1>loading...</h1>
       </section> 
   }
   const {company,dates,duties,title}=jobs[value]; //If we move this to line 21 (before loading), it will result in an error as initially jobs is an empty array
   return <section className="section">
       <div className="title">
           <h2>experience</h2>
           <div className="underline"></div>
       </div>
       <div className="jobs-center">
           <div className="btn-container">
               {jobs.map((item,index)=>{
                   return <button key={item.id} onClick={()=>setValue(index)} className={`job-btn ${index==value && 'active-btn' }`//If the index is equal to the current value, it adds the active-btn class otherwise adds false to the classlist . We must use template literals to convert the boolean value (returned from expression) into string.
                }> 
                    {item.company}
                    </button>
               })}
           </div>
           <article className="job-info">
               <h3>{title}</h3>
               <h4>{company}</h4>
               <p className='job-date'>{dates}</p>
               {duties.map((duty,index)=>{
                   return <div key={index} className="job-desc">
                       <FaAngleDoubleRight className='job-icon'/>
                       <p>{duty}</p>
                   </div>
               })}
           </article>
           

       </div>
   </section>

}

export default Tabs;