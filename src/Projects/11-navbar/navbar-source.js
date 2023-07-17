import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const[showLinks,setShowLinks]=useState(false);
  const linksContainerRef= useRef(null)
  const linksRef= useRef(null);
  useEffect(()=>{
    const linksHeight= linksRef.current.offsetHeight; // we could have also used getClientRect() method which returns an object with some useful properties
    if(showLinks){
      linksContainerRef.current.style.height= `${linksHeight}px`  // sets the Inline style
    }
    else{
      linksContainerRef.current.style.height= '0px'
    }
  },[showLinks])

/* 
    Necessity of using 'links-container' div to wrap 'links' ul

    1. With the help of CSS, we are making the height of 'links-container' zero.

    2. As a result, its child element 'links' is no longer visible. It has its height, but as its parent's height is zero, it is not visible.

    3. Now, we calculate the height of 'links' and set that as the height of 'links-container'

    4. If we had omitted the 'links-container' div, we had to make the height of 'links' zero. But we are also calculating the height of 'links' which will then produce zero i.e. the functionality will fall apart.
*/
  return <nav>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="logo" />
        <button className="nav-toggle" onClick={()=>setShowLinks(!showLinks)}>
          <FaBars/>
        </button>
      </div>
      <div className='links-container'ref={linksContainerRef}>

        <ul className="links" ref={linksRef}>
          {links.map((link)=>{
            const{id,url,text}=link;
            return <li key={id}>
              <a href={url}>{text}</a>
            </li>
          })}
        </ul>
      </div>
      <ul className="social-icons">
      {social.map((socialIcon)=>{
          const{id,url,icon}=socialIcon;
          return <li key={id}>
            <a href={url}>{icon}</a>
          </li>
        })}
      </ul>
    </div>
  </nav>
}

export default Navbar