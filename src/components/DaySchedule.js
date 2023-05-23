// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './Holidays.css';
import Table from 'react-bootstrap/Table';

function DaySchedule()
{
    const shifts = [
        {
            date:"",
            shift:"Shift_name",
            associate:"Associate_name",
        },
        {
            date:"",
            shift:"Shift_name",
            associate:"Associate_name",
        },
        {
            date:"",
            shift:"Shift_name",
            associate:"Associate_name",
        },
        {
            date:"",
            shift:"Shift_name",
            associate:"Associate_name",
        },
        {
            date:"",
            shift:"Shift_name",
            associate:"Associate_name",
        },
        {
            date:"",
            shift:"Shift_name",
            associate:"Associate_name",
        },
        {
            date:"",
            shift:"Shift_name",
            associate:"Associate_name",
        },
        {
            date:"",
            shift:"Shift_name",
            associate:"Associate_name",
        },
        {
            date:"",
            shift:"Shift_name",
            associate:"Associate_name",
        }
        , {
            date:"",
            shift:"Shift_name",
            associate:"Associate_name",
        },
        {
            date:"",
            shift:"Shift_name",
            associate:"Associate_name",
        }
    ];
    const daySched = [
      {
        id :"1",
        shift : "Early Morning (5.30am - 1.30pm)",
        associate : "Liang Shi"
      },
      {
        id : "2",
        shift : "Morning Shift (7am  - 4pm)",
        associate : "Madhavi"
      },
      {
        id : "3",
        shift : "General Shift (11am - 6pm)",
        associate : "Roushan"
      },
       
      {
        id : "4",
        shift : "Afternoon Shift (1.30pm - 6pm)",
        associate : "Hari"
      },
     
      {
        id : "5",
        shift : "Manager on Duty",
        associate : "Rajiv"
      },
      {
        id : "6",
        shift : "Leave",
        associate : "Mounika"
      },
      {
        id : "7",
        shift : "Leave",
        associate : "Sheetal"
      },
   
    {
      id : "8",
      shift : "Skill Day",
      associate : "Ashima"
    },
     
      {
        id : "9",
        shift : "Shadowing",
        associate : "Swati"
      },
      {
        id : "10",
        shift : "Shadowing",
        associate : "Pallavi"
      },
    ];
    return(
        <>
       <div className='mainDivCenter'>
        {/* <h4 className='scheduleHeader m-auto'>Schedule for {props.date}</h4> */}
        <table className=' displayTable' >
      <thead>
        <tr className='TableRow'>
        <th className='TableHeader'></th>
          <th className='TableHeader'>Shift</th>
          <th className='TableHeader'>Associate</th>
        </tr>
      </thead>
      <tbody>

        {/* {shifts.map((s,index) => {
            <tr key={index}>
                <td>{s.shift}</td>
                <td>{s.associate}</td>
            </tr>
        })} */}
        
        {
          daySched.map((dS) => (
            <tr className='TableRow'>
              <td className='elements'style={{fontWeight:'normal'}}>{dS.id}</td>
              <td className='elements'>{dS.shift}</td>
              <td className='elements'style={{fontWeight:'normal'}}>{dS.associate}</td>
            </tr>
            
          ))
        }
        {/* <tr className='TableRow'>
          <td className='elements'style={{fontWeight:'normal'}}>1</td>
          <td className='elements' style={{fontWeight:'normal'}}>Shift_name</td>
          <td className='elements' style={{fontWeight:'normal'}}>Associate_name</td>
          
        </tr>
        <tr className='TableRow'>
          <td className='elements' style={{fontWeight:'normal'}}>2</td>
          <td className='elements' style={{fontWeight:'normal'}}>Shift_name</td>
          <td className='elements' style={{fontWeight:'normal'}}>Associate_name</td>
        </tr>
        <tr className='TableRow'>
          <td className='elements' style={{fontWeight:'normal'}}>3</td>
          <td className='elements' style={{fontWeight:'normal'}}>Shift_name</td>
          <td className='elements' style={{fontWeight:'normal'}}>Associate_name</td>
        </tr>
        <tr className='TableRow'>
          <td className='elements' style={{fontWeight:'normal'}}>4</td>
          <td className='elements' style={{fontWeight:'normal'}}>Shift_name</td>
          <td className='elements' style={{fontWeight:'normal'}}>Associate_name</td>
        </tr>
        <tr className='TableRow'>
          <td className='elements' style={{fontWeight:'normal'}}>5</td>
          <td className='elements' style={{fontWeight:'normal'}}>Shift_name</td>
          <td className='elements'style={{fontWeight:'normal'}}>Associate_name</td>
        </tr> */}
      </tbody>
    </table>
    </div>
        
        </>
    );
}

export default DaySchedule;