import React, { useState } from "react";
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import Footer from "./Footer";
import Navbar from "./Navbar";
function App() {

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
    <Navbar />
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

      <Footer />
    </div>

  );
}

export default App;
