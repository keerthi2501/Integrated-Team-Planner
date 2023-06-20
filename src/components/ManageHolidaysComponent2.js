import React, { useEffect } from "react";
import * as Ai from "react-icons/ai";
import '../components/Holidays.css';
import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
// import { Calendar } from "react-multi-date-picker/plugins";
import Modal from 'react-modal';
import axios from "axios";

function ManageHolidaysTest()
{
        useEffect(()=>
        {
          loadHolidays();
        },[])

        // const loadCourses=async()=>
        async function loadHolidays()
        {
          const testHolidays=axios.get("http://localhost:8081/ITP/holidayList")
          console.log("From axios")
          console.log((await testHolidays).data);
        }

        const [formData, setFormData] = useState({
        date: '',
        type: '',
        day:'',
        Banglore:'',
        Pune:'',
        Ahmedabad:'',
        Japan:''
      });
      const editedValues=[];
      const [modalIsOpen, setModalIsOpen] = useState(false);
      const [selectedRow, setSelectedRow] = useState("");
    // const [tableData, setTableData] = useState([
    //         {Banglore:'on',Pune:'on',Ahmedabad:'',Japan:'', date:'22-MAR-2023', day:'Wednesday',type:'Ugadi/Gudi Padva'},
    //         {Banglore:'on',Pune:'on',Ahmedabad:'on',Japan:'', date:'01-MAY-2023', day:'Monday',type:'May Day'},
    //         {Banglore:'on',Pune:'on',Ahmedabad:'on',Japan:'', date:'29-JUN-2023', day:'Thursday',type:'Bakrid'},
    //         {Banglore:'on',Pune:'on',Ahmedabad:'on',Japan:'', date:'15-AUG-2023', day:'Tuesday',type:'Independence day'},
    //         {Banglore:'',Pune:'',Ahmedabad:'on',Japan:'', date:'13-NOV-2023', day:'Monday',type:'Vikram Samvat New Year'},
    //         {Banglore:'',Pune:'',Ahmedabad:'',Japan:'on', date:'23-NOV-2023', day:'Thursday',type:'Labour Thanksgiving day'},
    //         {Banglore:'on',Pune:'',Ahmedabad:'',Japan:'', date:'01-NOV-2023', day:'Wednesday',type:'Kannada Rajyotsava'},
    //         {
    //           "date": "01 May 2023",
    //           "day": "Monday",
    //           "type": "May Day",
    //           "Banglore": "on",
    //           "Pune": "on",
    //           "Ahmedabad": "on"
    //       }
    //         ]);

            const testdata=[
                {type:'Ugadi/Padva',date:'03/22/2023',location:'Banglore',holidayType:'H'},
                {type:'Ugadi/Padva',date:'03/22/2023',location:'Pune',holidayType:'H'},
                {type:'May Day',date:'05/01/2023',location:'Banglore',holidayType:'H'},
                {type:'May Day',date:'05/01/2023',location:'Pune',holidayType:'H'},
                {type:'May Day',date:'05/01/2023',location:'Ahmedabad',holidayType:'H'},
                {type:'Bakrid',date:'06/29/2023',location:'Banglore',holidayType:'H'},
                {type:'Bakrid',date:'06/29/2023',location:'Pune',holidayType:'H'},
                {type:'Bakrid',date:'06/29/2023',location:'Ahmedabad',holidayType:'H'}
                // {
                //     type:'',
                //     date:'',
                //     location:''
                // }
            ]
            const [result,setResult]=useState([{Banglore:'on',Pune:'on',Ahmedabad:'',Japan:'', date:'22-MAR-2023', day:'Wednesday',type:'Ugadi/Gudi Padva'},
            {Banglore:'on',Pune:'on',Ahmedabad:'on',Japan:'', date:'01-MAY-2023', day:'Monday',type:'May Day'},
            {Banglore:'on',Pune:'on',Ahmedabad:'on',Japan:'', date:'29-JUN-2023', day:'Thursday',type:'Bakrid'},
            {Banglore:'on',Pune:'on',Ahmedabad:'on',Japan:'', date:'15-AUG-2023', day:'Tuesday',type:'Independence day'},
            {Banglore:'on',Pune:'',Ahmedabad:'',Japan:'', date:'01-NOV-2023', day:'Wednesday',type:'Kannada Rajyotsava'},
            {Banglore:'',Pune:'',Ahmedabad:'on',Japan:'', date:'13-NOV-2023', day:'Monday',type:'Vikram Samvat New Year'},
            {Banglore:'',Pune:'',Ahmedabad:'',Japan:'on', date:'23-NOV-2023', day:'Thursday',type:'Labour Thanksgiving day'},
            ]);
            function HolidayJSONformater()
            {
              const output = testdata.reduce(function(result, item) {
                const type = item.type;
                const date = item.date;
                const location = item.location;
                const formattedDate = new Date(date);
                const key = formattedDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
              
                if (!result[key]) {
                  result[key] = { date: key, day: formattedDate.toLocaleDateString('en-GB', { weekday: 'long' }), type };
                }
                result[key][location] = 'on';
                return result;
              },[]);
              
              const finalOutput = Object.values(output);
              
              console.log("Formated JSON to populate the table of the UI")
              console.log(finalOutput);
              setResult(finalOutput);
            }

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
                location:'Banglore',
                holidayType:'H'
              }
                testdata.push(obj)
                // setTestData(...testdata,obj)
            }
            if(formData.Pune==='on')
            {
                const obj={
                type:formData.type,
                date:formData.date,
                location:'Pune',
                holidayType:'H'}
                testdata.push(obj)
                // setTestData(...testdata,obj)
            }
            if(formData.Ahmedabad==='on')
            {
                const obj={
                type:formData.type,
                date:formData.date,
                location:'Ahmedabad',
                holidayType:'H'}
                testdata.push(obj)
                // setTestData(...testdata,obj)
            }
            if(formData.Japan==='on')
            {
                const obj={
                type:formData.type,
                date:formData.date,
                location:'Japan',
                holidayType:'H'}
                testdata.push(obj)
                // setTestData(...testdata,obj)
            }
            console.log("JSON to the db")
            console.log(testdata)
            // setTableData([...tableData,formData])
            // console.log(formData);
            // console.log(tableData);
            HolidayJSONformater();
        }
    const handleEditClick = (row) => {
        // alert("ok")
        setSelectedRow(row);
        setModalIsOpen(true);
      };

    function handleEditFormSubmit(event)
    {
      event.preventDefault();
      // Process the form data or update the state as needed
      console.log("selected row")
      console.log(selectedRow);
      if(selectedRow.Banglore==="on")
      {
        editedValues.push({'type':selectedRow.type,'date':selectedRow.date,'location':'Banglore','holidayType':'H'})
      }
      if(selectedRow.Pune==="on")
      {
        editedValues.push({'type':selectedRow.type,'date':selectedRow.date,'location':'Pune','holidayType':'H'})
      }
      if(selectedRow.Ahmedabad==="on")
      {
        editedValues.push({'type':selectedRow.type,'date':selectedRow.date,'location':'Ahmedabad','holidayType':'H'})
      }
      if(selectedRow.Japan==="on")
      {
        editedValues.push({'type':selectedRow.type,'date':selectedRow.date,'location':'Japan','holidayType':'H'})
      }
      setModalIsOpen(false);
      console.log("editedValues");
      console.log(editedValues);
    }
    function deleted()
    {
      alert("Are you sure ?");
    }
  return (
    <div className="mainDiv" style={{ height: 100 + "vh" }}>
    <div className="leftColumn" style={{ height: 100 + "vh" }}>
                    <form className="inputForm" onSubmit={HolidaydataHandler}>
                        <center><h2 className="formHeader">Add a New Holiday</h2></center><br/>
                        <input className="formInput" type="text" name="type" value={formData.type} placeholder="Holiday Type" onChange={formChangehandler} required/>
                        <input className="formInput"  type="date" name="date" value={formData.date} placeholder="Date" onChange={formChangehandler} required/>
                        {/* <select className="formInput" name="day" onChange={formChangehandler}>
                          <option>Day</option>
                          <option value="Monday">Monday</option>
                          <option value="Tuesday">Tuesday</option>
                          <option value="Wednesday">Wednesday</option>
                          <option value="Thrusday">Thursday</option>
                          <option value="Friday">Friday</option>
                        </select> */}
                        <label style={{ display: "flex", alignItems: "center" }}>
                        <input type="checkbox" name="Banglore" checked={formData.Banglore} onChange={formChangehandler}></input> &nbsp;
                        Banglore
                        </label>
                        <label style={{ display: "flex"}}>
                        <input type="checkbox" name="Pune" checked={formData.Pune} onChange={formChangehandler}></input>&nbsp;
                        Pune
                        </label>
                        <label style={{ display: "flex"}}>
                        <input type="checkbox" name="Ahmedabad" checked={formData.Ahmedabad} onChange={formChangehandler}></input>&nbsp;
                        Ahmedabad
                        </label>
                        <label style={{ display: "flex"}}>
                        <input type="checkbox" name="Japan" checked={formData.Japan} onChange={formChangehandler}></input>&nbsp;
                        Japan
                        </label><br/>
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
        {result.map((item,index)=>(
          <tr key={index} className="TableRow">
          <td className="elements">{item.type}</td>
          <td className="elements">{new Date(item.date).toLocaleDateString(undefined, {day:'2-digit',month:'short',year:'numeric'})}</td>
          <td className="elements">{new Date(item.date).toLocaleDateString(undefined, {weekday: 'long'})}</td>
          {item.Banglore==='on'?(<td className="elements" style={{align:'center',width:50+'px'}}><Ai.AiOutlineCheck /></td>):(<td className="elements" ></td>)}
          {item.Pune==='on'?(<td className="elements" style={{align:'center',width:50+'px'}}><Ai.AiOutlineCheck /></td>):(<td className="elements" ></td>)}
          {item.Ahmedabad==='on'?(<td className="elements" style={{align:'center',width:50+'px'}}><Ai.AiOutlineCheck /></td>):(<td className="elements" ></td>)}
          {item.Japan==='on'?(<td className="elements" style={{align:'center',width:50+'px'}}><Ai.AiOutlineCheck /></td>):(<td className="elements"></td>)}
          <td style={{fontWeight:'normal'}} className="elements">
          <button style={{border:'none'}} onClick={() => handleEditClick(item)}><BiEditAlt/></button>
                    </td>
                    <td style={{fontWeight:'normal'}} className="elements">
                        <MdDeleteForever onClick={deleted} style={{cursor:'pointer'}}/>
                    </td>
          </tr>
        ))}
    </tbody>
    </table>
    </center>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={()=>setModalIsOpen(false)}
      style={{
        content: {
          position: 'absolute',
          top: '25%',
          left: '35%',
          width: '28%',
          height: '50%',
          backgroundColor: '#fff',
          border: '1px solid #ccc',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
          textAlign:'center',
        },
      }}
      >
        {selectedRow && (<form className="form-style" onSubmit={handleEditFormSubmit} style={{width:'97%',align:'center'}}>
          <h2>Edit Details</h2>
          <input className="formInput" type="text" value={selectedRow.type} 
                onChange={(e) => setSelectedRow((prevRow) => ({...prevRow,type: e.target.value })) }>
          </input>

          <input className="formInput" type="date" value={new Date(selectedRow.date).toLocaleDateString('en-CA')} 
                onChange={(e) => setSelectedRow((prevRow) => ({...prevRow,date: e.target.value })) }>
          </input>

          <label style={{ display: "flex", alignItems: "center" }}>
                        <input type="checkbox" name="Banglore" checked={selectedRow.Banglore} 
                        onChange={(e) => setSelectedRow((prevRow) => ({...prevRow,Banglore: e.target.value })) }></input>
                        Banglore
                        </label>

                        <label style={{ display: "flex"}}>
                        <input type="checkbox" name="Pune" checked={selectedRow.Pune} 
                        onChange={(e) => setSelectedRow((prevRow) => ({...prevRow,Pune: e.target.value })) }></input>
                        Pune
                        </label>

                        <label style={{ display: "flex"}}>
                        <input type="checkbox" name="Ahmedabad" checked={selectedRow.Ahmedabad}
                        onChange={(e) => setSelectedRow((prevRow) => ({...prevRow,Ahmedabad: e.target.value })) }></input>
                        Ahmedabad
                        </label>

                        <label style={{ display: "flex"}}>
                        <input type="checkbox" name="Japan" checked={selectedRow.Japan} 
                        onChange={(e) => setSelectedRow((prevRow) => ({...prevRow,Japan: e.target.value })) }></input>
                        Japan
                        </label><br/>

           <input type="submit" value="Update"></input> &nbsp;
           <input type="submit" value="close"></input>
        </form>)}

    </Modal>
    </div>
    </div>
  );
}
export default ManageHolidaysTest;