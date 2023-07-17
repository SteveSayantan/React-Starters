import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'

function Pagination() {
  const {loading,data}=useFetch();
  const [page,setPage]=useState(0)
  const[followers,setFollowers]=useState([])

  useEffect(()=>{

    if(loading) return;

    setFollowers(data[page]) 

    /* 
      Initially, when data is an empty array, data[page] returns undefined. setFollowers sets the value of followers as undefined.
      
      If we implement map on undefined, it will throw error.

      Therefore, we should always call setfollowers when the data is fetched.

      When data is fetched i.e. loading changes to false, this useEffect will run to execute setFollowers.

      Whenever the page changes, we need to run useEffect to call setFollowers

      Note: Even if the component re-renders, useFetch will be called only on initial render. This is due to the empty dependency array in useFetch.
    */
  },[loading,page,data]) // data is included to avoid esLint warning 

  const handlePage=(index)=>{
    setPage(index)
  }

  const prevPage=()=>{
    let prevPage=page-1;
    if(prevPage<0){
      prevPage=data.length-1;
    }
    setPage(prevPage)
  }
  const nextPage=()=>{
    setPage((oldPage)=>(oldPage+1)%data.length)     // callback function approach
  }
  return <main>
    <div className="section-title">
      <h1>{loading?'loading...':'pagination'}</h1>
      <div className="underline"></div>
    </div>
    <section className="followers">
      <div className="container">
        {followers.map((follower)=>{
          return <Follower key={follower.id} {...follower}/>
        })}
      </div>
      {!loading&&<div className={"btn-container"}>
        <button className="prev-btn" onClick={prevPage}>prev</button>
        {data.map((item,index)=>{
          return (
            <button key={index} className={`page-btn ${index==page?'active-btn':null}`} onClick={()=>handlePage(index)}>{index+1}</button>
          )
        })}
        <button className="next-btn" onClick={nextPage}>next</button>
      </div>}
    </section>
  </main>
}

export default Pagination;
