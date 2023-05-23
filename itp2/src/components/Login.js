import React,{useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavBar from "./NavBar";
import {  useNavigate } from "react-router-dom";

export const Login = () => {
  var [inpval,setInpval] = useState({
    name : "",
    pwd :""
  });

  // const USER_TYPE = {
  //   ASSOCIATE : 'Associate',
  //   ADMIN : 'Admin',
  // }
  // console.log(inpval);
  const history = useNavigate();

  function getData(e){
    // console.log(e.target.value);
    const {value, name} = e.target;
    // console.log(value,name);
    

    setInpval(() => {
      return{
        ...inpval,
        [name] : value,
      }
    })
  }

  function addData(e){
    e.preventDefault();
    // console.log(inpval);
    const {name,pwd} = inpval;
    if(name === ""){
      alert("Name field is required");
    }
    else if(pwd === ""){
      alert("Password field is required");
    }
    else{
      // alert("Welcome to ITP "+ name);
      if(name === 'admin'){
        history("/admin/homescreen");
      }
      else if(name ==='user1')
      history("/homescreen");
    }
    
  }

  
  return (
    <>
    <NavBar />
      <div className="container mt-3">
        <section className="d-flex justify-content-between" >
        <div className="left-data mt-3 pt-5  " style={{width:"70%"}}>
            <div className="log_image ,l-4 pt-5 ">
                <img src="background3.png" className="" style={{maxWidth:680,marginTop:70}}></img>

            </div>
          </div>
          <div className="right-data ml-auto mt-5 pl-5 pt-5" style={{width:"40%"}}>
          
            <h3 className="text-center col-lg-6 pl-4 pb-5">LogIn </h3>
            <Form>
              <Form.Group className="mb-4 col-lg-6" controlId="formBasicEmail">
                <Form.Label>User ID</Form.Label>
                <Form.Control type="text" name = 'name' onChange = {getData} placeholder="Enter your user ID" />
                
              </Form.Group>

              <Form.Group className="mb-4 col-lg-6" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name = 'pwd' onChange = {getData} placeholder="Enter your password" />
              </Form.Group>
              
              {/* <Link to="/homescreen"> */}
              <Button variant="primary" style={{color:"whitesmoke",backgroundColor:"#0D6EFD"}}onClick={addData} className="col-lg-6" type="submit">
                Login
              </Button>
              {/* </Link> */}
                
              {/* </Link> */}
              
            </Form>

            {/* </div> */}
            
          </div>
          
        </section>
      </div>
    </>
  );
};
