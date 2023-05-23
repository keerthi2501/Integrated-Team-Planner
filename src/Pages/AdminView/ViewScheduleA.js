import React from 'react';
// import NavBarGlobalAdmin from '../../components/NavBarGlobalAdmin';
import NavBarGlobalAdminWithLegends from '../../components/NavBarGlobalAdminWithLegends';
import './adminStyling.css'
import ViewScheduleTable from '../../components/ViewScheduleTable';
import NavBarGlobalAdmin from '../../components/NavBarGlobalAdmin';
// import ViewScheduleTableAdmin from '../../components/ViewScheduleAdmin';
export default function ViewScheduleA(){
    return(
        <>
        {/* <NavBarGlobalAdminWithLegends/> */}
        <NavBarGlobalAdmin />
        <ViewScheduleTable />
        </>
    );
}

// export default ViewScheduleA;