import LeavesJSON from "./LeavesJSON";
import HolidayJSON from "./HolidayJSON";
import AssociatesJSON from "./AssociatesJSON";

function ShiftJSONCreation() {
// console.log(HolidayJSON);
  var shiftJson = [];
  HolidayJSON.forEach((holiday) => {
    var loc = holiday["location"];
    var asso_list = [];

    AssociatesJSON.forEach((associate) => {
      if (associate["location"] === loc) {
        asso_list.push(associate["associateName"]);
      }
    });
    asso_list.forEach((a) => {
      var obj = {
        name: a,
        date: holiday["date"],
        shift: holiday["shift"],
      };
    //   console.log(obj);
      shiftJson.push(obj);
    });
  });
 
LeavesJSON.forEach((leave) => {
    var obj = {
        name :leave["name"],
        date :leave["date"],
        shift : leave["shift"]
    }
    // console.log(obj);
    shiftJson.push(obj);
    // console.log(obj["date"]);
})
console.log(shiftJson);
return(shiftJson);

}
export default ShiftJSONCreation;
