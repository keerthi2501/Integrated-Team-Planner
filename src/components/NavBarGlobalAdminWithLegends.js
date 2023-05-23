// import React, { useEffect, useState } from "react";
// import * as FaIcon from "react-icons/fa";
// import * as AiIcon from "react-icons/ai";
// import * as MdIcon from "react-icons/md"
// import './ViewScheduleTable.css'
// import { Link } from "react-router-dom";
// import "./NavBarGlobal.css";
// import { IconContext } from "react-icons";
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import HamburgerMenuItemsAdmin from "./HamburgerMenuItemsAdmin";

// function OffCanvasExample({ name, ...props }) {
//     const symbols =  ["EM", "M", "G","A","W","SD","L","H","MD","S"];
//     const meanings = ["Early Morning Shift","Morning Shift","General Shift","Afternoon Shift","Weekend Shift","Skill Day","Leave","Holiday Shift","Manager on Duty","Shadowing"]
//     const [show, setShow] = useState(false);
  
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
    
    
//         const cells = document.querySelectorAll('.symbols');
//         cells.forEach((cell) =>{
//             if (cell.textContent === "M") {
//                 cell.className = "";
//                 cell.classList.add("cells");
//                 cell.classList.add("morning");
//               }
//               if (cell.textContent === "EM") {
//                 cell.className = "";
//                 cell.classList.add("cells");
//                 cell.classList.add("emorning");
//               }
//               if (cell.textContent === "A") {
//                 cell.className = "";
//                 cell.classList.add("cells");
//                 cell.classList.add("after");
//               }
//               if (cell.textContent === "SD") {
//                 cell.className = "";
//                 cell.classList.add("cells");
//                 cell.classList.add("skill");
//               }
//               if (cell.textContent === "L") {
//                 cell.className = "";
//                 cell.classList.add("cells");
//                 cell.classList.add("leave");
//               }
//               if (cell.textContent === "MD") {
//                 cell.className = "";
//                 cell.classList.add("cells");
//                 cell.classList.add("mod");
//               }
//               if (cell.textContent === "G") {
//                 cell.className = "";
//                 cell.classList.add("cells");
//                 cell.classList.add("general");
//               }
//               if (cell.textContent === "S") {
//                 cell.className = "";
//                 cell.classList.add("cells");
//                 cell.classList.add("shadow");
//               }
//               if (cell.textContent === "HS") {
//                 cell.className = "";
//                 cell.classList.add("cells");
//                 cell.classList.add("holiday");
//               }
//               if (cell.textContent === "W") {
//                 cell.className = "";
//                 cell.classList.add("cells");
//                 cell.classList.add("wss");
//               }
//         })
      
  
//     return (
//       <>
//          <Link to="#" className="profile">
//        <MdIcon.MdLegendToggle onClick={handleShow} className="me-2"/>

//         </Link>
    
//         <Offcanvas show={show} onHide={handleClose} {...props}>
//           <Offcanvas.Header closeButton>
//             <Offcanvas.Title>Shift Legend</Offcanvas.Title>
//           </Offcanvas.Header>
//           <Offcanvas.Body>
           
//             <table>
//                 <thead>
//                     <th>Shift Symbol</th>
//                     <th>Meaning</th>
//                 </thead>
//                 <tbody>
//                     {symbols.map((symbol,index) =>(
//                          <tr key={index}>
//                             <td className="symbols">{symbol}</td>
//                             <td>{meanings[index]}</td>
//                          </tr>

//                     ))}
                   
                     
                      

                  
//                 </tbody>
//             </table>
//           </Offcanvas.Body>
//         </Offcanvas>
//       </>
//     );
//   }

// function NavBarGlobalWithLegends() {

//   const [sidebar, setSidebar] = useState(false);
//   const showSidebar = () => {
//     setSidebar(!sidebar);
//   };
//   return (
//     <>
//       <IconContext.Provider value={{ color: "#fff" }}>
//         <div className="navbarC">
//           <Link to="#" className="menu-bars">
//             <FaIcon.FaBars onClick={showSidebar} />
//           </Link>
//           {/* <Link to="/myProfile" className="profile">
//        <FaIcon.FaRegUserCircle />

//         </Link> */}
//          <OffCanvasExample placement='end'/>
        
//         </div>
//         <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
//           <ul className="nav-menu-items" onClick={showSidebar}>
//             <li className="navbar-toggle">
//               <Link to="#" className="menu-bars">
//                 <AiIcon.AiOutlineClose />
//               </Link>
//             </li>

//             {HamburgerMenuItemsAdmin.map((item, index) => {
//               return (
//                 <li key={index} className={item.cName}>
//                   <Link to={item.path}>
//                     {" "}
//                     {item.icon}
//                     <span className="menuItem">{item.title}</span>
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
//       </IconContext.Provider>
//     </>
//   );
// }

// export default NavBarGlobalWithLegends;
