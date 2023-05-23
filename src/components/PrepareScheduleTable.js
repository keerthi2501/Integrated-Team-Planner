
import "./PrepareScheduleTable.css";

import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import ViewSchedule from "../../Pages/ViewSchedule";
// import "../PrepareShift/Table.css";

export default function PrepareScheduleTable() {
  document.title = "Prepare Schedule";
  // const validations = ["EM", "M", "G","A","W","SD","L","H","MD","S"];
   //month dropdown
 const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth()+1 );
 const [selectedYear, setSelectedYear] = useState('2023');
  const m = selectedMonth-1;
  const y = selectedYear;
  const days = new Date(y, m + 1, 0).getDate();
  console.log(days);
  const daysArray = [];
  const daysArr = [];

  for (var k = 1; k <= days; k++) {
    const currDate = new Date(y, m, k);
    const dateStr = currDate.toLocaleDateString("en-US", { day: "2-digit" });
    // , { day: "numeric" }
    const dayOfWeek = currDate.toLocaleDateString("en-US", {
      weekday: "narrow",
    });

    daysArray.push(dateStr);
    daysArr.push(dayOfWeek);
  }
  // const months = [
  //   "Jan",
  //   "Feb",
  //   "Mar",
  //   "Apr",
  //   "May",
  //   "Jun",
  //   "July",
  //   "Aug",
  //   "Sep",
  //   "Oct",
  //   "Nov",
  //   "Dec",
  // ];
  function WeekendCSS() {
    var CIs = [];
    const dates = document.querySelectorAll(".days");
    dates.forEach((date) => {
      if (date.innerHTML.indexOf("S") !== -1)
        // date.innerHTML.includes("Sat")
       {
        var ci = date.cellIndex;
        CIs.push(ci);
        
      }
    })
    console.log(CIs);
    const datesCSS = document.querySelectorAll(".dates");
    datesCSS.forEach((date) => {
      var c = date.cellIndex;
      if(CIs.includes(c)){
        date.classList.add("weekends");
      }
    })
   
    const boxes = document.querySelectorAll(".cells");

    for (var i = 0; i < CIs.length; i++) {
      boxes.forEach((box) => {
        var c = box.cellIndex;
        // console.log(c);
        if (CIs.includes(c)) {
          // box.classList.add("cells");
          box.classList.add("weekends");
        }
      });

      const ddays = document.querySelectorAll(".days");
      for ( i = 0; i < CIs.length; i++) {
        ddays.forEach((box) => {
          var c = box.cellIndex;
          if (CIs.includes(c)) {
            // box.classList.add("cells");
            box.classList.add("weekends");
          } else {
            box.classList.add("weekdays");
          }
        });
      }
      const ddates = document.querySelectorAll(".dates");
      for ( i = 0; i < CIs.length; i++) {
        ddates.forEach((box) => {
          var c = box.cellIndex;
          if (CIs.includes(c)) {
            // box.classList.add("cells");
            box.classList.add("weekends");
          } else {
            box.classList.add("weekdays");
          }
        });
      }
    }
  }
  useEffect(() => {
    //Mark Holiday Colours (Sat & Sun) //Inside useeffect
    WeekendCSS();

    // /Colour code location wise //useeffect
    const emps = document.querySelectorAll(".city");
    emps.forEach((emp) => {
      if (
        emp.innerHTML === "Rajiv Madassery (BLR)" ||
        emp.innerHTML === "Ashima Singhal" ||
        emp.innerHTML === "Shreyashi Bhowmick" ||
        emp.innerHTML === "Roushan Kumar" ||
        emp.innerHTML === "Samarpita Pattnaik" ||
        emp.innerHTML === "Mounika Grandhi" ||
        emp.innerHTML === "Madhavi Pilaka" ||
        emp.innerHTML === "Abdul Shad" ||
        emp.innerHTML === "Hariprasad AS" ||
        emp.innerHTML === "Sheetal Shreya" ||
        emp.innerHTML === "Pallavi Sinha" ||
        emp.innerHTML === "Nalla Swathi Rekha" ||
        emp.innerHTML === "Jyothi Priya Kalluri"
      ) {
        emp.classList.add("bangalore");
      }
      if (
        emp.textContent === "Manoj Nair (PUN)" ||
        emp.textContent === "Tarun Singh" ||
        emp.textContent === "Princy Katlana" ||
        emp.textContent === "Jitendra Buge" ||
        emp.textContent === "Nitin Darade" ||
        emp.textContent === "Manish Jadhav" ||
        emp.textContent === "Rahul Kajve" ||
        emp.textContent === "Abhishek Khandagale" ||
        emp.textContent === "Varada Kolhe" ||
        emp.textContent === "Pradeep Pawar" ||
        emp.textContent === "Suhas Phansalkar" ||
        emp.textContent === "Jophy Joe" ||
        emp.textContent === "Anuradha Narendra"
      ) {
        emp.classList.add("pune");
      }
      if (
        emp.textContent === "Manoj Kumar Goyal (AHM)" ||
        emp.textContent === "Shantanu Singh" ||
        emp.textContent === "Sushmita Gour" ||
        emp.textContent === "Mitrajsinh Jadeja" ||
        emp.textContent === "Dhruti Badiani" ||
        emp.textContent === "Urja Rajpara"
      ) {
        emp.classList.add("ahmedabad");
      }
      if (emp.textContent === "Liang Shi (JPN)") {
        emp.classList.add("japan");
      }
    });
  });

  const employees = [
    "Liang Shi (JPN)",
    "Rajiv Madassery (BLR)",
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
    "Manoj Nair (PUN)",
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
    "Manoj Kumar Goyal (AHM)",
    "Shantanu Singh",
    "Sushmita Gour",
    "Mitrajsinh Jadeja",
    "Dhruti Badiani",
    "Urja Rajpara",
  ];

  const [btnState, bSelectedState] = useState("");

  function clickHandler(value) {
    bSelectedState(value);
  }
  // get all buttons
  const buttons = document.querySelectorAll(".btn");

  // add event listener to each button
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // remove "clicked" state from all buttons
      buttons.forEach((button) => {
        button.classList.remove("clicked");
      });

      // add "clicked" state to the button that was just clicked
      button.classList.add("clicked");
    });
  });

  //Skill day validation
  const [sdCounts, setsdCounts] = useState(new Array(days).fill(0));

  //To fetch data from the schedule
  const values_to_db = [];
  function onSubmitHandler() {
    const cells = document.querySelectorAll(".cells");
    // console.log(cells);

    cells.forEach((cell) => {
      if (cell.textContent !== "") {
        const cellIndex = cell.cellIndex;
        var day = cellIndex.toString();

        // console.log((day.toString()).length);
        if (day.length === 1) {
          day = "0" + day;
          console.log("l=1");
        }
        const year = y;
        var month = (m + 1).toString();
        if (month.length === 1) {
          month = "0" + month;
          console.log("m=1");
        }
        const day_formatted = year + "-" + month + "-" + day;
        console.log(day_formatted);

        const rec = {
          employee_id: cell.parentNode.rowIndex - 1,
          date: day_formatted,
          shift: cell.textContent,
        };
        values_to_db.push(rec);
      }
    });
    console.log(values_to_db);
  }

  //  useeffect
  useEffect (() => {
    const cells = document.querySelectorAll('.symbols');
      cells.forEach((cell) =>{
          if (cell.textContent === "M") {
              cell.className = "";
              cell.classList.add("symbols");
              cell.classList.add("morning");
            }
            if (cell.textContent === "EM") {
              cell.className = "";
              cell.classList.add("symbols");
              cell.classList.add("emorning");
            }
            if (cell.textContent === "A") {
              cell.className = "";
              cell.classList.add("symbols");
              cell.classList.add("after");
            }
            if (cell.textContent === "SD") {
              cell.className = "";
              cell.classList.add("symbols");
              cell.classList.add("skill");
            }
            if (cell.textContent === "L") {
              cell.className = "";
              cell.classList.add("symbols");
              cell.classList.add("leave");
            }
            if (cell.textContent === "MD") {
              cell.className = "";
              cell.classList.add("symbols");
              cell.classList.add("mod");
            }
            if (cell.textContent === "G") {
              cell.className = "";
              cell.classList.add("symbols");
              cell.classList.add("general");
            }
            if (cell.textContent === "S") {
              cell.className = "";
              cell.classList.add("symbols");
              cell.classList.add("shadowing");
              cell.classList.add("shadow");
            }
            if (cell.textContent === "HS") {
              cell.className = "";
              cell.classList.add("symbols");
              cell.classList.add("holiday");
            }
            if (cell.textContent === "W") {
              cell.className = "";
              cell.classList.add("symbols");
              cell.classList.add("wss");
            }
      })
  },[]);

  function checkShift(cell, shift) {
    if (shift === "M") {
      cell.className = "";
      cell.classList.add("cells");
      cell.classList.add("morning");
      cell.classList.add("shadow");
    }
    if (shift === "EM") {
      cell.className = "";
      cell.classList.add("cells");
      cell.classList.add("emorning");
      cell.classList.add("shadow");
    }
    if (shift === "A") {
      cell.className = "";
      cell.classList.add("cells");
      cell.classList.add("after");
      cell.classList.add("shadow");
    }
    if (shift === "SD") {
      cell.className = "";
      cell.classList.add("cells");
      cell.classList.add("skill");
      cell.classList.add("shadow");
    }
    if (shift === "L") {
      cell.className = "";
      cell.classList.add("cells");
      cell.classList.add("leave");
      cell.classList.add("shadow");
    }
    if (shift === "MD") {
      cell.className = "";
      cell.classList.add("cells");
      cell.classList.add("mod");
      cell.classList.add("shadow");
    }
    if (shift === "G") {
      cell.className = "";
      cell.classList.add("cells");
      cell.classList.add("general");
      cell.classList.add("shadow");
    }
    if (shift === "S") {
      cell.className = "";
      cell.classList.add("cells");
      cell.classList.add("shadowing");
      cell.classList.add("shadow");
    }
    if (shift === "HS") {
      cell.className = "";
      cell.classList.add("cells");
      cell.classList.add("holiday");
      cell.classList.add("shadow");
    }
    if (shift === "W") {
      cell.className = "";
      cell.classList.add("cells");
      cell.classList.add("wss");
      cell.classList.add("shadow");
    }
    if (shift === "") {
      cell.className = "";
      cell.classList.add("cells");
      cell.classList.add("clear");
    }
  }
  //Highlight the column on hovering
  const data_cells = document.querySelectorAll(".cells");
  data_cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      const columnIndex = cell.cellIndex;
      const columnCells = document.querySelectorAll(
        `td:nth-child(${columnIndex + 1})`
      );
      columnCells.forEach((columnCell) => {
        columnCell.classList.add("chighlighted");
      });
      cell.addEventListener("mouseout", () => {
        const columnIndex = cell.cellIndex;
        const columnCells = document.querySelectorAll(
          `td:nth-child(${columnIndex + 1})`
        );
        columnCells.forEach((columnCell) => {
          columnCell.classList.remove("chighlighted");
        });
      });
    });
  });

  //shift legends 
  const symbols =  ["EM", "M", "G","A","W","SD","L","HS","MD","S"];
  const meanings = ["Early Morning Shift","Morning Shift","General Shift","Afternoon Shift","Weekend Shift","Skill Day","Leave","Holiday Shift","Manager on Duty","Shadowing"]

