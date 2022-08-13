import React from 'react'
import Header from '../components/Header'
import './../stylesheets/home.css'
import {  IoMdOpen} from 'react-icons/io';
function About() {
  return (
    <>
    {/* <Header/> */}
    <div className='container mt-4' id='about'>
    <div className='mt-3 row'>
      <div className='mt-2 mb-1 col-md-5 pt-5 abt-cnt'>
      <h3 className='font-bolder text-center  ' style={{fontSize:"60px"}}>Who is Hp???</h3>
      <p className='font-bold 'style={{fontSize:"15px"}}>
      I'm a web developer with a focus on the MERN stack, but still exploring other technologies and frameworks that catch my interest! 
         that’s how I got into Web Development while studying in college.
          I mainly use React for frontend and NodeJS for backend.
          if you're looking for a developer to add to your team, I'd love to hear from you! </p>

          <button className='btn btn-dark mx-auto' onClick={() => window.open( 'https://drive.google.com/file/d/1BDaU2fDacz6J-_dzi9aiRtWhuJIx2sDW/view' )}>
            Resume  <IoMdOpen size={22} className='icon'/>
            </button>
      </div>
      
      
      <div className='who-is flex-with-center col-md-7' style={{backgroundImage:`url('./about.svg')`}}>
      <div className='mt-5'>
        <h3>Hi , Hello , Namste</h3>
        <hr/>
        <p><pre>{JSON.stringify({
          name:"M.Hari prakash",
          from:"Tamil Nadu",
          age:21,
          gender:"Male"
          
        },null,2)}</pre></p>
      </div>

    </div>
    </div>
    </div>
    <div className='container devstack n-box-2 py-3 mt-5'>
      <div className='text-center'>
      <h3 className='font-bold text-center mt-5 mydev' style={{fontSize:"70px"}}>My Development stack</h3>
      <img src='./developer.svg' alt='#' height='200' width='200'/>
      </div>
      <div className='row mt-3 mx-3'>
        <div className='col-md-4'>
          <div className='font-bold text-start'>
            <h3 className='font-bold'>Frontend</h3>
            <hr/>
            <p>HTML</p>
            <p>CSS</p>
            <p>Javascript</p>
            <p>React</p>
            <p>Redux</p>
            
          </div>
        </div>
        <div className='col-md-4'>
          <div className='font-bold text-center'>
            <h3 className='font-bold text-center'>UI/Styling</h3>
            <hr/>
            <p>Bootstrap</p>
            <p>Material UI</p>
            <p>Ant Design</p>
            
            
          </div>
        </div>
        <div className='col-md-4'>
          <div className='font-bold text-end'>
            <h3 className='font-bold'>Backend</h3>
            <hr/>
            <p>Node Js</p>
            <p>Express JS</p>
            <p>MySQL</p>
            <p>Mongo Db</p>
            
            
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
