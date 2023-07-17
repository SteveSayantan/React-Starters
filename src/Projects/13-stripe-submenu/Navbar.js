import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const{openSidebar,openSubmenu,closeSubmenu}=useGlobalContext()

  const displaySubmenu=(e)=>{
    const page= e.target.textContent;
    const tempBtn= e.target.getBoundingClientRect();  // This method gives an object with some useful info about that component e.g., coordinates, height etc.
    const center= (tempBtn.left+tempBtn.right)/2;
    const bottom=tempBtn.bottom - 3;  // To create a slight overlap between the button and the submenu, we are doing this
    openSubmenu(page,{center,bottom})
  }

  const handleSubmit=(e)=>{   // If the mouse hovers on element that does not contain link-btn class i.e. not a button, submenu will be closed.
    if(!e.target.classList.contains('link-btn')){
      closeSubmenu()
    }

  }
  return <nav className="nav" onMouseOver={handleSubmit}>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="stripe" className='nav-logo' />
        <button className="btn toggle-btn" onClick={openSidebar}>
          <FaBars/>
        </button>
      </div>
      <ul className="nav-links">
          <li><button className="link-btn" onMouseOver={displaySubmenu}>products</button></li>
          <li><button className="link-btn" onMouseOver={displaySubmenu}>developers</button></li>
          <li><button className="link-btn" onMouseOver={displaySubmenu}>company</button></li>
      </ul>
      <button className="btn signin-btn">Sign in</button>
    </div>
  </nav>
}

export default Navbar
