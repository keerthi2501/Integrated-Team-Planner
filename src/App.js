import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import { Login } from './components/Login';
import NavBarGlobal from './components/NavBarGlobal';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import ViewHolidays from './Pages/UserView/ViewHolidays';
import ViewSchedule from './Pages/UserView/ViewSchedule';
import ViewScheduleA from './Pages/AdminView/ViewScheduleA';
import LandingPage from './Pages/UserView/LandingPage';
import LeavePlan from './Pages/UserView/LeavePlan';
import MySchedule from './Pages/UserView/MySchedule';
import UserProfile from './Pages/UserView/UserProfile';
import AdminHome from './Pages/AdminView/AdminHome';
import ManageHolidays from './Pages/AdminView/ManageHolidays';
import PrepareSchedule from './Pages/AdminView/PrepareSchedule';
import ViewLeavePlans from './Pages/AdminView/ViewLeavePlans';
import MyLeavePlan from './Pages/AdminView/MyLeavePlan';
import ManageAssociates from './Pages/AdminView/ManageAssociates';
import MyScheduleA from './Pages/AdminView/MyScheduleA';
import Table from './components/Table';
// import { Route } from 'react-router-dom';
function App() {
  return (
    <div>
      
      <Router>
      
      <Routes>
        <Route path='/' element = {<Login />}></Route>
        <Route path='/test' element={<Table></Table>}/>
        <Route path='/holidayList'  element={<AssociateElement><ViewHolidays/></AssociateElement>}></Route>
        <Route path='/schedule'  element={<AssociateElement><ViewSchedule /></AssociateElement>}></Route>
        <Route path='/homescreen' element={<AssociateElement><LandingPage /></AssociateElement>}></Route> 
        <Route path='/leavePlan' element={<AssociateElement><LeavePlan /></AssociateElement>}></Route>
        <Route path='/myProfile' element={<AssociateElement><UserProfile /></AssociateElement>}></Route>
        <Route path='/mySchedule' element={<AssociateElement><MySchedule /></AssociateElement>}></Route>
        <Route path="/admin/homescreen" element={<AdminElement><AdminHome /></AdminElement>}></Route>
         <Route path="/admin/manageAssociates" element={<AdminElement><ManageAssociates /></AdminElement>}></Route>
        <Route path="/admin/prepareSchedule" element={<AdminElement><PrepareSchedule /></AdminElement>}></Route>
        <Route path="/admin/viewSchedule" element={<AdminElement><ViewScheduleA /></AdminElement>}></Route>
        <Route path="/admin/viewleavePlan" element={<AdminElement><ViewLeavePlans /></AdminElement>}></Route>
        <Route path="/admin/myleavePlan" element={<AdminElement><MyLeavePlan /></AdminElement>}></Route>
        <Route path="/admin/mySchedule" element={<AdminElement><MyScheduleA /></AdminElement>}></Route>
        <Route path="/admin/manageAssociates" element={<AdminElement><ManageAssociates /></AdminElement>}></Route>
        <Route path="/admin/manageholidays" element={<AdminElement><ManageHolidays /></AdminElement>}></Route> 
      </Routes>

      </Router>
    
    </div>
  );
}

function AssociateElement({children}){
  return(<>
  {children}
  </>);
}

function AdminElement({children}){
  return(<>
  {children}
  </>);
}

export default App;


