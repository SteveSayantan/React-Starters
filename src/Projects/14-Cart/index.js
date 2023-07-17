import Cart from "./Cart";
import { AppProvider } from "./context";

const Wrapper=()=>{
    return <AppProvider>
        <Cart/>
    </AppProvider>
}

export default Wrapper;