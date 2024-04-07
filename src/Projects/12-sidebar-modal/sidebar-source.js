import Modal from "./modal";
import Sidebar from "./sidebar";

import Home from "./home";
import { AppProvider } from "./context";

function SidebarSource(){
    return <AppProvider>  
            <Home/>
            <Modal/>
            <Sidebar/> 
        </AppProvider>
    
}

export default SidebarSource;