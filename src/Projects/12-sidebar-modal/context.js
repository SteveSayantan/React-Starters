import React,{useState,useContext} from "react";

const appContext= React.createContext() // calling the context api 

const AppProvider= ({children})=>{      // creating a component (for reusability) that returns the Provider component. Instead of creating a separate file and component for this, we could have done this directly in sidebar-source.js also. The basic idea is to wrap the whole app with Provider component

   const[isSidebarOpen,setIsSideBarOpen]=useState(false)
   const[isModalOpen,setIsModalOpen]=useState(false)

   const openSidebar=()=>setIsSideBarOpen(true)
   const closeSidebar=()=>setIsSideBarOpen(false)

   const openModal=()=>setIsModalOpen(true)
   const closeModal=()=>setIsModalOpen(false)

   return <appContext.Provider value={{openSidebar,closeSidebar,openModal,closeModal,isModalOpen,isSidebarOpen}}>{children}</appContext.Provider> // The components placed inside this AppProvider component, i.e. the children (prop-children) are wrapped with Provider component. So it is must to use 'children'.
}

/* 
   Now we can use the values passed to 'value' prop throughout the app. For accessing the value we have two approaches:

   1. import useContext and appContext in the file (example: modal.js)

   2. create a custom-hook and use that to obtain the values (example: home.js )
*/

// custom-hook
export const useGlobalContext=()=>{
   return useContext(appContext);
}

export {appContext,AppProvider} // Another approach for exporting