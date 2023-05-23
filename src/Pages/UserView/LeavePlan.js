import React from 'react';
import NavBarGlobal from '../../components/NavBarGlobal';
import ViewLeavePlans from '../AdminView/ViewLeavePlans';
import LeavePlanComponent from '../../components/LeavePlanComponent';
function LeavePlan()
{
    return(<>
    <NavBarGlobal />
   <LeavePlanComponent />
    </>);
}
export default LeavePlan;