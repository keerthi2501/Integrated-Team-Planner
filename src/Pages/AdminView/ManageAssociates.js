import React, { useEffect } from "react";
import NavBarGlobalAdmin from "../../components/NavBarGlobalAdmin";
import "../../components/Holidays.css";
import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
// import Popup from 'reactjs-popup';
import Modal from "react-modal";
import axios from "axios";

function ManageAssociates() {
  const locations = ["Ahmedabad", "Bangalore", "Pune", "Japan"];
  const roles = ["Manager", "TL", "Intern"];
  const [selectedRow, setSelectedRow] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    ibmId: "",
    managerName: "",
    role:""
  });
  const [tableData, setTableData] = useState([
    {
        "id": 1,
        "name": "Roushan",
        "location": "Bengaluru",
        "ibmId": "rk@gmail.com",
        "managerName": "Rajiv Madassery",
        "role": "Sp"
    },
    {
        "id": 2,
        "name": "Princy",
        "location": "Pune",
        "ibmId": "rk@gmail.com",
        "managerName": "Manoj Nair",
        "role": "Sp"
    },
    {
        "id": 3,
        "name": "Abhishek",
        "location": "Pune",
        "ibmId": "rk@gmail.com",
        "managerName": "Manoj Nair",
        "role": "Sp"
    },
    {
        "id": 4,
        "name": "Ashima",
        "location": "Bengaluru",
        "ibmId": "rk@gmail.com",
        "managerName": "Manoj Nair",
        "role": "Sp"
    },
    {
        "id": 5,
        "name": "Sushmita",
        "location": "Ahmedabad",
        "ibmId": "rk@gmail.com",
        "managerName": "Manoj Nair",
        "role": "Sp"
    },
    {
        "id": 6,
        "name": "Manish",
        "location": "Pune",
        "ibmId": "rk@gmail.com",
        "managerName": "Manoj Nair",
        "role": "Sp"
    },
    {
        "id": 7,
        "name": "Sheetal",
        "location": "Bengaluru",
        "ibmId": "rk@gmail.com",
        "managerName": "Manoj Nair",
        "role": "Sp"
    },
    {
        "id": 8,
        "name": "Nitin",
        "location": "Pune",
        "ibmId": "rk@gmail.com",
        "managerName": "Manoj Nair",
        "role": "Sp"
    }
]);
var [testtableData,settesttableData]=useState([]);

