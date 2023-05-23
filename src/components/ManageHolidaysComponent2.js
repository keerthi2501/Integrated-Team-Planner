import React from "react";
import * as Ai from "react-icons/ai";
import '../components/Holidays.css';
import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
function ManageHolidaysComponent()
{
    const [formData, setFormData] = useState({
        day:'',
        date: '',
        type: ''
      });
    const [tableData, setTableData] = useState([
            {Banglore:'yes',Pune:'yes',Ahmedabad:'no',Japan:'no', date:'22-MAR-2023', day:'Wednesday',type:'Ugadi/Gudi Padva'},
            {Banglore:'yes',Pune:'yes',Ahmedabad:'yes',Japan:'no', date:'01-MAY-2023', day:'Monday',type:'May Day'},
            {Banglore:'yes',Pune:'yes',Ahmedabad:'yes',Japan:'no', date:'29-JUN-2023', day:'Thursday',type:'Bakrid'},
            {Banglore:'yes',Pune:'yes',Ahmedabad:'yes',Japan:'no', date:'15-AUG-2023', day:'Tuesday',type:'Independence day'},
            {Banglore:'no',Pune:'no',Ahmedabad:'yes',Japan:'no', date:'13-NOV-2023', day:'Monday',type:'Vikram Samvat New Year'},
            {Banglore:'no',Pune:'no',Ahmedabad:'no',Japan:'yes', date:'23-NOV-2023', day:'Thursday',type:'Labour Thanksgiving day'},
            {Banglore:'yes',Pune:'no',Ahmedabad:'no',Japan:'no', date:'01-NOV-2023', day:'Wednesday',type:'Kannada Rajyotsava'},
            ]);
    
        const [checkboxValues,setCheckboxvalue]=useState({});
        const [locations,setLocations]=useState([]);
        function formChangehandler(e){
            const name=e.target.name;
            const value=e.target.value;
            // const loc=e.target.location;
            // locations.push(loc);
            // console.log(locations)
            setFormData({...formData,[name]:value});
            console.log(locations)
            for(var i=0;i<locations.length;i++)
            {
              console.log(locations)
              const loc=locations[i];
              setTableData([{...formData,['location']:loc}]);
            }
            // console.log(formData);
        }
        
        function HolidaydataHandler(e){
            e.preventDefault();
            setTableData([...tableData,formData])
            console.log(formData);
            console.log(tableData);
        }
        
        function checkboxHandler(e){
            const name=e.target.name;
            setLocations(...locations,name);
            // locations.push(name);
            console.log(locations)
        }

        
  return (
    <div className="mainDiv" style={{ height: 100 + "vh" }}>
    <div className="leftColumn" style={{ height: 100 + "vh" }}>
                    <form className="inputForm" onSubmit={HolidaydataHandler}>
                        <center><h2 className="formHeader">Add a New Holiday</h2></center><br/>
                        <input className="formInput" type="text" name="type" value={formData.type} placeholder="Holiday Type" onChange={formChangehandler}/>
                        <input className="formInput"  type="date" name="date" value={formData.date} placeholder="Date" onChange={formChangehandler}/>
                        {/* <select className="formInput" name="day" onChange={formChangehandler}>
                          <option>Day</option>
                          <option value="Monday">Monday</option>
                          <option value="Tuesday">Tuesday</option>
                          <option value="Wednesday">Wednesday</option>
                          <option value="Thrusday">Thursday</option>
                          <option value="Friday">Friday</option>
                        </select> */}
                        <lable style={{ display: "flex", alignItems: "center" }}>
                        <input type="checkbox" name="Banglore" checked={checkboxValues.Banglore} onChange={checkboxHandler}></input>
                        Banglore
                        </lable>
                        <lable style={{ display: "flex"}}>
                        <input type="checkbox" name="Pune" checked={checkboxValues.Pune} onChange={checkboxHandler}></input>
                        Pune
                        </lable>
                        <lable style={{ display: "flex"}}>
                        <input type="checkbox" name="Ahmedabad" checked={checkboxValues.Ahmedabadh} onChange={checkboxHandler}></input>
                        Ahmedabad
                        </lable>
                        <lable style={{ display: "flex"}}>
                        <input type="checkbox" name="Japan" checked={checkboxValues.Japan} onChange={checkboxHandler}></input>
                        Japan
                        </lable><br/>
                        {/* <input type="text" name="location" value={formData.location} placeholder="Locations" onChange={checkboxHandler}/> */}
                        <center><input type="submit" value="Add"/></center>
                    </form>
    </div>
    <div className="rightColumn " style={{ height: 100 + "vh" }}>
    <center>
      {/* <br/> */}
      <h2 className="tableTitle">LIST OF HOLIDAYS</h2>
      <br/>
    <table className="associateTable">
    <thead>
      <tr className="TableRow">
      <th className="TableHeader">Holiday Type</th>
        <th className="TableHeader">Date</th>
        <th className="TableHeader">Day</th>
        {/* <th className="TableHeader">Location</th> */}
        <th className="TableHeader" style={{textAlign:'center'}}>Bangalore</th>
        <th className="TableHeader" style={{textAlign:'center'}}>Pune</th>
        <th className="TableHeader" style={{textAlign:'center'}}>Ahmedabad</th>
        <th className="TableHeader" style={{textAlign:'center'}}>Japan</th>
        <th className="TableHeader" colSpan={2} style={{textAlign:'center'}}>
            Actions
        </th>
      </tr>
    </thead>
    <tbody>
        {tableData.map((item)=>(
          <tr className="TableRow">
          <td className="elements">{item.type}</td>
          <td className="elements">{item.date}</td>
          <td className="elements">{item.day}</td>
          {item.Banglore==='yes'?(<td className="elements" style={{align:'center',width:50+'px'}}><Ai.AiOutlineCheck /></td>):(<td className="elements" ></td>)}     
          {item.Pune==='yes'?(<td className="elements" style={{align:'center',width:50+'px'}}><Ai.AiOutlineCheck /></td>):(<td className="elements" ></td>)}     
          {item.Ahmedabad==='yes'?(<td className="elements" style={{align:'center',width:50+'px'}}><Ai.AiOutlineCheck /></td>):(<td className="elements" ></td>)}     
          {item.Japan==='yes'?(<td className="elements" style={{align:'center',width:50+'px'}}><Ai.AiOutlineCheck /></td>):(<td className="elements"></td>)}     
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
    </div>
    </div>
  );
}

export default ManageHolidaysComponent;