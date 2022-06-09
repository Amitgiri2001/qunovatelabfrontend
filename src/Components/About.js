import React from 'react'
import Aboutus from "./aboutus.webp"
import Navbar from './Navbar'
import "./About.css"
import Footer from './Footer'
const About = () => {
  return (
    <div>
      <Navbar />
      <div className='row'>
        <div className='col-md-6'> <img src={Aboutus} /></div>
        <div className='col-md-6'><h5>QNOVATE Labs is one of the leading technological education Companies that started
          in the year 2021 and are bringing an innovative change to India’s education system by providing learning on
          topics that are industry and technology-oriented and which helps the student to innovate with curiosity!.
          Our motto is to equip the students' community with the most advanced and innovative concepts in the Robotics,
          IoT & future technological Industry for Kids. This in turn would help the young generation of any developing
          countries on par with the top nations. QNOVATE labs was able to exhibit the most versatile building system
          using the technology Set. The Set helps to create and command robots that can walk, talk, think, and can
          do anything to the limit of human imagination. And the way to achieve this is to follow step-by-step
          instructions, which are very intuitive, and easy to follow: icon-based programming Qnovate Labs interface.

        </h5>
          <h5 style={{ marginTop: "50px" }}>
            Robots and technology are developing up to be an integral part of our society from having applications
            in industries to home applications. To make such innovations possible the world needs people who are driven
            by ideas and passion for technology. This Idea to create passionate minds led us to believe why not teach
            Student’s innovation and help them honor their ideas to create a better tomorrow. School kids from age
            10 to 16 standard are real fast learners and have the inquisitiveness towards technology, we saw this as
            an opportunity to provide schoolkids the proper knowledge and hands-on skills on robotics as an integrated
            subject in their schools so that they learn to invent and innovate right from a young age.
          </h5>
        </div>
        <h5 style={{ marginTop: "50px" }}>A believe it's high time students stop learning outdated computer coding languages and learn to code and innovate the latest tech, we want students to innovate and invent systems instead of going through only computer classes. To enable this Idea Qnovate Labs was created as a leading robotics and IoT lab which aim to provide innovative co
        </h5>
        <h5 style={{ marginTop: "30px" }}>
          QNOVATE Labs has imparted robotic, IoT, and future technology training to Middle and High School Students in academic School training programs; Students have benefited from training in engineering projects.
        </h5>

        <h5 style={{ marginTop: "30px" }}>
          We pledge to connect a million young minds and provide Robotic, IoT, and future technology education through schools and colleges of all streams; STEaM ( Science, Technology Engineering, Arts, and Mathematics).
        </h5>
        <h5 style={{ marginTop: "30px" }}>
          QNOVATE Labs is investing time, energy, expertise, technology, and money for the future of Mankind. We foster creative and practical problem-solving skills that can benefit the generations to come, ie, our approach will help resolve the major problems caused by the lack of creativity and practical knowledge which in turn will impact the social, economic, developments.
        </h5>
        <h5 style={{ marginTop: "30px" }}>
          QNOVATE labs are creating a team of visionaries in technocrats, engineers, doctors, teachers, etc that will make a difference in the 25th century.
        </h5>
      </div>

      <div className='missionvision'>
        <div className='mission'>
          <h3 className='m-3'>Mission:</h3>
          <h5 style={{ marginTop: "50px" }}>
            1. Q Labs. shall inspire kids and young people to be future tech giants  and innovators by sharpening their science, technology and engineering skills through a series of well maintained  extensive physical and virtual hands-on training programs on Electronics,Robotics and various cutting edge technological concepts with the mentorship of industry professionals in order to build a foundation of technical and social skills and values  .
          </h5>
          <h5 style={{ marginTop: "30px" }}>
            2. The goal of Q Labs. is to foster a creative and stimulating environment and emphasize the social, emotional and intellectual development of kids by instilling Lerning by doing concept among them to empower  children to reach their highest personal potential while nurturing their self-confidence and self-esteem.
          </h5>
        </div>
        <div className='vision' style={{ marginTop: "40px" }}>
          <h3>  Vision: </h3>

          <h5 style={{ marginTop: "50px" }}>
            1. To inspire and help   the next generation’s great minds to introspect  the science, technology, engineering and innovations by allowing them unlimited access to Robotics and Innovation programs at the school level.
          </h5>
          <h5 style={{ marginTop: "30px" }}>
            2. To create a bridge between students and working professionals and get them engaged in various online and offline competitions on buring technological problems across the country in order to complete a full flagged technological problem starting from design thinking to turning their vision into reality thereby making the students industry ready.
          </h5>
          <h5 style={{ marginTop: "30px" }}>
            3. To bring the disruptive innovation in the conventional  educational culture for creating a community of learning for every person to share common goal of problem solving through various cutting edge technologies in order  to improve the world in which we live for all persons.
          </h5>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About