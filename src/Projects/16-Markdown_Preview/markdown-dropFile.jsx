import { useState } from "react";
import ReactMarkdown from 'react-markdown'

const MarkDownDropFile=()=>{

    const [innerText,setInnerText]=useState('');

    const DropHandler=async (e)=>{
        e.preventDefault();

        let file=[...e.dataTransfer.files].find((item)=>{
            return item.name.endsWith('.md');
        })

        if(!file){
            console.error("Only markdown file is allowed");
            return;
        }
        
        let content=await file.text();

        setInnerText(content);
    }

    const DragOverHandler=(e)=>{
        e.preventDefault();
    }


    const uploadHandler=async (e)=>{

        if(e.target.files.length<1) return;

        let file= e.target.files[0];

        if(!file.name.endsWith('.md')){
            console.error("Only markdown file is allowed");
            return;
        }

        let content=await file.text();

        setInnerText(content);

        e.target.parentElement.reset();
    }

    if(innerText.length===0){

        return <main className="pad-3">
                <section className="drop-file" onDrop={DropHandler} onDragOver={DragOverHandler}>
                    <form action="#" className="upload-form text-center">
                            <label htmlFor="uploads" className="upload-btn" >Upload Files</label>
                            <input type="file" className='visually-hidden' id="uploads" accept=".md" onChange={uploadHandler}/>     
                            <p>or,drag a markdown file here</p>
                    </form>
                </section>
        </main>
    }

    
    return <main className="pad-3">
                <article className=" max-width margin-x-auto margin-bottom-4"><ReactMarkdown>{innerText}</ReactMarkdown></article>
                <footer className="text-center">
                    <button type="button" className="reset-btn" onClick={()=>setInnerText('')}>Reset</button>
                </footer>
        </main>
}

export default MarkDownDropFile;