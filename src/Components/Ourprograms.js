import React from 'react'
import "./About.css"
import Roboticslab from './roboticslab.png'
import Iot2 from "./iot2.png"
import Ai2 from "./ai2.png"
import Datascience from "./datascience-course-icon.jpg"
import Autocad from "./autocad.jpeg"
import Blockchain from "./blockchain-course-icon.jpg"
import Coding from "./coding-course-icon.jpg"
import Footer from './Footer'
import Navbar from './Navbar'
const Ourprograms = () => {
  return (
    <div>
    <Navbar />
    <div className="ourprograms-headding text-center">
    Our Programs
    </div>
    <hr/>
    <div className="ourprograms-headding2 text-center">
    School Programs
    </div>

    <div className=' EmbeddedSystemRobotics' >
    <h1 style={{color:"rgb(122, 0, 221)"}} className="text-center"> Embedded System Robotics</h1>
    <img src={Roboticslab} className="img-fluid"/>
    <h5 className="m-4 text-left">
    The term “Embedded” refers that this intelligent system is an integral part of a huge system with hardware and mechanical parts, to perform some certain role. Also, a robot is a machine that is no longer confined to industrial automation. They are becoming increasingly reliable, affordable, and user-friendly. In addition, they are improving the quality of life. Robots & embedded system is found in almost every electronic device that is used in day-to-day life. The following examples such as video games, mobiles, washing machines, microwaves, household tasks such as vacuum cleaning, and personal assistance. However, any device which measures, stores, manage, controls, calculates, or displays information that must have an embedded system inside. The medical device industry is utilizing controller microchips that translate muscle movements into prosthetic responses. As the demand for these robots grows, so does the need for qualified professionals. 
    </h5>
    <h5 className="m-4 text-left">
    In a typical mechanical-oriented task, robots use sensors, actuators, and software to perceive their environment and safely perform programmed goals. An embedded system resides inside the robot tying together the different subsystems. Without an embedded system, robots would need to rely on external computing systems which can increase the safety risks due to delay and failure in the communication link between the robot and its external control system. 
 
    </h5>
    <h5 className='m-4 text-left'>
    In Embedded Robotics, The most crucial part of an embedded system is the microprocessors. These are multipurpose and programmable device that accepts digital data as input and process it according to instructions stored in their memory. And, it provides results as output. To evaluate, modern embedded systems depend on microcontrollers but ordinary microprocessors are also common, especially in morecomplex systems. The only difference between a microprocessor and a microcontroller is that the microprocessor chip does not have memory, peripheral interface circuits, or other components and therefore, needs to connect them externally. On the other hand, the microcontroller has all the components such as CPU, memory (RAM, ROM), input/output ports, and timers embedded on a single chip. Hence, a microcontroller has reduced power consumption, size, and cost as compared to microprocessors. 
    </h5>

    <h5 className='m-4 text-left'>
    In this laboratory Program, you will learn the basic skills necessary to develop and implement embedded systems that control a typical robot. You will explore embedded computer hardware that interfaces with sensors, embedded software that reads and processes sensor data, and actuators for physical motions. Upon course completion, participants will take home an embedded system development board based on the ARM architecture compatible with the embedded development environment. 
    </h5>
    </div>
    <div className='InternetofThings '>
    <h1 className='text-center m-4' style={{color:"rgb(122, 0, 221)"}}>Internet of Things (IoT) </h1>

    <img src={Iot2} className="img-fluid"/>

    <h5 className='text-left m-4'>
    The term IoT, or Internet of Things, refers to the collective network of connected physical devices that are embedded with sensors, software, and other technologies for the purpose of connecting and exchanging data with other devices and systems over the internet. These devices range from ordinary household objects to sophisticated industrial tools. With more than 10 billion connected IoT devices today, experts are expecting this number to grow to 22 billion by 2025. We now have billions of devices connected to the internet. This means everyday devices like toothbrushes, vacuums, cars, and machines can use sensors to collect data and respond intelligently to users. 
    </h5>
    <h5 className='text-left m-4'>
    The Internet of Things integrates everyday “things” with the internet. Computer Engineers have been adding sensors and processors to everyday objects since the 90s. However, progress was initially slow because the chips were big and high price. As computing devices shrank in size, these chips also became smaller, faster, and smarter over time. The cost of integrating computing power into small objects has now dropped considerably. A whole industry has sprung up with a focus on filling our homes, businesses, and offices with IoT devices. These smart objects can automatically transmit data to and from the Internet. All these “invisible computing devices” and the technology associated with them are collectively referred to as the Internet of Things. 
    </h5>
    <h5 className='text-left m-4'>
    Industrial IoT (IIoT) refers to the application of IoT technology in industrial settings, especially with respect to instrumentation and control of sensors and devices that engage cloud technologies. Industries can achieve a new automation layer and with it create new revenue and business models. IIoT is sometimes called the fourth wave of the industrial revolution, or Industry 4.0. The following are some common uses for IIoT: Smart manufacturing, Connected assets preventive and predictive maintenance, Smart power grids, Smart cities, Connected Logistics, and Smart digital supply chains. 
    </h5>
    <h5 className='text-left m-4'>
    Over the past few years, IoT has become one of the most important technologies in the world. Now that we can connect everyday objects—kitchen appliances, cars, thermostats, baby monitors—to the internet via embedded devices. By means of low-cost computing, the cloud, big data, analytics, and mobile technologies, physical things can share and collect data with minimal human intervention. In this hyperconnected world, digital systems can record, monitor, and adjust each interaction between connected things. The physical world meets the digital world—and they cooperate. 
    </h5>
    <h5 className='text-left m-4'>
    Hopefully, through this message, we have some idea about IoT. Also, we see our children at home are using the internet sometimes with the mobile or playing with remote control toy and trying to open it and try to understand how this work. There are many examples of our minds about our children. Keeping in mind the curiosity of all children, QNOVATE Labs has designed this IoT program for children, so that we can operate a child's brain with the right idea. So that they are not hindered from succeeding in their future life. This is why IoT is so important to us today. 
 
    </h5>
    </div>
    <hr/>
    <div className='virtualprograms'>
    <h1 className='text-center m-4' style={{color:"rgb(122, 0, 221)"}}>Virtual Programs </h1>
    <h1 className='text-center'>Artificial Intelligence & Machine Learning</h1>
    <div className='virtualprogramsimg'>
    <img className="img-fluid" src={Ai2}/>
    </div>
    
    <h1 className='text-center'>  Data Science</h1>
    <div className='virtualprogramsimg' id='datascience'>
    <img className="img-fluid" src={Datascience}/>
    </div>
    <h1 className='text-center m-4'>  Block Chain</h1>
    <div className='virtualprogramsimg'>
    <img className="img-fluid" src={Blockchain}/>
    </div>
    <h1 className='text-center m-4'> Designing Software (AutoDesk)</h1>
    <div className='virtualprogramsimg'>
    <img className="img-fluid" src={Autocad}/>
    </div>
    <h1 className='text-center m-4'> Programming Language</h1>
    <div className='virtualprogramsimg'>
    <img className="img-fluid" src={Coding}/>
    </div>
    </div>
    <Footer />
    </div>
  )
}

export default Ourprograms