import React, { useState, useEffect } from 'react'
import { useRef } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'

const mainUrl = `https://api.unsplash.com/photos/`            // This url is for getting regular images to display
const searchUrl = `https://api.unsplash.com/search/photos/`   // This url is for searching particular images
// For any query regarding unsplash API, go through https://unsplash.com/documentation . To use the API, we need to use two secret keys provided by the API.

// Refer to the video for any doubt.

/* 
  In Create-React-App, to use .env, unlike node, we need not install any separate package. For details https://create-react-app.dev/docs/adding-custom-environment-variables/

  We must not place our .env file in src dir. Instead, we have to place it in the root dir.

  All names in .env file (in case of CRA) must start with REACT_APP_

  Restart the dev server after setting up .env
*/

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`

function App() {
  const [loading,setLoading]=useState(false)
  const [photos,setPhotos]=useState([])
  const [page,setPage]=useState(1);
  const [query,setQuery]=useState("")
  const [newImages,setNewImages]=useState(false)    // This state works like a switch, whenever we require new images, we set it to true
  const mounted=useRef(false)


  const fetchImages=async ()=>{
    setLoading(true);
    let url;
    const urlPage= `&page=${page}`
    const urlQuery= `&query=${query}`
    
    if(query){
      url=`${searchUrl}${clientID}&page=${page}${urlQuery}`
    }
    else{
      url=`${mainUrl}${clientID}${urlPage}`
    }
    try {
      const resp=await fetch(url)
      const data=await resp.json()

      if(query&&page===1){
        setPhotos(data.results);
      }
      else if(query){
        setPhotos([...photos,...data.results])    // When we use the searchUrl, we get the images inside results property.
      }
      else{
        setPhotos([...photos,...data]);
      }
      setLoading(false)
      setNewImages(false)
    } catch (error) {
      setLoading(false)
      setNewImages(false)
      console.log(error);
    }
  }

  useEffect(()=>{    
    fetchImages()

    //eslint-disable-next-line 
  },[page])

  useEffect(()=>{     // This useEffect does not run in the initial render. Basically it is called during the scroll event
    if(!mounted.current){
      mounted.current=true;
      return;
    }
    if(!newImages) return;
    if(loading) return;
    setPage(page+1);


  //eslint-disable-next-line
  },[newImages])
  
 
 const event=()=>{
    /* 
      To make the infinite scroll possible, we need to make sure that when innerHeight+scrollY exceeds the body.scrollHeight, we fetch data
      
      Here, we are subtracting 2, to start the fetch a bit early. 
    
    */

    if(!loading&&(window.innerHeight+window.scrollY)>=document.body.scrollHeight-2){
     
      setNewImages(true)      // Setting this as true will call the useEffect
    }
  } 
  useEffect(()=>{
    window.addEventListener('scroll',event );
    return ()=>window.removeEventListener('scroll',event)
    // Here, we don't want to make any changes. This is how we can disable those warnings just by adding this line at the end of the cb in useEffect.
    
    //eslint-disable-next-line          
  },[])

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!query){     // If query is empty, don't fetch
      return;
    }
    if(page===1){   //As its initial value is 1, we have to manually call fetchImages when user wants to search just after the initial render
      fetchImages()
      return;
    }
    setPage(1)      // Otherwise, set its value to 1 as we want to see results from the first page. This in turn calls fetchImages.
  }

  return <main>
    <section className="search">
      <form action="" className="search-form">
        <input type="text" name="" id="" className="form-input" value={query} onChange={(e)=>setQuery(e.target.value)}/>
        <button type="submit" className="submit-btn" onClick={handleSubmit}>
          <FaSearch/>
        </button>
        </form>
    </section>
    <section className="photos">
      <div className="photos-center">{photos.map((image,index)=>{
        return <Photo key={index} {...image}/>
      })}</div>
      {loading&& <h2 className='loading'>Loading...</h2>}
    </section>
  </main>
}

export default App
