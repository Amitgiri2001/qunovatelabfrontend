import React from 'react'
import Footer from "./Footer"

const Register1 = () => {
  return (
    <div>
    <div className='register'>
  
   <form class="row g-3">
   <h2  class="text-center free-session" >Book Your Free Session</h2>
   <div class="col-md-6">
     <label for="inputEmail4" class="form-label">Name</label>
     <input type="email" class="form-control"/>
   </div>
   <div class="col-md-6">
     <label  class="form-label">Parent Name</label>
     <input type="text" class="form-control"/>
   </div>
   <div class="col-md-4">
     <label class="form-label">Parent Contact Number</label>
     <input type="text" class="form-control" />
   </div>
   <div class="col-md-6">
     <label for="inputEmail4" class="form-label">User Name(email) </label>
     <input type="email" class="form-control" id='inputEmail4' />

   </div>
   <div class="col-md-2">
   <label for="inputEmail4" class="form-label">Password</label>
   <input type="password" class="form-control"/>
 </div>
 <div class="col-md-4">

 <label for="inputState" class="form-label">COURSE</label>
 <select id="inputState" class="form-select">
     
 <option selected>Embedded System Robotics</option>
 <option>Artificial intelligence and Machine Learning</option>
 <option>Data Science</option>
 <option>Internet of Things(IOT)</option>
 <option>Blockchain</option>
 <option>Designing Software(AutoDesk)</option>
 <option>Programming Language</option>
</select>
</div>
<div class="col-md-4">
     <label for="inputState" class="form-label">Choose Course Mode</label>
     <select id="inputState" class="form-select">
     
       <option selected>Online</option>
       <option>Offline</option>
     </select>
   </div>
   <div class="col-md-2">
   <label for="inputZip" class="form-label">Age</label>
   <input type="number" class="form-control" id="inputZip"/>
 </div>
 <div class="col-md-2">
 <label for="inputState" class="form-label">Choose Course Mode</label>
 <select id="inputState" class="form-select">
 
   <option selected>Class V</option>
   <option>Class VI</option>
   <option>Class VII</option>
   <option>Class VIII</option>
   <option>Class IX</option>
   <option>Class X</option>
   <option>OTHERS</option>
 </select>
</div>
<div class="col-md-6">
<label class="form-label">School or Collage Name</label>
<input type="text" class="form-control"/>
</div>
   <div class="col-md-4">
     <label for="inputCity" class="form-label">City</label>
     <input type="text" class="form-control" id="inputCity"/>
   </div>
  
   <div class="col-md-2">
     <label for="inputZip" class="form-label">Pincode</label>
     <input type="text" class="form-control" id="inputZip"/>
   </div>
   <div class="col-md-12">
<label for="inputAddress" class="form-label">Address</label>
<input type="text" class="form-control" id="inputAddress"/>
</div>
   <div class="col-12">
     <div class="form-check">
       <input class="form-check-input" type="checkbox" id="gridCheck"/>
       <label class="form-check-label" for="gridCheck">
         Check me out
       </label>
     </div>
   </div>
   <div class="col-12">
     <button type="submit" class="btn btn-primary" style={{margin:"0px 50px"}}>Register</button>
   </div>
 </form>
   
   </div>
    
    
    <Footer />
    </div>
  )
}

export default Register1