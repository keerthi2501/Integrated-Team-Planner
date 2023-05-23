import React from "react";
// import NavBar from '../../components/NavBar';
import NavBarGlobalAdmin from "../../components/NavBarGlobalAdmin";
import Calender from "../../components/Calender";
import './adminStyling.css'
function AdminHome() {
  return (
    <>
      <NavBarGlobalAdmin />
      <h5 className="heading">Schedule for the day</h5>
      <div>
        <Calender />
      </div>
    </>
  );
}

export default AdminHome;
