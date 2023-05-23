import './Holidays.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
export default function Holidays() {
  const holidays = [
    {
      location: "Bangalore,Pune",
      date: "22-MAR-2023",
      day: "Wednesday",
      type: "Ugadi/Gudi Padva",
    },
    {
      location: "Bangalore,Pune,Ahmedabad",
      date: "01-MAY-20223",
      day: "Monday",
      type: "May Day",
    },
    {
      location: "Bangalore,Pune,Ahmedabad",
      date: "29-JUN-2023",
      day: "Thursday",
      type: "Bakrid",
    },
    {
      location: "Bangalore,Pune,Ahmedabad",
      date: "15-AUG-2023",
      day: "Tuesday",
      type: "Independence day",
    },
    {
      location: "Bangalore",
      date: "01-NOV-2023",
      day: "Wednesday",
      type: "Kannada Rajyotsava",
    },
    {
      location: "Ahmedabad",
      date: "13-NOV-2023",
      day: "Monday",
      type: "Vikram Samvat New Year",
    },
    {
      location: "Japan",
      date: "23-NOV-2023",
      day: "Thursday",
      type: "Labour Thanksgiving day",
    },
  ];
// marginLeft:600,marginTop:25
  return (
    <div className=''>
      <h2 className='' style={{ marginLeft:750,marginTop:20}}>List of Holidays</h2>
      <div className='' style={{marginLeft:800}}>For the year 2023</div>
      <br></br>
      <center>
        <table className='displayTable'>
          <thead>
            <tr className='TableRow'>
              
              <th className='TableHeader'>Date</th>
              <th className='TableHeader'>Day</th>
              <th className='TableHeader'>Type of Holiday</th>
              <th className='TableHeader'>Location</th>
            </tr>
          </thead>
          <tbody>
            {holidays.map((item,index) => (
              <tr key={index} className='TableRow'>
                
                <td className='elements' style={{fontWeight:'normal'}}> {item.date} </td>
                <td className='elements' style={{fontWeight:'normal'}}>{item.day}</td>
                <td className='elements' style={{fontWeight:'normal'}}> {item.type} </td>
                <td className='elements' style={{fontWeight:'normal'}}> {item.location} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
}