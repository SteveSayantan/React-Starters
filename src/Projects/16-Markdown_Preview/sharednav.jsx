import {  NavLink,Outlet } from "react-router-dom";

const SharedComponent=()=>{
    return <>
        <header className=" text-center pad-y-5 ">
            <NavLink className={({isActive})=>isActive?"nav-btn active-btn":"nav-btn"} to='/'>Type</NavLink> 
            <NavLink to='/file-preview' className={({isActive})=>isActive?"nav-btn active-btn":"nav-btn"}>File</NavLink>     
        </header>
        
        <Outlet/>
    </>
    
}

export default SharedComponent;