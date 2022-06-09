import React from 'react'
import "./Home.css"
const Navbar = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg bg-dark navbar-light">
    <a class="navbar-brand text-light" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link text-light" href="/" style={{fontSize:"25px"}}>Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="/about" style={{fontSize:"25px"}}>About</a>
        </li>
        <li class="nav-item">
        <a class="nav-link text-light" href="/ourprograms" style={{fontSize:"25px"}}>Our Programs</a>
      </li>
      <li class="nav-item">
      <a class="nav-link text-light" href="./Bookyourfreesession" style={{fontSize:"25px"}}>Book Your Free Session Now</a>
    </li>
       
        
      </ul>
     
    </div>
  </nav>
    
    </div>
  )
}

export default Navbar