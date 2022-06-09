import React from 'react'
import Homeimg from "./qunovethomeimg.png"
import "./Home.css"
import Navbar from './Navbar'
import Coding from "./coding-course-icon.jpg"

import Blockchain from "./blockchain-course-icon.jpg"

import Ai from './ai.jpeg'
import Iot from "./iot.jpeg"
import Autocad from "./autocad.jpeg"
import EmbedRobotics from "./embeddedsystemrobotics.jpeg"
import Datascience from "./datascience-course-icon.jpg"
import Techforkids from "./techforkids.png"
import Teamwork from "./team-work.webp"
import Advanced from "./advanced-technologies.webp"
import Logic from "./logic.webp"
import Connectivity from "./connectivity.webp"
import Creative from "./creative-thinking.webp" 
import WhyTechforkids from "./why-techforkids.PNG"
import Stem from "./stem.webp"
import Oureducators from './our-educators.webp'
import Atl from "./atl.jpg"
import Iot2 from "./iot2.png"
import Roboticslab from './roboticslab.png'
import Designthinking from "./designthinking.png"
import Ai2 from "./ai2.png"
import Physicalattention from "./physicalattention.png"
import Kit from "./kit.png"
import Certificate from "./certificate.png"
import Footer from './Footer'

const Home = () => {

    const offerstyle={
        backgroundColor: "#7800af",
        height:"450px",
        fontSize:"50px",
        fontWeight:"600",
    }
    const offerstyle2={
       marginTop:"50px"
    }
    const offerstyle1={
        marginTop:"70px"
     }
  return (
    <div className='home'>


<Navbar/>


    <div className='home-container'>
 
   <div className='homebotanime'>
    <div><img src={Homeimg}  class="img-fluid"/>
    </div>
    <div className="home-text" style={{color:"white"}}>Welcome to the Future Technological World
    <div className='home-book'>
    <a href="./Bookyourfreesession" class="btn-shine" target="_blank"><i class="fa-solid fa-rocket"></i> Book Your Free Session Now</a>
    </div>
    </div>

   </div>

 
   <div className='register'>
  
   
   
   </div>
    </div>


    

    <div className='techforkids row' style={{marginTop:"50px"}}>
    <img src={Techforkids} className="col-sm-6" alt="..."/>
    <div className="provide-text col-sm-6">
    
    <h2 className='text-center'>Technology For Kids</h2>
    <h4 className='text-center'>Create a Passion for Technology!</h4>
    <p>Kids have a natural curiosity that lends itself to
    science, technology, math, and engineering. At
    technology For Kids, we inspire kids to build on their
    innate desire for answers by exploring technology
    concepts in fun, and hands-on. We offer robotics, IoT,
    Artificial Intelligence & Machine Learning, and other
    special courses designed to present kids, with
    challenging yet accessible technological activities
    from which they can learn and grow.
    Ready to learn more about our programs at
    Technology For Kids? Explore our site and sign up
    today!
    </p>
    </div>
    </div>
    <div className='courses' style={{marginTop:"50px"}} >
    <h1 className='text-center' style={{color:"rgb(103, 0, 199)"}}>Our Courses</h1>
    <div class="row">
		<div class="col-md-3">
   
   <a href='#'>
 
   
   
   <div class="profile-card-2"><img src={EmbedRobotics} class="img img-responsive"/>
       <div class="profile-name">Learn Embedded System Robotics</div>
       
       <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div>
  
</div>
    </a>
</div>
<div class="col-md-3">
   
   
    <div class="profile-card-2"><img src={Blockchain} class="img img-responsive"/>
        <div class="profile-name">Learn Blockchain</div>
        
        <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div>
    </div>
</div>
<div class="col-md-3">
   
   
    <div class="profile-card-2"><img src={Coding} class="img img-responsive"/>
        <div class="profile-name">Learn Programming Languages</div>
        
        <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div>
    </div>
</div>
<div class="col-md-3">
   
   
    <div class="profile-card-2"><img src={Iot} class="img img-responsive"/>
        <div class="profile-name"> Learn Internet of Things(IOT)</div>
        
        <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div>
    </div>
</div>
<div class="col-md-4">
   
   
    <div class="profile-card-2"><img src={Ai} class="img img-responsive"/>
        <div class="profile-name">Learn Artificial intelligence and Machine Learning</div>
        
        <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div>
    </div>
</div>
<div class="col-md-4">
   
   
    <div class="profile-card-2"><img src={Autocad} class="img img-responsive"/>
        <div class="profile-name">Learn Design Software AutoDesk</div>
        
        <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div>
    </div>
</div>
<div class="col-md-4">
   
   
    <div class="profile-card-2"><img src={Datascience} class="img img-responsive"/>
        <div class="profile-name">Learn Embedded System Robotics</div>
        
        <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div>
    </div>
</div>
   </div>
  
 </div>
<h1 style={{color:"#7800af"}} className="text-center">What We Offer</h1>
<h4 style={{color:"#7800af"}} className="text-center">QNOVATE Labs offers an integrated Science, Technology, Engineering and Math (STEM) program based on future technology for school segment 
that focus  on technical-world. Also, we are providing physical contact with students, 
so that students can learn problem-solving strategies and project-based learning. QNOVATE Labs providing an immersive learning experience. 
</h4>
<div className='offer row'>
<div className='col-sm-4'>
<div class="card" style={{width:"20rem"}}>
  <img class="card-img-top" src={Atl} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">ATAL TINKERING LAB (ATL)</h5>
    <p class="card-text">QNOVATE Labs is a one stop solution for
     ATL setups with the end-to-end execution of these labs through the unique QNOVATE Labs Pro (manually) kits, products and procedures.</p>
   
  </div>
</div>

</div>
<div className='col-sm-4'>
<div class="card" style={{width:"20rem"}}>
  <img class="card-img-top" src={Roboticslab} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">STEM and ROBOTICS Lab </h5>
    <p class="card-text">Students will
     get an opportunity to work with tools, Controllers, Sensors, and equipment to understand what how and why aspects of STEAM
      and Robotics</p>
   
  </div>
</div>

</div>
<div className='col-sm-4'>
<div class="card" style={{width:"20rem"}}>
  <img class="card-img-top" src={Iot2} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Internet of Things(IoT) </h5>
    <p class="card-text">Understand IoT in a fun way using sensors, processing ability, software, and other technologies that connect 
    and exchange
     data with other devices. Students get to Design and Develop Innovative Prototypes of Real-world problems using IoT Connected Solutions. </p>
   
  </div>
</div>

</div>
<div className='col-sm-4'>
<div class="card" style={{width:"20rem"}}>
  <img class="card-img-top" src={Autocad} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">3D Printing  </h5>
    <p class="card-text">Additive manufacturing is the construction of a three-dimensional object from a CAD model or a digital 3D model. With different types of 3D designing software,
     students can learn about designing as well as 3D printing using a 3D printer. It helps students to see the reality of their imagination. </p>
   
  </div>
</div>

</div>
<div className='col-sm-4'>
<div class="card" style={{width:"20rem"}}>
  <img class="card-img-top" src={Designthinking} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Design Thinking  </h5>
    <p class="card-text">
    In our design thinking lab, students get to know about various types of cognitive, 
    strategic, and practical processes to develop new things and recognize problems to solve, design, prototype, and test solutions for them. 
    </p>
   
  </div>
</div>

</div>

<div className='col-sm-4'>
<div class="card" style={{width:"20rem"}}>
  <img class="card-img-top" src={Ai2} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">AI Connect (Artificial Intelligence)   </h5>
    <p class="card-text">
    AI Connect lets you run and write code in any browser, on any device. It works instantly without downloading plugins or installing software.
     AI Connect gives reallife exposure to AI concepts. Using this curriculum students can understand the real use of Artificial Intelligence  
    </p>
   
  </div>
</div>


</div>

<div className='col-sm-4'>
<div class="card" style={{width:"20rem"}}>
  <img class="card-img-top" src={Physicalattention} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">1:1 physical Attention </h5>
    <p class="card-text">
    It is individual
     attention which helps the learner to focus and sustain attention, thereby making the available classroom time more fruitful.  
    </p>
   
  </div>
</div>


</div>
<div className='col-sm-4'>
<div class="card" style={{width:"20rem"}}>
  <img class="card-img-top" src={Kit} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">QNOVATE Lab KIT pro  </h5>
    <p class="card-text">
    Robotics kits are educational products developed as tools to teach programming, electronics, and various sensor technologies through 
    the construction of robotics projects. A kit generally provides a controller, motors, sensors, and various building components.
    </p>
   
  </div>
</div>


</div>
<div className='col-sm-4'>
<div class="card" style={{width:"20rem"}}>
  <img class="card-img-top" src={Certificate} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Certificate  </h5>
    <p class="card-text">
    Our credentials help a corporate resource to judge a candidate, so that the corporate resource understands how proficient that candidate is in advanced training, 
    information and tools, technology and strategy. In this way, companies can support candidates to improve their significant services. 
    </p>
   
  </div>
</div>


</div>

</div>
<div className='kids-learn text-center'>
<h3>Your Kids will Learn</h3>
<h1 style={{color:"#4200ad"}}>Your Child will Learn</h1>
<div className='row'>
<div className='col-sm-2'>
<div class="card" >
  <img class="card-img-top" src={Teamwork} alt="Card image cap"/>
  <div class="card-body">
    <p class="card-text" style={{fontSize:"30px"}}>Teamwork</p>
  </div>
</div>

</div>

<div className='col-sm-2'>
<div class="card" >
  <img class="card-img-top" src={Advanced} alt="Card image cap"/>
  <div class="card-body">
    <p class="card-text" style={{fontSize:"30px"}}>Advanced Technologies</p>
  </div>
</div>

</div>

<div className='col-sm-2'>
<div class="card" >
  <img class="card-img-top" src={Logic} alt="Card image cap"/>
  <div class="card-body">
    <p class="card-text" style={{fontSize:"30px"}}>Logic</p>
  </div>
</div>

</div>

<div className='col-sm-2' >
<div class="card">
  <img class="card-img-top" src={Connectivity} alt="Card image cap"/>
  <div class="card-body">
    <p class="card-text" style={{fontSize:"30px"}}>Connectivity</p>
  </div>
</div>

</div>

<div className='col-sm-2' >
<div class="card">
  <img class="card-img-top" src={Creative} alt="Card image cap"/>
  <div class="card-body">
    <p class="card-text" style={{fontSize:"30px"}}>Creative Thinking</p>
  </div>
</div>

</div>


</div>

</div>
<div className='techforkids row' style={{marginTop:"50px"}}>
<h1 className='text-center'>Why Technology For Kids? </h1>
    <img src={WhyTechforkids} className="col-sm-6" alt="..."/>
    <div className="provide-text col-sm-6">
    
    
    <h4 className='text-center'>” Your child can learn logic, creative thinking, experiment “</h4>
    <p>
    In 1968, George Land conducted a research study to test the creativity of 1,600 children ranging in ages from
     three-to-five years old who were enrolled in a Head Start program. This was the same creativity test he devised
      for NASA to help select innovative engineers and scientists. Technology is a fun tool for kids to create their
       curiosity, curiosity to ask questions, imagination to explore - 
    features that will dispensing any child well in almost any career, in every hobby and life. 
    </p>
    </div>
    </div>

<div className='our-educators row'>
<div className='col-md-6'><img className="img-fluid" src={Oureducators}/></div>
<div className='col-md-6 our-educators-text' style={{color:"rgb(80, 0, 172)"}}><h1>Our Educators</h1>
<h5>QNOVATE Labs follows 4-Step Selection Process for confirming teacher.
 Also, our all the teachers are STEM certified. so your children are taught by the top industrial experts. </h5>
 <button type="button" class="btn"><i class="fa-solid fa-rocket-launch"></i>Book Your Free Session Now</button>
</div>

</div>
<div className='why-stem text-center'>
<div>
<h1  style={{fontWeight:600}}>Why  STEM Education</h1>
<h4>Science, Technology, Engineering, and Math - STEM is a top priority for educators today. Century Skills, 
Design Thinking, Digital Technologies, Maker Space, Tinkering Labs, 
and Experiential Learning have also garnered significant attention from the global education community.</h4>
</div>
<div className='row'>
<div className='col-sm-6'><img src={Stem} className="img-fluid"/></div>

<div className='col-sm-6 stem-col'>
<h3>Would you like to corporate collaboration with QNOVATE Labs ? </h3>
<h5>Collaboration is the practice of working together towards a common goal or purpose. While teams or individuals
 might collaborate on a one-time basis
 to achieve a short-term goal, collaboration as a company-wide practice involves creating connections over time.  </h5>
 <button className='btn'><i class="fa-solid fa-pen-to-square"></i>Register Now</button>
</div>
</div>

</div>
<Footer/>
    </div>
  )
}

export default Home