import React from "react";
import { useState } from "react";
// import NavBarGlobalAdmin from "../../components/NavBarGlobalAdmin";
import './Holidays.css';
import "../Pages/AdminView/adminStyling.css";
import DatePicker from "react-multi-date-picker";
import { MdDeleteForever } from "react-icons/md";
function LeavePlanComponent(){
  const temp=[];
  const [selectedDates, setSelectedDates] = useState([]);
  const [leaves, setLeaves] = useState({
          name: "",
          type: "",
          date: "",
          shift:'L'
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
            shift:'L'
          },
          {
            name: "Jyothi Priya Kalluri",
            type: "Casual Leave",
            date: "2023-05-18",
            shift:'L'
          },
          {
            name: "Abdul Shad",
            type: "Vacation",
            date: "2023-05-20",
            shift:'L'
          },
          {
            name: "Jophy Joe",
            type: "Sick Leave",
            date: "2023-05-26",
            shift:'L'
          },
        ]);
        function formChangehandler(e) {
          const name = e.target.name;
          const value = e.target.value;
          setLeaves({ ...leaves, [name]: value });
        }
        function leaveshandler(e) {
          e.preventDefault();
          for(var i=0;i<selectedDates.length;i++)
          {
            const date=new Date(selectedDates[i]).toLocaleDateString('en-CA');
            console.log(date)
            const obj={
              name:leaves.name,
              type:leaves.type,
              // date:selectedDates[i]
              date:new Date(selectedDates[i]).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }),
              shift:'L'
            }
            // console.log(obj)
            temp.push(obj)
            console.log(obj)
            setTableData([...tableData,...temp])
            // console.log("Table Data")
            // console.log(tableData)
          }
          console.log(temp)
        }
        const handleDeleteClick =(row) =>
        {
          console.log(row)
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
                      <select name="name"  className="formInput" onChange={formChangehandler} required>
                        <option value="">Name</option>
                        {emps.map((emp,index) => (
                          <option key={index} value={emp}>{emp}</option>
                        ))}
                      </select>
                      <select  className="formInput" name="type" onChange={formChangehandler} required>
                        <option value="">Leave Type</option>
                        <option value="Casual Leave">Casual Leave</option>
                        <option value="Sick Leave">Sick Leave</option>
                        <option value="vacation">Vacation</option>
                        <option valu="Off Queue">Off Queue</option>
                      </select>
                      <label>Select the dates</label>
                       <DatePicker value={selectedDates} onChange={(value) => setSelectedDates(value)} required/>
                      <br/><br/>
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
                        <th className="TableHeader">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((tabledata,index) => (
                        <tr key={index} className="TableRow">
                          <td style={{fontWeight:'normal'}} className="elements">{tabledata.name}</td>
                          <td style={{fontWeight:'normal'}} className="elements">{tabledata.type}</td>
                          <td style={{fontWeight:'normal'}} className="elements">{new Date(tabledata.date).toLocaleDateString(undefined, {day:'2-digit',month:'short',year:'numeric'})}</td>
                          <td className="elements"><MdDeleteForever onClick={() => handleDeleteClick(tabledata)} style={{ cursor: "pointer" }} /></td>
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