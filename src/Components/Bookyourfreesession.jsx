import React, { useState } from "react";
import axios from "axios"
import { useNavigate } from 'react-router-dom'
function App() {
  /*
  const [inputs,setInputs]=useState({
     hospitalname:"",
     adminname:"",
     password:"",
     confirmpassword:"",
  description:"",
  totalbeds:"",
  occupiedbeds:"",
  state:"",
  district:"",
  emergencymedicinekit:"",
  oxygencylider:"",
  description:"",
  numberofambulance:"",
  numberoficu:"",
  ot:"",
  bloodbank:"",
  covidbeds:"",
  denguebeds:"",
  malariabeds:"",
  plasmabank:"",
  numberofbeds:"",
  adress:"",
  contactnumber:"",
 // date:"",
 // time:"",
  available:false,
 
 
 
    });
    //state , district,emergencymedicinekit,oxygencylider, description, numberofambulance,numberoficu,ot,bloodbank,covidbeds,denguebeds,malariabeds,plasmabank,numberofbeds
    const [checked,setChecked]=useState(false);
    const handleChange=(e)=>{
      setInputs((prevState)=>({
  ...prevState,
  [e.target.name]:e.target.value
      }))
    }
    const sendRequest=async()=>{
      const currdate=new Date().toLocaleDateString();
      const currtime=new Date().toLocaleTimeString();
      await axios.post("http://localhost:8000/hospitals",{
       hospitalname:String(inputs.hospitalname),
       adminname:String(inputs.adminname),
       password:String(inputs.password),
       confirmpassword:String(inputs.confirmpassword),
       totalbeds:String(inputs.totalbeds),
       occupiedbeds:String(inputs.occupiedbeds),
        state:String(inputs.state),
        district:String(inputs.district),
        emergencymedicinekit:String(inputs.emergencymedicinekit),
        oxygencylider:String(inputs.oxygencylider),
        description:String(inputs.description),
      numberofambulance:String(inputs.numberofambulance),
      numberoficu:String(inputs.numberoficu),
      ot:String(inputs.ot),
      bloodbank:String(inputs.bloodbank),
      covidbeds:String(inputs.covidbeds),
      denguebeds:String(inputs.denguebeds),
      malariabeds:String(inputs.malariabeds),
      plasmabank:String(inputs.plasmabank),
      numberofbeds:String(inputs.numberofbeds),
      adress:String(inputs.adress),
      contactnumber:String(inputs.contactnumber),
     date:String(currdate),
     time:String(currtime),
        available:Boolean(checked)
      }).then(res=>res.data);
    }
    //state , district,emergencymedicinekit,oxygencylider, description, numberofambulance,numberoficu,ot,bloodbank,covidbeds,denguebeds,malariabeds,plasmabank,numberofbeds
    const handleSubmit=(e)=>{
      e.preventDefault();
     
      sendRequest().then(()=>{
       if((inputs.password)==(inputs.confirmpassword)){
         history('/xxxx9883')
       }
       else{
         alert("PassWord is wrong")
       }
      })
    
    }
  */
  const [inputs, setInputs] = useState({
    firstname: "",
    pname: "",
    contactnumber: "",
    email: "",
    password: "",
    course: "",
    coursemode: "",
    age: "",
    yclass: "",
    schoolcollegename: "",
    city: "",
    pincode: "",
    address: "",




  });
  const sendRequest = async () => {

    await axios.post("http://localhost:8000/hospitals", {
      firstname: String(inputs.firstname),
      pname: String(inputs.pname),
      contactnumber: Number(inputs.contactnumber),
      email: String(inputs.email),
      password: String(inputs.password),
      course: String(inputs.course),
      coursemode: String(inputs.coursemode),
      age: String(inputs.age),
      yclass: String(inputs.yclass),
      schoolcollegename: String(inputs.schoolcollegename),
      city: String(inputs.city),
      pincode: Number(inputs.pincode),
      address: String(inputs.address),


    }).then(res => res.data);
  }
  const history = useNavigate();
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => {
      history("/")
    })


  }
  return (
    <div>
      <div className="register overlay">
        <form
          onSubmit={handleSubmit}
          className="row g-3 box-cen"
          style={{ margin: "2% auto 2% auto" }}
          action="/"
          method="POST"
        >
          <h2 className="text-center free-session">Book Your Free Session</h2>
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label" >
              Name
            </label>
            <input type="text" value={inputs.firstname} onChange={handleChange} className="form-control" name="firstname" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Parent Name</label>
            <input type="text" value={inputs.pname} onChange={handleChange} className="form-control" name="pname" />
          </div>
          <div className="col-md-4">
            <label className="form-label">Parent Contact Number</label>
            <input type="text" value={inputs.contactnumber} onChange={handleChange} name="contactnumber" className="form-control" />
          </div>
          <div className="col-md-4">
            <label for="inputEmail4" className="form-label">
              User Name(email){" "}
            </label>
            <input type="email" value={inputs.email} onChange={handleChange} className="form-control" name="email" id="inputEmail4" />
          </div>
          <div className="col-md-4">
            <label for="inputEmail4" className="form-label">
              Password
            </label>
            <input type="password" value={inputs.password} onChange={handleChange} name="password" className="form-control" />
          </div>
          <div className="col-md-6">
            <label for="inputState" className="form-label">
              COURSE
            </label>
            <select id="inputState" className="form-select" value={inputs.course} onChange={handleChange} name="course">
              <option selected>Embedded System Robotics</option>
              <option>Artificial intelligence and Machine Learning</option>
              <option>Data Science</option>
              <option>Internet of Things(IOT)</option>
              <option>Blockchain</option>
              <option>Designing Software(AutoDesk)</option>
              <option>Programming Language</option>
            </select>
          </div>
          <div className="col-md-6">
            <label for="inputState" className="form-label" value={inputs.coursemode} onChange={handleChange} name="coursemode">
              Choose Course Mode
            </label>
            <select id="inputState" className="form-select">
              <option selected>Online</option>
              <option>Offline</option>
            </select>
          </div>
          <div className="col-md-6">
            <label for="inputZip" className="form-label">
              Age
            </label>
            <input type="number" className="form-control" id="inputZip" value={inputs.age} onChange={handleChange} name="age" />
          </div>
          <div className="col-md-6">
            <label for="inputState" className="form-label">
              Choose Your Class
            </label>
            <select id="inputState" className="form-select" value={inputs.yclass} onChange={handleChange} name="yclass">
              <option selected>className V</option>
              <option>className VI</option>
              <option>className VII</option>
              <option>className VIII</option>
              <option>className IX</option>
              <option>className X</option>
              <option>OTHERS</option>
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">School or Collage Name</label>
            <input type="text" className="form-control" value={inputs.schoolcollegename} onChange={handleChange} name="schoolcollegename" />
          </div>
          <div className="col-md-4">
            <label for="inputCity" className="form-label">
              City
            </label>
            <input type="text" className="form-control" id="inputCity" value={inputs.city} onChange={handleChange} name="city" />
          </div>

          <div className="col-md-2">
            <label for="inputZip" className="form-label">
              Pincode
            </label>
            <input type="text" className="form-control" id="inputZip" value={inputs.pincode} onChange={handleChange} name="pincode" />
          </div>
          <div className="col-md-12">
            <label for="inputAddress" className="form-label">
              Address
            </label>
            <input type="text" className="form-control" id="inputAddress" value={inputs.address} onChange={handleChange} name="address" />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div className="col-12 submit-btn">
            <button
              type="submit"
              className="btn btn-warning"

            >
              Register
            </button>
          </div>
        </form>
      </div>

      {/* TEACHERS FORM ------------------------------------------------*/}
      <div className="container teacher-form">
        <div className="row">
          <div className="col-md-6">hiii</div>
          <div className="col-md-4">
            <form style={{ margin: "2% auto 2% auto", paddingTop: "6%" }}>
              <div className="row">
                <h2 className="text-center free-session ">
                  Let’s Build a Strong Business, Together
                </h2>
                <div className=" col-md-6">
                  <label for="fname">First Name:</label>
                  <input
                    type="text"
                    name="fname"
                    className="form-control"
                    placeholder="Enter First Name"
                  />
                </div>
                <div className=" col-md-6">
                  <label for="lname">Last Name:</label>
                  <input
                    type="text"
                    name="lname"
                    className="form-control"
                    placeholder="Enter Last Name"
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="phoneno">Phone No:</label>
                <input
                  type="number"
                  name="phoneno"
                  className="form-control"
                  placeholder="Enter First Name"
                />
              </div>
              <div className="form-group">
                <label for="email">Email Id:</label>
                <input
                  type="email"
                  name="emailid"
                  className="form-control"
                  placeholder="Enter Email Id"
                />
              </div>
              <div className="row">
                <div className=" col-md-6">
                  <label for="email">City:</label>
                  <input
                    type="text"
                    name="city"
                    className="form-control"
                    placeholder="Enter city name"
                  />
                </div>
                <div className=" col-md-6">
                  <label for="pincode">Pin Code:</label>
                  <input
                    type="number"
                    name="pincode"
                    className="form-control"
                    placeholder="Enter First Name"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="Purpose">Purpose</label>
                <select className="form-control">
                  <option>For School </option>
                  <option>For College </option>
                  <option>For Franchise </option>
                </select>
              </div>

              <div className="form-group">
                <label for="formGroupExampleInput">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Example input"
                />
              </div>
              <div className="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"

                ></textarea>
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
