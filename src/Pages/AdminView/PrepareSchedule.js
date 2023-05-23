import React from 'react';
import NavBarGlobalAdmin from '../../components/NavBarGlobalAdmin';
import PrepareScheduleTable from '../../components/PrepareScheduleTable';
import './adminStyling.css'
// import AdminNBWithLegends from '../../components/AdminNBWithLegends';
function PrepareSchedule(){
    return(
        <>
        <NavBarGlobalAdmin />
        {/* <AdminNBWithLegends /> */}
        <PrepareScheduleTable /></>
    );
}

export default PrepareSchedule;