import React,{useState} from "react";
import DatePicker from "react-datepicker";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import "./Calender.css";
import DaySchedule from "./DaySchedule";
import 'react-calendar/dist/Calendar.css';

const months = ['Jan', 'Feb' ,'Mar', 'Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

var yyyy_mm_dd = '';
function Calender(){
  
  const [date, setDate] = useState(new Date());
  <DaySchedule date={date} />
  function onChange(date){
    const yyyy = String(date).substring(11, 15);
    const dd = String(date).substring(8,10);
    const mm = String(date).substring(4,7);
    var mmm = String(months.indexOf(mm)+1);
  
    const zero = "0";
    if(mmm.length === 1)
    {
    
      mmm = zero.concat(mmm);
    }
    yyyy_mm_dd = (((yyyy.concat("-")).concat(mmm)).concat("-")).concat(dd);
    console.log(yyyy_mm_dd);
    console.log(date);
    setDate(date);
  }

  
  return(
    <>
    {/* <h4>{yyyy_mm_dd}</h4> */}
    <DatePicker  wrapperClassName="datePicker" selected={date} onChange={onChange} />
    <DaySchedule date={yyyy_mm_dd} />
    </>
  );
}

export default Calender;