useEffect(()=>
        {
          loadAssociates();
        },[])

        // const loadCourses=async()=>
        async function loadAssociates()
        {
          const testtableData1=axios.get("http://localhost:8081/ITP/getAssociates")
          console.log("From axios")
          // console.log((await testtableData1).data);
          // testtableData.push(testtableData1);
          settesttableData(...testtableData,(await testtableData1).data);
          // testtableData=testtableData1;
          // console.log(testtableData);

          // setTableData([...tableData,(await testtableData).data])
          // console.log(tableData)
        }  


  // function handleEditClick(e,tabledata)
  // {
  //   // e.preventDefault();
  //   // console.log('came')
  //   // console.log(tableData)
  //   setSelectedRow(tabledata)
  //   // console.log(selectedRow)
  // }
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
      id: "",
      name: "",
      location: "",
      ibmId: "",
      managerName: "default",
      role:"default"
    });
    console.log(tableData);
  }
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleEditClick = (row) => {
    setSelectedRow(row);
    setModalIsOpen(true);
  };

  const handleDeleteClick =(row) =>
  {
    console.log(row)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Process the form data or update the state as needed
    console.log("updated")
    console.log(selectedRow);
    setModalIsOpen(false);
  };
  function deleted() {
    alert("Are you sure to delete this record?");
  }
  return (
    <>
      <NavBarGlobalAdmin />
      <div className="mainDiv" style={{ height: 100 + "vh" }}>
        <div className="leftColumn" style={{ height: 100 + "vh" }}>
          <form className="inputForm" onSubmit={AssociatedataHandler}>
            <center>
              <h2 className="formHeader">Add a New Associate</h2>
            </center>
            <br />
            <input
              className="formInput"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.associateName}
              onChange={formChangehandler}
              required
            />
            <input
              className="formInput"
              type="text"
              name="ibmId"
              placeholder="W3ID"
              value={formData.ibmId}
              onChange={formChangehandler}
              required
            />
            {/* <input type="text" name="location" placeholder="Location" value={formData.location} onChange={formChangehandler}/>  */}
            <select
              name="location"
              className="formInput"
              onChange={formChangehandler}
              required
            >
              <option value="default">Location</option>
              <option value="Banglore">Bangalore</option>
              <option value="Pune">Pune</option>
              <option vale="Ahmedabad">Ahmedabad</option>
              <option value="Japan">Japan</option>
            </select>
            {/* <input type="text" name="managerName" placeholder="Manager's Name" value={formData.managerName} onChange={formChangehandler}/> */}
            <select
              name="managerName"
              onChange={formChangehandler}
              className="formInput"
              required
            >
              <option value="">Manager's Name</option>
              <option value="Rajiv Madassery">Rajiv Madassery</option>
              <option value="Manoj Nair">Manoj Nair</option>
              <option value="-">Others</option>
            </select>
            {/* <input type="text" name="role" placeholder="Role" value={formData.role} onChange={formChangehandler}/> */}
            <select
              name="role"
              onChange={formChangehandler}
              className="formInput"
              required
            >
              <option value="default">Designation</option>
              <option value="Manager">Manager</option>
              <option value="Team Lead">Team Lead</option>
              <option value="Engineer">Engineer</option>
              <option value="New Hire">New Hire</option>
              <option value="Associate">Associate</option>
              <option value="sp">sp</option>
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
              <h2 className="tableTitle">LIST OF ENGINEERS</h2> <br />
              <table className="associateTable">
                <thead>
                  <tr className="TableRow">
                    <th className="TableHeader">ENGINEER Name</th>
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
                  {          console.log(testtableData)
}
                  {
                  testtableData.map((tabledata, index) => (
                    <tr key={index} className="TableRow">
                      <td style={{ fontWeight: "normal" }} className="elements">
                        {tabledata.name}
                      </td>
                      <td style={{ fontWeight: "normal" }} className="elements">
                        {tabledata.ibmId}
                      </td>
                      <td style={{ fontWeight: "normal" }} className="elements">
                        {tabledata.location}
                      </td>
                      <td style={{ fontWeight: "normal" }} className="elements">
                        {tabledata.managerName}
                      </td>
                      <td style={{ fontWeight: "normal" }} className="elements">
                        {tabledata.role}
                      </td>
                      <td style={{ fontWeight: "normal" }} className="elements">
                        <button
                          style={{ border: "none" }}
                          onClick={() => handleEditClick(tabledata)}
                        >
                          <BiEditAlt />
                        </button>

                        {/* <BiEditAlt onClick={update} style={{cursor:'pointer'}}/> */}
                        {/* <Popup trigger={<BiEditAlt style={{cursor:'pointer'}}/></button>} contentStyle={{ width:'25%'}} position="left center" height='10%'> */}
                        
                        {/* </Popup> */}
                      </td>
                      <td style={{ fontWeight: "normal" }} className="elements">
                        <MdDeleteForever
                          onClick={() => handleDeleteClick(tabledata)}
                          // onClick={deleted}
                          style={{ cursor: "pointer" }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </center>
          </>
        </div>
        <Modal
                          isOpen={modalIsOpen}
                          onRequestClose={() => setModalIsOpen(false)}
                          style={{
                            content: {
                              position: "absolute",
                              top: "25%",
                              left: "35%",
                              width: "28%",
                              height: "65%",
                              backgroundColor: "#fff",
                              border: "1px solid #ccc",
                              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
                              textAlign: "center",
                            },
                          }}
                        >
                          {selectedRow && (
                            <form
                              className="form-style"
                              style={{ width: "97%", align: "center" }}
                              onSubmit={handleFormSubmit}
                            >
                              <center>
                                <h2>Edit Details</h2>
                              </center>
                              <br />
                              <input
                                className="formInput"
                                type="text"
                                name="name"
                                value={selectedRow.name}
                                placeholder="Name"
                                onChange={(e) =>
                                  setSelectedRow((prevRow) => ({
                                    ...prevRow,
                                    name: e.target.value,
                                  }))
                                }
                              />

                              <input
                                className="formInput"
                                type="text"
                                name="ibmId"
                                value={selectedRow.ibmId}
                                placeholder="W3id"
                                onChange={(e) =>
                                  setSelectedRow((prevRow) => ({
                                    ...prevRow,
                                    ibmId: e.target.value,
                                  }))
                                }
                              />

                              <select
                                name="location"
                                className="formInput"
                                value={selectedRow.location}
                                onChange={(e) =>
                                  setSelectedRow((prevRow) => ({
                                    ...prevRow,
                                    location: e.target.value,
                                  }))
                                }
                              >
                                <option value="Banglore">Bangalore</option>
                                <option value="Pune">Pune</option>
                                <option vale="Ahmedabad">Ahmedabad</option>
                                <option value="Japan">Japan</option>
                              </select>
                              <select
                                name="managerName"
                                value={selectedRow.managerName}
                                className="formInput"
                                onChange={(e) =>
                                  setSelectedRow((prevRow) => ({
                                    ...prevRow,
                                    managerName: e.target.value,
                                  }))
                                }
                              >
                                <option value="">Manager's Name</option>
                                <option value="Rajiv Madassery">
                                  Rajiv Madassery
                                </option>
                                <option value="Manoj Nair">Manoj Nair</option>
                                <option value="-">Others</option>
                              </select>
                              <select
                                name="role"
                                value={selectedRow.role}
                                className="formInput"
                                onChange={(e) =>
                                  setSelectedRow((prevRow) => ({
                                    ...prevRow,
                                    role: e.target.value,
                                  }))
                                }
                              >
                                <option value="">Designation</option>
                                <option value="Manager">Manager</option>
                                <option value="Team Lead">Team Lead</option>
                                <option value="Engineer">Engineer</option>
                                <option value="New Hire">New Hire</option>
                                <option value="Associate">Associate</option>
                                <option value="sp">sp</option>
                              </select>
                              
                                <input
                                  type="submit"
                                  className="submitButton"
                                  value="Update"
                                ></input> &nbsp;
                                <input
                                  type="submit"
                                  className="submitButton"
                                  value="Close"
                                ></input>
                            </form>
                          )}
                        </Modal>
      </div>
    </>
  );
}
// export default ManageAssociates;

export default ManageAssociates;
