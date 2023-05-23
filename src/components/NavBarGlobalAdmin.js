import React, {useState} from "react";
import * as FaIcon from "react-icons/fa";
import * as AiIcon from "react-icons/ai";
import { Link } from "react-router-dom";
import  HamburgerMenuItemsAdmin from "./HamburgerMenuItemsAdmin";
import './NavBarGlobal.css';
import { IconContext } from "react-icons";
function NavBarGlobalAdmin() {

    const [sidebar,setSidebar] = useState(false);
    const showSidebar = () =>{
        setSidebar(!sidebar);
    }
    // document.onClick = showSidebar();
  return (
    <>
    <IconContext.Provider value ={{color:"#fff"}}>
      <div className="navbarC">
        <Link to="#" className="menu-bars">
        <FaIcon.FaBars onClick={showSidebar}/>

        </Link>
        {/* <Link to="/myProfile" className="profile">
       <FaIcon.FaRegUserCircle />

        </Link> */}
        
      </div>
      <nav className={sidebar ? 'nav-menu-admin active' : 'nav-menu'}>
        <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                    <AiIcon.AiOutlineClose />
                    
                </Link>
            </li>
            
            {HamburgerMenuItemsAdmin.map((item,index) => {
                return(<li key={index} className={item.cName}>
                   
                    <Link to={item.path}> {item.icon}<span className="menuItem">{item.title}</span></Link>
                </li>)
            })}
            
        </ul>


      </nav>
      </IconContext.Provider>
    </>
  );
}

export default NavBarGlobalAdmin;
