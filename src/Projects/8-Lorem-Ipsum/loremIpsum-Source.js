import React,{useState} from "react";
import data from './data'

function LoremGenerator(){
    const [count,setCount]= useState(0)
    const [text,setText]= useState([]);
    const handleSubmit= (e)=>{
        e.preventDefault();
        let amount;
        // console.log(typeof count);   // string (As it is connected with input which returns the entered value as a string)
        Number(count)>text.length? amount=text.length:amount=count;
        Number(count)<=0?amount=1:amount=count;
        setText(data.slice(0,amount));
    }
    return <section className="section-center">
        <h3>tired of boring lorem ipsum?</h3>
        <form className="lore-form" onSubmit={handleSubmit}>
            <label htmlFor="amount">
                paragraphs:
        </label>
        <input type="number" id="amount" value={count} onChange={(e)=>setCount(e.target.value)} />
        <button type="submit" className="btn">generate</button>
        </form>
        <article className="lorem-text">
          {text.map((ele,ind)=><p key={ind}>{ele}</p>)}
        </article>
    </section>
    
}

export default LoremGenerator;