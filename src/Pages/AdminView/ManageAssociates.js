import React from "react";
import NavBarGlobalAdmin from "../../components/NavBarGlobalAdmin";
import "../../components/Holidays.css";
import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";

function ManageAssociates() {
  const locations = ["Ahmedabad", "Bangalore", "Pune", "Japan"];
  const roles = ["Manager", "TL", "Intern"];
  const [formData, setFormData] = useState({
    associateName: "",
    w3id: "",
    managerName: "",
    role: "",
    location: "",
  });
  const [tableData, setTableData] = useState([
    {
      associateName: "Rajiv Madassery",
      w3id: "rajiv@ibm.com",
      managerName: "",
      role: "Manager",
      location: "Bangalore",
    },
    {
      associateName: "Ashima Singhal",
      w3id: "ashima@ibm.com",
      managerName: "Rajiv Madassery",
      role: "Associate",
      location: "Bangalore",
    },
    {
      associateName: "Shreyashi Bhowmick",
      w3id: "shreyashi@ibm.com",
      managerName: "Rajiv Madassery",
      role: "Associate",
      location: "Bangalore",
    },
    {
      associateName: "Roushan Kumar",
      w3id: "roushan@ibm.com",
      managerName: "Rajiv Madassery",
      role: "Associate",
      location: "Bangalore",
    },
    {
      associateName: "Samarpita Pattnaik",
      w3id: "samarpita@ibm.com",
      managerName: "Rajiv Madassery",
      role: "Associate",
      location: "Bangalore",
    },
    {
      associateName: "Mounika Grandhi",
      w3id: "mouni@ibm.com",
      managerName: "Rajiv Madassery",
      role: "Associate",
      location: "Bangalore",
    },
    {
      associateName: "Madhavi Pilaka",
      w3id: "madhavi@ibm.com",
      managerName: "Rajiv Madassery",
      role: "Associate",
      location: "Bangalore",
    },
    {
      associateName: "Hariprasad AS",
      w3id: "hari@ibm.com",
      managerName: "Rajiv Madassery",
      role: "Team lead",
      location: "Bangalore",
    },
    {
      associateName: "Sheetal Shreya",
      w3id: "sheetal@ibm.com",
      managerName: "Rajiv Madassery",
      role: "Associate",
      location: "Bangalore",
    },
    
   
   
  ]);
  function formChangehandler(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
    // console.log(formData);
  }
  function AssociatedataHandler(e) {
    e.preventDefault();
    console.log(formData);
    setTableData([...tableData, formData]);
    setFormData({
        associateName: "",
        w3id: "",
        managerName: "",
        role: "",
        location: "default",
      });
    console.log(tableData);
  }
  return (
    <>
      <NavBarGlobalAdmin />
      <div
        className="mainDiv"
        style={{ height: 100 + "vh" }}
      >
        <div className="leftColumn" style={{ height: 100 + "vh" }}>
          
          <form className="inputForm" onSubmit={AssociatedataHandler}>
            <center>
              <h2 className="formHeader">Add a New Associate</h2>
            </center>
            <br />
            <input
             className="formInput"
              type="text"
              name="associateName"
              placeholder="Name"
              value={formData.associateName}
              onChange={formChangehandler}
            />
            <input
             className="formInput"
              type="text"
              name="w3id"
              placeholder="W3ID"
              value={formData.w3id}
              onChange={formChangehandler}
            />
            {/* <input type="text" name="location" placeholder="Location" value={formData.location} onChange={formChangehandler}/>  */}
            <select name="location"  className="formInput" onChange={formChangehandler}>
              <option value="default">Location</option>
              <option value="Banglore">Bangalore</option>
              <option value="Pune">Pune</option>
              <option vale="Ahmedabad">Ahmedabad</option>
              <option value="Japan">Japan</option>
            </select>
            {/* <input type="text" name="managerName" placeholder="Manager's Name" value={formData.managerName} onChange={formChangehandler}/> */}
            <select name="managerName" onChange={formChangehandler}  className="formInput">
              <option value="">Manager's Name</option>
              <option value="Rajiv Madassery">Rajiv Madassery</option>
              <option value="Manoj Nair">Manoj Nair</option>
              <option value="-">Others</option>
            </select>
            {/* <input type="text" name="role" placeholder="Role" value={formData.role} onChange={formChangehandler}/> */}
            <select name="role" onChange={formChangehandler}  className="formInput">
              <option value="">Designation</option>
              <option value="Manager">Manager</option>
              <option value="Team Lead">Team Lead</option>
              <option value="Engineer">Engineer</option>
              <option value="New Hire">New Hire</option>
            </select>
            <center>
              <input className="submitButton" type="submit" value="Add"></input>
            </center>
          </form>
        </div>
        {/* <div className="middleColumn"> Column 2</div> */}
        <div className="rightColumn " style={{ height: 100 + "vh" }}>
          <>
            <center>
              <h2 className="tableTitle">LIST OF ASSOCIATES</h2> <br/>
              <table className="associateTable">
                <thead>
                  <tr className="TableRow">
                    <th className="TableHeader">Associate Name</th>
                    <th className="TableHeader">W3id</th>
                    <th className="TableHeader">Location</th>
                    <th className="TableHeader">Manager's Name</th>
                    <th className="TableHeader">Role</th>
                    <th className="TableHeader" colSpan={2}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((tabledata,index) => (
                    <tr key = {index} className="TableRow">
                      <td style={{fontWeight:'normal'}} className="elements">{tabledata.associateName}</td>
                      <td style={{fontWeight:'normal'}}className="elements">{tabledata.w3id}</td>
                      <td style={{fontWeight:'normal'}}className="elements">{tabledata.location}</td>
                      <td style={{fontWeight:'normal'}}className="elements">{tabledata.managerName}</td>
                      <td style={{fontWeight:'normal'}} className="elements">{tabledata.role}</td>
                      <td style={{fontWeight:'normal'}} className="elements">
                        
                          <BiEditAlt onClick={()=>{
                            console.log("Edit");
                          }} style={{cursor:'pointer'}}/>
                        
                      </td>
                      <td style={{fontWeight:'normal'}} className="elements">
                        
                          <MdDeleteForever onClick={()=>{
                            console.log("Delete");
                          }} style={{cursor:'pointer'}}/>
                        
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </center>
          </>
        </div>
      </div>
    </>
  );
}
// export default ManageAssociates;

export default ManageAssociates;
