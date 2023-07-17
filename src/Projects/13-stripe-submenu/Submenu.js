import { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const{isSubmenuOpen,location,page:{page,links}}=useGlobalContext();
  const container= useRef(null)
  const[columns,setColumns]=useState('col-2');

  useEffect(()=>{
    setColumns('col-2')   //Once the default state value of column is changed, it will remain 'col-4', so we have to set this manually each time the useEffect runs
    const submenu=container.current;
    const{center,bottom}=location;
    submenu.style.left=`${center}px`
    submenu.style.top=`${bottom}px`

    if(links.length==3){
      setColumns('col-3')
    }
    if(links.length>3){
      setColumns('col-4');
    }
    
  },[location,links]) // As location and link props are changing,they trigger re-render. Therefore, we need to include them as a dependency

  return <aside className={`${isSubmenuOpen?'submenu show':'submenu'}`}ref={container}>
    <h4>{page}</h4>
    <div className={`submenu-center ${columns}`}>
      {links.map((link,index)=>{
        const{label,icon,url}=link;
        return <a href={url} key={index}>{icon}{label}</a>
      })}
    </div>
  </aside>
}

export default Submenu
