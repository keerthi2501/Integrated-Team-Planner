import React from 'react';
import NavBarGlobalAdmin from '../../components/NavBarGlobalAdmin';
import './adminStyling.css'
// import ManageHolidaysComponent from '../../components/ManageHolidaysComponent';
import ManageHolidaysComponent2 from '../../components/ManageHolidaysComponent2';
function ManageHolidays(){
    return(
        <>
        <NavBarGlobalAdmin />
        {/* <h6 className="heading">Manage Holidays page</h6> */}
        {/* <ManageHolidaysComponent></ManageHolidaysComponent> */}
        <ManageHolidaysComponent2 />
        {/* <p>Coming soon... Need more work</p> */}
        </>
    );
}

export default ManageHolidays;