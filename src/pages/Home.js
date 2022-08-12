import React, { useEffect, useRef } from 'react'
import Header from '../components/Header'
import Courosel from '../components/Courosel'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import Footer from './../components/Footer';
import { init } from "ityped";
function Home() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: [ "Web Developer", "Fullstack Developer", "Frontend Developer", "Backend Developer"],
    });
  }, []);
  return (
    
    <div>
     
      <Header/>
      <div className='intro flex-with-center' style={{backgroundImage:`url('./introbg3.svg')`}} id='home'> 
      <div data-aos='fade-up'>
        <h1 >HARI PRAKASH</h1>
        <div className='intro-content d-flex justify-content-between'>
          {/* <p>MERN Stack <br/> Developer</p> */}
          <h3>
              <span ref={textRef}></span><br></br>
          </h3>
          <button className='primary-button' ><a href='#courosel'>Get Started</a></button>
        </div>
      </div>

    </div>
    <Courosel/>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#000D1A" fill-opacity="1" d="M0,32L14.1,58.7C28.2,85,56,139,85,181.3C112.9,224,141,256,169,272C197.6,288,226,288,254,261.3C282.4,235,311,181,339,170.7C367.1,160,395,192,424,202.7C451.8,213,480,203,508,176C536.5,149,565,107,593,106.7C621.2,107,649,149,678,186.7C705.9,224,734,256,762,277.3C790.6,299,819,309,847,304C875.3,299,904,277,932,234.7C960,192,988,128,1016,101.3C1044.7,75,1073,85,1101,117.3C1129.4,149,1158,203,1186,229.3C1214.1,256,1242,256,1271,234.7C1298.8,213,1327,171,1355,138.7C1383.5,107,1412,85,1426,74.7L1440,64L1440,0L1425.9,0C1411.8,0,1384,0,1355,0C1327.1,0,1299,0,1271,0C1242.4,0,1214,0,1186,0C1157.6,0,1129,0,1101,0C1072.9,0,1045,0,1016,0C988.2,0,960,0,932,0C903.5,0,875,0,847,0C818.8,0,791,0,762,0C734.1,0,706,0,678,0C649.4,0,621,0,593,0C564.7,0,536,0,508,0C480,0,452,0,424,0C395.3,0,367,0,339,0C310.6,0,282,0,254,0C225.9,0,198,0,169,0C141.2,0,113,0,85,0C56.5,0,28,0,14,0L0,0Z"></path>
</svg>
    </div>
    <div className='container'>
      <div className='row justify-content-start '>
        <div className='col-md-4'>
          <div data-aos='fade-right' className='p-3 n-box-2 font-bold mt-2'>
            <h1 >Yes you are right...</h1>
            <p>I am a Javascript Buff...</p>
          </div>
        </div>
      </div>
      <div className='row  justify-content-center' >
        <div className='col-md-4'>
          <div>
            <img src='./jsbuff.svg' alt='#' height='200' className='w-100' style={{height:"300px",width:"500px"}}></img>
        </div>
      </div>
    </div>
    <div className='row  justify-content-end'>
        <div className='col-md-4'>
          <div data-aos='fade-left' className='p-3 n-box-2 font-bold'>
            <p>Javascript is one of the most top-ranked programming languages because of its ubiquitous use on all platforms and mass adoption. Main use case:Web Development</p>
          </div>
        </div>
      </div>
    </div>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default Home