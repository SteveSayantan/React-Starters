import { Link } from "react-router-dom";

const NotFound=()=>{
    return <section className="pad-y-5 text-center">
        <h1 className="margin-bottom-2">You have reached an End!!</h1>
        <Link to='/' className="nav-btn active-btn">Return Home</Link>
    </section>
}

export default NotFound;