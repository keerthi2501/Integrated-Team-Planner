import { useEffect } from "react";
import "./ViewScheduleTable.css";
import "./PrepareScheduleTable.css";
import Responses from "./Responses";

function ViewScheduleTable() {
  const m = 4;
  const y = 2023;
  var today = new Date();
  //Today's date
  var dd = String(today.getDate()).padStart(2, "0");
  //shift legends
  const symbols = ["EM", "M", "G", "A", "W", "SD", "L", "HS", "MD", "S"];
  const meanings = [
    "Early Morning Shift",
    "Morning Shift",
    "General Shift",
    "Afternoon Shift",
    "Weekend Shift",
    "Skill Day",
    "Leave",
    "Holiday Shift",
    "Manager on Duty",
    "Shadowing",
  ];

  //styling the legends

  //  useeffect
  useEffect(() => {
    const cells = document.querySelectorAll(".symbols");
    cells.forEach((cell) => {
      if (cell.textContent === "M") {
        cell.className = "";
        cell.classList.add("cells");
        cell.classList.add("morning");
      }
      if (cell.textContent === "EM") {
        cell.className = "";
        cell.classList.add("cells");
        cell.classList.add("emorning");
      }
      if (cell.textContent === "A") {
        cell.className = "";
        cell.classList.add("cells");
        cell.classList.add("after");
      }
      if (cell.textContent === "SD") {
        cell.className = "";
        cell.classList.add("cells");
        cell.classList.add("skill");
      }
      if (cell.textContent === "L") {
        cell.className = "";
        cell.classList.add("cells");
        cell.classList.add("leave");
      }
      if (cell.textContent === "MD") {
        cell.className = "";
        cell.classList.add("cells");
        cell.classList.add("mod");
      }
      if (cell.textContent === "G") {
        cell.className = "";
        cell.classList.add("cells");
        cell.classList.add("general");
      }
      if (cell.textContent === "S") {
        cell.className = "";
        cell.classList.add("cells");
        cell.classList.add("shadowing");
        cell.classList.add("shadow");
      }
      if (cell.textContent === "HS") {
        cell.className = "";
        cell.classList.add("cells");
        cell.classList.add("holiday");
      }
      if (cell.textContent === "W") {
        cell.className = "";
        cell.classList.add("cells");
        cell.classList.add("wss");
      }
    });
  }, []);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
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

  const daysArr = [];
  const daysArray = [];
  const days = new Date(y, m + 1, 0).getDate();
  console.log(days);
  for (var k = 1; k <= days; k++) {
    const currDate = new Date(y, m, k);
    const dateStr = currDate.toLocaleDateString("en-US", { day: "2-digit" });
    // , { day: "numeric" }
    const dayOfWeek = currDate.toLocaleDateString("en-US", {
      weekday: "short",
    });

    daysArray.push(dateStr);
    daysArr.push(dayOfWeek);
  }

  const headers = Array.from({ length: days }, (_, i) => i + 1);
  const rows = employees;

  useEffect(() => {
    var CIs = [];
    const dates = document.querySelectorAll(".days");
    dates.forEach((date) => {
      if (
        date.innerHTML.indexOf("Sun") !== -1 ||
        date.innerHTML.includes("Sat")
      ) {
        var ci = date.cellIndex;
        CIs.push(ci);
        // console.log(CIs);
      }
    });
    const boxes = document.querySelectorAll(".cells");

    for (var i = 0; i < CIs.length; i++) {
      boxes.forEach((box) => {
        var c = box.cellIndex;
        if (CIs.includes(c)) {
          box.classList.add("weekends");
        }
      });

      const ddays = document.querySelectorAll(".days");
      for ( i = 0; i < CIs.length; i++) {
        ddays.forEach((box) => {
          var c = box.cellIndex;
          if (CIs.includes(c)) {
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
            box.classList.add("weekends");
          } else {
            box.classList.add("weekdays");
          }
        });
      }
    }

    //Highlight the column on hovering
    const data_cells = document.querySelectorAll("td");
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
    //Highlight current day column
    const headers = document.querySelectorAll(".viewTable th");
    let columnIndex = null;
    // console.log("Entered this block");

    headers.forEach((header, index) => {
      if (header.textContent === dd) {
        columnIndex = index;
        console.log(columnIndex);
      }
    });
    const cells = document.querySelectorAll(
      `.viewTable td:nth-child(${columnIndex + 1})`
    );
    // console.log(cells);
    cells.forEach((cell) => {
      console.log(cell);
      cell.classList.add("highlighted");
    });

    locationBasedColours();
    addCSS();
  }, []);
  function locationBasedColours() {
    const emps = document.querySelectorAll(".rowHead");
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
  }

  function addCSS() {
    const cells = document.querySelectorAll(".cells");
    cells.forEach((cell) => {
      if (cell.textContent === "M") {
        cell.className = "";
        cell.classList.add("cells");
        cell.classList.add("morning");
      }
      if (cell.textContent === "EM") {
        cell.className = "";
        cell.classList.add("cells");
        cell.classList.add("emorning");
      }
      if (cell.textContent === "A") {
        cell.className = "";
        cell.classList.add("cells");
        cell.classList.add("after");
      }
      if (cell.textContent === "SD") {
        cell.className = "";
        cell.classList.add("cells");
        cell.classList.add("skill");
      }
      if (cell.textContent === "L") {
        cell.className = "";
        cell.classList.add("cells");
        cell.classList.add("leave");
      }
      if (cell.textContent === "MD") {
        cell.className = "";
        cell.classList.add("cells");
        cell.classList.add("mod");
      }
      if (cell.textContent === "G") {
        cell.className = "";
        cell.classList.add("cells");
        cell.classList.add("general");
      }
      if (cell.textContent === "S") {
        cell.className = "";
        cell.classList.add("cells");
        cell.classList.add("shadow");
      }
      if (cell.textContent === "HS") {
        cell.className = "";
        cell.classList.add("cells");
        cell.classList.add("holiday");
      }
      if (cell.textContent === "W") {
        cell.className = "";
        cell.classList.add("cells");
        cell.classList.add("wss");
      }
    });
  }
  //tooltip function
  function getShift(value) {
    if (value === "G") {
      return "General Shift";
    } else if (value === "EM") {
      return "Early Morning Shift";
    } else if (value === "M") {
      return "Morning Shift";
    } else if (value === "A") {
      return "Afternoon Shift";
    } else if (value === "W") {
      return "Weekend Shift";
    } else if (value === "SD") {
      return "Skill Day";
    } else if (value === "L") {
      return "Leave";
    } else if (value === "HS") {
      return "Holiday Shift";
    } else if (value === "MD") {
      return "Manager on Duty";
    } else if (value === "S") {
      return "Shadowing";
    } else if (value === "SaaS") {
      return "SaaS Shift";
    }
  }

  //Process the response
  const processed_response = [];
  Responses.forEach((response) => {
    const dateFull = response[0].date;

    const dsub = dateFull.substring(8, 10);
    // console.log(dsub);
    var x = parseInt(dsub, 10);
    console.log(x);
    const obj = {
      associate: response[1].name,
      day: x,
      shift: response[0].shift,
    };
    processed_response.push(obj);
    console.log(obj);
  });

  console.log(processed_response);
  const renderTableBody = () => {
    const cellData = processed_response.reduce(
      (acc, { associate, day, shift }) => {
        const rowIndex = rows.indexOf(associate);
        const colIndex = headers.indexOf(day) + 1;
        acc[`${rowIndex}-${colIndex}`] = shift;
        return acc;
      },
      {}
    );

    return rows.map((row, rowIndex) => (
      <tr key={row}>
        <th className="rowHead">{row}</th>
        {headers.map((colIndex) => (
          <td
            className="Cell cells "
            key={`${rowIndex}-${colIndex}`}
            title={getShift(cellData[`${rowIndex}-${colIndex}`] || "")}
          >
            {cellData[`${rowIndex}-${colIndex}`] || ""}
          </td>
        ))}
      </tr>
    ));
  };
  document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll(".viewTable th");
    let columnIndex = null;

    headers.forEach((header, index) => {
      if (header.textContent === dd) {
        columnIndex = index;
      }
    });

    const cells = document.querySelectorAll(
      `.myTable td:nth-child(${columnIndex + 1})`
    );

    cells.forEach((cell) => {
      cell.classList.add("highlighted");
      cell.classList.add("addBorder");
    });
  });

  return (
    <div className="viewScheduleComponent">
      {/* <h5>View Schedule</h5> */}
      {/* <div className='heading'>  {y} </div> */}

      <div className="row">
        <div className="column1">
          <table className="viewTable mainTable">
            <thead>
              <tr>
                <th>{months[m]}</th>
                {headers.map((header) => (
                  <th className="dates" key={header}>
                    {header}
                  </th>
                ))}
              </tr>
              <tr>
                <th> {y} </th>
                {daysArr.map((d, dId) => (
                  <td key={dId} className="days">
                    {d}
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>{renderTableBody()}</tbody>
          </table>
          {/* {addCSS()} */}
        </div>
        <div className="column2">
          <table className="shiftLegendTable">
            <thead>
              <tr className="tableRow">
                <th colSpan={2} className="tableHead">
                  Shift legends
                </th>
              </tr>
              <tr className="tableRow">
                <th className="tableHead" style={{ padding: 5 + "px" }}>
                  Symbol
                </th>
                <th className="tableHead" style={{ padding: 5 + "px" }}>
                  Shift
                </th>
              </tr>
            </thead>
            <tbody>
              {symbols.map((symbol, index) => (
                <tr key={index} className="tableRow">
                  <td className="symbols">{symbol}</td>
                  <td className="symbols">{meanings[index]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ViewScheduleTable;
