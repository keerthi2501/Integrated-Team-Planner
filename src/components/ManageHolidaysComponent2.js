import React from "react";
import * as Ai from "react-icons/ai";
import '../components/Holidays.css';
import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
// import { Calendar } from "react-multi-date-picker/plugins";
function ManageHolidaysTest()
{
        const [formData, setFormData] = useState({
        date: '',
        type: '',
        day:'',
        Banglore:'',
        Pune:'',
        Ahmedabad:'',
        Japan:''
      });
    const [tableData, setTableData] = useState([
            {Banglore:'on',Pune:'on',Ahmedabad:'',Japan:'', date:'22-MAR-2023', day:'Wednesday',type:'Ugadi/Gudi Padva'},
            {Banglore:'on',Pune:'on',Ahmedabad:'on',Japan:'', date:'01-MAY-2023', day:'Monday',type:'May Day'},
            {Banglore:'on',Pune:'on',Ahmedabad:'on',Japan:'', date:'29-JUN-2023', day:'Thursday',type:'Bakrid'},
            {Banglore:'on',Pune:'on',Ahmedabad:'on',Japan:'', date:'15-AUG-2023', day:'Tuesday',type:'Independence day'},
            {Banglore:'',Pune:'',Ahmedabad:'on',Japan:'', date:'13-NOV-2023', day:'Monday',type:'Vikram Samvat New Year'},
            {Banglore:'',Pune:'',Ahmedabad:'',Japan:'on', date:'23-NOV-2023', day:'Thursday',type:'Labour Thanksgiving day'},
            {Banglore:'on',Pune:'',Ahmedabad:'',Japan:'', date:'01-NOV-2023', day:'Wednesday',type:'Kannada Rajyotsava'},
            ]);

            const testdata=[
                {type:'Ugadi/Padva',date:'03/22/2023',location:'Banglore'},
                {type:'Ugadi/Padva',date:'03/22/2023',location:'Pune'},
                {type:'May Day',date:'05/01/2023',location:'Banglore'},
                {type:'May Day',date:'05/01/2023',location:'Pune'},
                {type:'May Day',date:'05/01/2023',location:'Ahmedabad'},
                {type:'Bakrid',date:'06/29/2023',location:'Banglore'},
                {type:'Bakrid',date:'06/29/2023',location:'Pune'},
                {type:'Bakrid',date:'06/29/2023',location:'Ahmedabad'}
                // {
                //     type:'',
                //     date:'',
                //     location:''
                // }
            ]
        function formChangehandler(e){
            const name=e.target.name;
            const value=e.target.value;
            setFormData({...formData,[name]:value});
            // console.log(formData)
        }
        function HolidaydataHandler(e){
            e.preventDefault();
            if(formData.Banglore==='on')
            {
                const obj={
                type:formData.type,
                date:formData.date,
                location:'Banglore'}
                testdata.push(obj)
                // setTestData(...testdata,obj)
            }
            if(formData.Pune==='on')
            {
                const obj={
                type:formData.type,
                date:formData.date,
                location:'Pune'}
                testdata.push(obj)
                // setTestData(...testdata,obj)
            }
            if(formData.Ahmedabad==='on')
            {
                const obj={
                type:formData.type,
                date:formData.date,
                location:'Ahmedabad'}
                testdata.push(obj)
                // setTestData(...testdata,obj)
            }
            if(formData.Japan==='on')
            {
                const obj={
                type:formData.type,
                date:formData.date,
                location:'Japan'}
                testdata.push(obj)
                // setTestData(...testdata,obj)
            }
            console.log("testdata")
            console.log(testdata)
            setTableData([...tableData,formData])
            // console.log(formData);
            // console.log(tableData);
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
                        <input type="checkbox" name="Banglore" checked={formData.Banglore} onChange={formChangehandler}></input>
                        Banglore
                        </lable>
                        <lable style={{ display: "flex"}}>
                        <input type="checkbox" name="Pune" checked={formData.Pune} onChange={formChangehandler}></input>
                        Pune
                        </lable>
                        <lable style={{ display: "flex"}}>
                        <input type="checkbox" name="Ahmedabad" checked={formData.Ahmedabad} onChange={formChangehandler}></input>
                        Ahmedabad
                        </lable>
                        <lable style={{ display: "flex"}}>
                        <input type="checkbox" name="Japan" checked={formData.Japan} onChange={formChangehandler}></input>
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
          <td className="elements">{new Date(item.date).toLocaleDateString(undefined, {day:'2-digit',month:'short',year:'numeric'})}</td>
          <td className="elements">{new Date(item.date).toLocaleDateString(undefined, {weekday: 'long'})}</td>
          {item.Banglore=='on'?(<td className="elements" style={{align:'center',width:50+'px'}}><Ai.AiOutlineCheck /></td>):(<td className="elements" ></td>)}
          {item.Pune=='on'?(<td className="elements" style={{align:'center',width:50+'px'}}><Ai.AiOutlineCheck /></td>):(<td className="elements" ></td>)}
          {item.Ahmedabad=='on'?(<td className="elements" style={{align:'center',width:50+'px'}}><Ai.AiOutlineCheck /></td>):(<td className="elements" ></td>)}
          {item.Japan=='on'?(<td className="elements" style={{align:'center',width:50+'px'}}><Ai.AiOutlineCheck /></td>):(<td className="elements"></td>)}
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
export default ManageHolidaysTest;