// console.log(selectedMonth);
    useEffect(() => {
      // Populate dropdown with 12 months
      const months = [
        { value: 1, label: 'January' },
        { value: 2, label: 'February' },
        { value: 3, label: 'March' },
        { value: 4, label: 'April' },
        { value: 5, label: 'May' },
        { value: 6, label: 'June' },
        { value: 7, label: 'July' },
        { value: 8, label: 'August' },
        { value: 9, label: 'September' },
        { value: 10, label: 'October' },
        { value: 11, label: 'November' },
        { value: 12, label: 'December' },
      ];

      const years = [
        {value: 2023, label: '2023'},
        {value: 2024, label: '2024'},
        {value: 2025, label: '2025'},
        {value: 2026, label: '2026'},
      ]
  
      const dropdown = document.getElementById('month-dropdown');
      months.forEach(month => {
        const option = document.createElement('option');
        option.value = month.value;
        option.text = month.label;
        dropdown.appendChild(option);
      });
  
      // Set default value to current month
      dropdown.value = selectedMonth;

      const dropdownY = document.getElementById('year-dropdown');
      years.forEach(year => {
        const option = document.createElement('option');
        option.value = year.value;
        option.text = year.label;
        dropdownY.appendChild(option);
      });

      
      
    }, []);
    // tooltip function
