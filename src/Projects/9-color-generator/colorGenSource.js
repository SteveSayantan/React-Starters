import {useState} from "react";
import Values from "values.js"; // This package converts given hexcolor strings to rgb values. All setup is copied from values.js docs
import SingleColor from "./singleColor";
function ColorGen(){
    const[color,setColor]=useState('')
    const[error,setError]=useState(false)
    const[list,setList]=useState(new Values('#f15025').all(10));
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        try { // If some invalid value is supplied, it throws an Error, so we are using try-catch block

            let colors= new Values(color).all(10) // all method generates both tints and shades. Watch the video to know why we use 10.
            setList(colors);
            setError(false)
            
        } catch (error) {
            setError(true);
            console.log(error);
        }
    }
    return <>
        <section className="container">
            <h3>color generator</h3>
            <form  onSubmit={handleSubmit}>
                <input type="text" value={color} className={`${error?'error':null}`} placeholder='#f15025' onChange={(e)=>setColor(e.target.value)} />
                <button className="btn" type="submit">Submit</button>
            </form>
        </section>
        <section className="colors">
            {list.map((color,index)=>{
                // console.log(color.hex);  // each element contains a get method which returns the hexvalue of the color
                return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
            })}
        </section>
    </>
}

export default ColorGen