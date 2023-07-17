import React from 'react';
import {useState,useEffect} from 'react';

const finalDate= new Date("2023-11-18T00:00:00");

 function TimerApp () {
    const [time,setTime]=useState([0,0,0,0]) 


    const getTimeArr= function(miliseconds){
        const arr= [];
        let day= miliseconds/(1000*60*60*24);
        arr.push(Math.floor(day));
        let hours= (day-arr[0])*24;
        arr.push(Math.floor(hours));

        let mins= (hours-arr[1])*60;
        arr.push(Math.floor(mins));

        let secs=( mins-arr[2])*60;
        arr.push(Math.floor(secs));

        return arr;
    } 

    
    useEffect(()=>{

        let clearId= setInterval(() => {
            let timeGap= finalDate.getTime()-Date.now();
            if(timeGap<=0){
              clearInterval(clearId);
              return;                 // Without this return, the subsequent lines will be executed after calling clearInterval.
            } 
            setTime(getTimeArr(timeGap));
            }, 1000);
        return ()=>clearInterval(clearId)
    },[])  

    /* 
    If we place finalDate outside useEffect (but within TimerApp component), we shall get a warning to insert it in dependency array. 
    But, doing that would trigger infinite loop because with every re-render of this component, the finalDate variable would be created from scratch i.e. will be changed.

    Therefore, we can place finalDate inside useEffect or make it a global variable.
    */

  let [day,hour,minute,second]=time;
  return (
    <section className="timer">
        
        <ul>
          <li id= "days" className="timer--display text--big text--soft-red">{day<10? "0"+day:day}</li>
          <li className="text--uppercase text--grey text--small timer--text">Days</li>
        </ul>
        <ul>
          <li id= "hours" className="timer--display text--big text--soft-red">{hour<10? "0"+hour:hour}</li>
          <li className="text--uppercase text--grey text--small timer--text"> Hours</li>
        </ul>
        <ul>
          <li id= "minutes" className="timer--display text--big text--soft-red">{minute<10? "0"+minute:minute}</li>
          <li className="text--uppercase text--grey text--small timer--text">Minutes</li>
        </ul>
        <ul>
          <li id= "seconds" className="timer--display text--big text--soft-red">{second<10? "0"+second:second}</li>
          <li className="text--uppercase text--grey text--small timer--text">Seconds</li>
        </ul>

      </section>
  );
}

export default TimerApp;
