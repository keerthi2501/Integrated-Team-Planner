import React from "react";
import { useState } from "react";
import NavBarGlobalAdmin from "../../components/NavBarGlobalAdmin";
import "../../components/Holidays.css";
import "./adminStyling.css";
import LeavePlanComponent from "../../components/LeavePlanComponent";
export default function ViewLeavePlans() {
  
  return (
    <>
      <NavBarGlobalAdmin />
     <LeavePlanComponent />
    </>
  );
}

// export default ViewLeavePlans;
