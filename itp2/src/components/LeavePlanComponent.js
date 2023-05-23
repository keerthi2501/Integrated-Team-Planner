import React from "react";
import { useState } from "react";
// import NavBarGlobalAdmin from "../../components/NavBarGlobalAdmin";
import './Holidays.css';
import "../Pages/AdminView/adminStyling.css";
function LeavePlanComponent(){
   
        const [leaves, setLeaves] = useState({
          name: "",
          type: "",
          date: "",
          comments: "",
        });
        const emps = [
          "Manoj Nair",
          "Tarun Singh",
          "Princy Katlana",
          "Jitendra Buge",
          "Nitin Darade",
          "Manish Jadhav",
          "Rahul Kajve",
          "Abhishek Khandagale",
          "Varada Kolhe",
          "Pradeep Pawar",
          "Suhas Phansalkar",
          "Jophy Joe",
          "Anuradha Narendra",
          "Rajiv Madassery",
          "Ashima Singhal",
          "Shreyashi Bhowmick",
          "Roushan Kumar",
          "Samarpita Pattnaik",
          "Mounika Grandhi",
          "Madhavi Pilaka",
          "Abdul Shad",
          "Hariprasad AS",
          "Sheetal Shreya",
          "Pallavi Sinha",
          "Nalla Swathi Rekha",
          "Jyothi Priya Kalluri",
          "Manoj Kumar Goyal",
          "Shantanu Singh",
          "Sushmita Gour",
          "Mitrajsinh Jadeja",
          "Dhruti Badiani",
          "Urja Rajpara",
          "Liang Shi",
        ];
        const [tableData, setTableData] = useState([
          {
            name: "Dhruti Badiani",
            type: "Sick Leave",
            date: "2023-05-11",
            comments: "Viral Infection",
          },
          {
            name: "Jyothi Priya Kalluri",
            type: "Casual Leave",
            date: "2023-05-18",
            comments: "Personal work",
          },
          {
            name: "Abdul Shad",
            type: "Vacation",
            date: "2023-05-20",
            comments: "-",
          },
          {
            name: "Jophy Joe",
            type: "Sick Leave",
            date: "2023-05-26",
            comments: "Personal",
          },
        ]);
        function formChangehandler(e) {
          const name = e.target.name;
          const value = e.target.value;
          setLeaves({ ...leaves, [name]: value });
        }
        function leaveshandler(e) {
          e.preventDefault();
          console.log(leaves);
          setTableData([...tableData, leaves]);
        }
        return (
          <>
            {/* <NavBarGlobalAdmin /> */}
            <div className="mainDiv">
              <div className="leftColumn">
               
                  
                    
                    <form className="inputForm" onSubmit={leaveshandler}>
                    <center>
                    <h2 className="formHeader">Apply For a leave</h2>
                    </center>
                      <select name="name"  className="formInput" onChange={formChangehandler}>
                        <option>Name</option>
                        {emps.map((emp) => (
                          <option value={emp}>{emp}</option>
                        ))}
                      </select>
                      <select  className="formInput" name="type" onChange={formChangehandler}>
                        <option>Leave Type</option>
                        <option value="Casual Leave">Casual Leave</option>
                        <option value="Sick Leave">Sick Leave</option>
                        <option value="vacation">Vacation</option>
                        <option value="offQ">Off Queue</option>
                        {/* <option valu="others">Other</option> */}
                      </select>
                      {/* <input type="text" placeholder="Leave Type" value={leaves.type} name="type" onChange={formChangehandler}></input> */}
                      <input
                        type="date"
                        className="formInput"
                        placeholder="Date"
                        value={leaves.to_date}
                        name="date"
                        onChange={formChangehandler}
                      ></input>
                      <input
                        type="text"
                        className="formInput"
                        placeholder="Comments (if any)"
                        value={leaves.comments}
                        name="comments"
                        onChange={formChangehandler}
                      ></input>
                      <center>
                      <input className="submitButton" type="submit" value="Apply"></input>
                    </center>
                    </form>
                  
             
              </div>
              <div className="rightColumn" style={{ height: 100 + "vh" }}>
                <center>
                  {/* <br /> */}
                  <h2 className="tableTitle">CURRENT LEAVE PLANS</h2>
                 <br></br>
                  <table className="associateTable">
                    <thead>
                      <tr className="TableRow">
                        <th className="TableHeader">Associate Name</th>
                        <th className="TableHeader">Leave Type</th>
                        <th className="TableHeader">Date</th>
                        <th className="TableHeader">Comments</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((tabledata) => (
                        <tr className="TableRow">
                          <td style={{fontWeight:'normal'}} className="elements">{tabledata.name}</td>
                          <td style={{fontWeight:'normal'}} className="elements">{tabledata.type}</td>
                          <td style={{fontWeight:'normal'}} className="elements">{tabledata.date}</td>
                          <td style={{fontWeight:'normal'}} className="elements">{tabledata.comments}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </center>
              </div>
            </div>
          </>
        );
      }
export default LeavePlanComponent;