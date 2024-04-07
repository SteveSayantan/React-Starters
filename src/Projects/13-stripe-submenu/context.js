import React, { useState, useContext } from 'react'
import sublinks from './data'

const appContext= React.createContext()

const AppProvider=({children})=>{
    const [isSidebarOpen,setIsSidebarOpen]=useState(false)
    const[isSubmenuOpen,setIsSubmenuOpen]=useState(true)
    const[location,setLocation]=useState({})
    const [page,setPage]=useState({page:'',links:[]})

    // the following functions should be wrapped with useCallback
    
    const openSidebar=()=>setIsSidebarOpen(true)
    const closeSidebar=()=>setIsSidebarOpen(false)

    const openSubmenu=(text,coordinates)=>{
        const newPage= sublinks.find((link)=>link.page==text)
        setPage(newPage);
        setLocation(coordinates)
        setIsSubmenuOpen(true)
    }
    const closeSubmenu=()=>setIsSubmenuOpen(false)

    return <appContext.Provider
    value={{isSidebarOpen,isSubmenuOpen,openSidebar,closeSidebar,openSubmenu,closeSubmenu,location,page}}
    >{children}</appContext.Provider>
}

 const useGlobalContext=()=>useContext(appContext);

 export {useGlobalContext,AppProvider}
