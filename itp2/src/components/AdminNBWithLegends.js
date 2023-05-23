import React, {useState} from "react";
import * as FaIcon from "react-icons/fa";
import * as AiIcon from "react-icons/ai";
import { Link } from "react-router-dom";
import  HamburgerMenuItemsAdmin from "./HamburgerMenuItemsAdmin";
import './NavBarGlobal.css';
import { IconContext } from "react-icons";
function AdminNBWithLegends() {

    const [sidebar,setSidebar] = useState(false);
    const showSidebar = () =>{
        setSidebar(!sidebar);
    }
    const [isDivVisible, setIsDivVisible] = useState(false);

  const showDiv = () => {
    setIsDivVisible(true);
  };

  const hideDiv = () => {
    setIsDivVisible(false);
  };
  return (
    <>
    <IconContext.Provider value ={{color:"#fff"}}>
      <div className="navbarC">
        <Link to="#" className="menu-bars">
        <FaIcon.FaBars onClick={showSidebar}/>

        </Link>
        <Link to="#" className="profile" onClick={showDiv}>
       <FaIcon.FaRegUserCircle />
       {isDivVisible && (
        <div>
          <table>
            <thead><tr>
                <th>1</th><th>1</th></tr></thead>
            <tbody>
                <tr>
                    <td>2</td>
                    <td>2</td>
                    
                </tr>
            </tbody>
          </table>
          <Link to ="#" onClick={hideDiv}>X</Link>
        </div>
      )}

        </Link>
        
        
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

export default AdminNBWithLegends;