// function getShift(value){
//   if(value == "G")
//   {
//     return("General Shift");
//   }
//   else if(value == "EM")
//   {
//     return("Early Morning Shift");
//   }
//   else if(value == "M")
//   {
//     return("Morning Shift");
//   }
//   else if(value == "A")
//   {
//     return("Afternoon Shift");
//   }
//   else if(value == "W")
//   {
//     return("Weekend Shift");
//   }
//   else if(value == "SD")
//   {
//     return("Skill Day");
//   }
//   else if(value == "L")
//   {
//     return("Leave");
//   }
//   else if(value == "HS")
//   {
//     return("Holiday Shift");
//   }
//   else if(value == "MD")
//   {
//     return("Manager on Duty");
//   }
//   else if(value == "S")
//   {
//     return("Shadowing");
//   }
//   else if(value == "SaaS")
//   {
//     return("SaaS Shift");
//   }
// }

function handleYearChange(event){
  const newSelectedYear = parseInt(event.target.value);
  setSelectedYear(newSelectedYear);
  const cells = document.querySelectorAll(".cells");
      cells.forEach((cell) => {
        cell.innerHTML = "";
        cell.className = "";
        cell.classList.add("cells");
        // WeekendCSS();

      });
      const datecells = document.querySelectorAll(".dates");
      datecells.forEach((date) =>{
        date.className ="";
        date.classList.add("dates");
      })

      const daycells = document.querySelectorAll(".days");
      daycells.forEach((day) =>{
        day.className ="";
        day.classList.add("days");
      })
}
  
    function handleMonthChange(event) {
      const newSelectedMonth = parseInt(event.target.value);
      setSelectedMonth(newSelectedMonth);
      const cells = document.querySelectorAll(".cells");
      cells.forEach((cell) => {
        cell.innerHTML = "";
        cell.className = "";
        cell.classList.add("cells");
        // WeekendCSS();

      });
      const datecells = document.querySelectorAll(".dates");
      datecells.forEach((date) =>{
        date.className ="";
        date.classList.add("dates");
      })

      const daycells = document.querySelectorAll(".days");
      daycells.forEach((day) =>{
        day.className ="";
        day.classList.add("days");
      })
      console.log(`Selected month: ${newSelectedMonth}`);
    }


  return (
    <div>
      <div className="buttons">
        <button
          type="button"
          data-toggle="button"
          className="btn btn-primary btn-lg round sd "
          onClick={() => clickHandler("EM")}
        >
          Early Morning Shift
        </button>
        <button
          type="button"
          data-toggle="button"
          className="btn btn-primary btn-lg round ms"
          onClick={() => clickHandler("M")}
        >
          Morning Shift
        </button>
        <button
          type="button"
          data-toggle="button"
          className="btn btn-primary btn-lg round gs "
          onClick={() => clickHandler("G")}
        >
          General Shift
        </button>
        <button
          type="button"
          data-toggle="button"
          className="btn btn-primary btn-lg round sd "
          onClick={() => clickHandler("A")}
        >
          Afternoon Shift
        </button>
        <button
          type="button"
          data-toggle="button"
          className="btn btn-primary btn-lg round ws "
          onClick={() => clickHandler("W")}
        >
          Weekend Shift
        </button>
        <button
          type="button"
          data-toggle="button"
          className="btn btn-primary btn-lg round sd "
          onClick={() => clickHandler("SD")}
        >
          Skill day
        </button>

        <button
          type="button"
          data-toggle="button"
          className="btn btn-primary btn-lg round sd "
          onClick={() => clickHandler("L")}
        >
          Leave
        </button>
        <button
          type="button"
          data-toggle="button"
          className="btn btn-primary btn-lg round sd "
          onClick={() => clickHandler("HS")}
        >
          Holiday Shift
        </button>
        <button
          type="button"
          data-toggle="button"
          className="btn btn-primary btn-lg round sd "
          onClick={() => clickHandler("MD")}
        >
          Manager on Duty
        </button>
        <button
          type="button"
          data-toggle="button"
          className="btn btn-primary btn-lg round sd "
          onClick={() => clickHandler("S")}
        >
          Shadowing
        </button>
        <button
          type="button"
          data-toggle="button"
          className="btn btn-primary btn-lg round sd "
          onClick={() => clickHandler("")}
        >
          Clear
        </button>
      </div>
      <div className="row">
        <div className="column1">
         
          <table className=" prepareShiftTable ">
            <thead>
              <tr className="tableRow stick">
                <th className="tableHead ">
                  <select className="monthDD"
                    id="month-dropdown"
                    onChange={handleMonthChange}
                  ></select>
                </th>

                {daysArray.map((d, dId) => (
                  <th key={dId} className="dates stick">
                    {d}
                  </th>
                ))}
              </tr>
              <tr className="tableRow">
                <th className="tableHead">
                <select className="yearDD"
                    id="year-dropdown"
                    onChange={handleYearChange}
                  ></select>
                </th>
                {daysArr.map((d, dId) => (
                  <td key={dId} className="days stick2">
                    {d}
                  </td>
                ))}
                {/* {validations.map((v) => (
                  <td className="stick2">{v}</td>
                ))} */}
                
               
              </tr>
            </thead>
            <tbody>
              {employees.map((emp, empID) => (
                <tr className="tableRow rowss" key={empID}>
                  <th key={empID} className="city rowHead ">
                    {emp}
                  </th>
                  {daysArray.map((columnIndex) => (
                    <td
                      key={columnIndex}
                      onClick={(e) => {
                        const cell = e.target;
                        const cellValue = cell.innerHTML;
                        const isEmpty = cellValue === "" || cellValue === " ";

                        const shouldProceed =
                          isEmpty ||
                          window.confirm(
                            "Are you sure you want to replace the existing value?"
                          );
                        if (shouldProceed) {
                          const cellIndex = cell.cellIndex;
                          const rowIndex = cell.parentNode.rowIndex - 1;
                          // const day = cellIndex;
                          cell.innerHTML = btnState;
                          const shift = cell.innerHTML;
                          checkShift(cell, shift);
                        

                          //row validation variables
                          var SD = 0;
                          // var G = 0;

                          //column validation variables
                          var SDc = 0;
                          var Gc = 0;
                          var EMc = 0;
                          var Mc = 0;
                          var Ac = 0;
                          var MoDc = 0;

                          // Update the skill day count for the current row
                          const currentsdCounts = [...sdCounts];

                          if (shift === "SD") {
                            currentsdCounts[rowIndex]++;
                          }
                          setsdCounts(currentsdCounts);
                          // console.log(cell.parentNode.cells);
                          const rowValues = Array.from(
                            cell.parentNode.cells,
                            (cell) => cell.innerHTML
                          );
                          const columnValues = Array.from(
                            cell.parentNode.parentNode.querySelectorAll(
                              `td:nth-child(${cellIndex + 1})`
                            ),
                            (cell) => cell.innerHTML
                          );
                        

                          //Row-wise validations
                          for (var i = 0; i < rowValues.length; i++) {
                            if (rowValues[i] === "SD") {
                              SD = SD + 1;
                              if (SD > 1) {
                                alert(
                                  "Skill day already alloted for " +
                                    employees[rowIndex - 1]
                                );
                                cell.innerHTML = "";
                                cell.className = "";
                                cell.classList.add("cells");
                              }
                            }
                          }

                          // Column-wise validations
                          for (var j = 0; j < employees.length; j++) {
                            if (columnValues[j] === "SD") {
                              SDc = SDc + 1;
                              // console.log(SDc);
                              if (SDc > 2) {
                                alert(
                                  "Skill day limit for the day is exhausted"
                                );
                                cell.innerHTML = "";
                                cell.className = "";
                                cell.classList.add("cells");
                              }
                            }
                            if (columnValues[j] === "G") {
                              Gc = Gc + 1;
                              if (Gc > 1) {
                                alert(
                                  "General Shift for the day already alloted"
                                );
                                cell.innerHTML = "";
                                cell.className = "";
                                cell.classList.add("cells");
                              }
                            }
                            if (columnValues[j] === "EM") {
                              EMc = EMc + 1;
                              if (EMc > 1) {
                                alert(
                                  "Early Morning Shift for the day already alloted"
                                );
                                cell.innerHTML = "";
                                cell.className = "";
                                cell.classList.add("cells");
                              }
                            }
                            if (columnValues[j] === "A") {
                              Ac = Ac + 1;
                              if (Ac > 1) {
                                alert(
                                  "Afternoon Shift for the day already alloted"
                                );
                                cell.innerHTML = "";
                                cell.className = "";
                                cell.classList.add("cells");
                              }
                            }
                            if (columnValues[j] === "MD") {
                              MoDc = MoDc + 1;
                              if (MoDc > 1) {
                                alert(
                                  "Manager on Duty for the day already alloted"
                                );
                                cell.innerHTML = "";
                                cell.className = "";
                                cell.classList.add("cells");
                              }
                            }
                            if (columnValues[j] === "M") {
                              Mc = Mc + 1;
                              if (Mc > 1) {
                                alert(
                                  "Morning Shift for the day already alloted"
                                );
                                cell.innerHTML = "";
                                cell.className = "";
                                cell.classList.add("cells");
                              }
                            }
                          }
                        }
                      }}
                      className="cells"
                      // title={getShift(cellData[`${rowIndex}-${colIndex}`] || "")}
                    ></td>
                    
                  ))}
                  
                  {/* row-wise validations */}
                  {/* {validations.map(()=>(
                    <td className="cells stick validation">X</td>
                  ))} */}
                  
                </tr>
              ))}
              {/* {validations.map((v) => (
                 <tr className=" validation tableRow rowss">
                 <th  className="validation city rowHead ">
                   {v}
                 </th>
                 {daysArray.map((columnIndex) => (
                   <td className="validation"></td>))}
                   </tr>

              ))} */}
            </tbody>
          </table>
        </div>
        <div className="column2">
        
          <table className="shiftLegendTable">
            <thead>
              <tr className="tableRow" >
                <th colSpan={2} className="tableHead">Shift legends</th>
              </tr>
              <tr className="tableRow">
                <th className="tableHead" style={{padding:5+"px"}}>Symbol</th>
                <th className="tableHead" style={{padding:5+"px"}}>Shift</th>
              </tr>
            </thead>
            <tbody>
            {symbols.map((symbol,index) =>(
                         <tr key={index} className="tableRow">
                            <td className="symbols">{symbol}</td>
                            <td className="symbols">{meanings[index]}</td>
                         </tr>

                    ))}
            </tbody>
          </table>
        </div>
       
      </div>
      
      <button className="submitShifts" onClick={onSubmitHandler}>Submit</button>
      </div>
      
    
    
  );
}
