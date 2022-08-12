import React from 'react'
import './../stylesheets/projects-courses.css'
import Header from '../components/Header'
import { BsTelephoneOutboundFill, } from 'react-icons/bs';
import { BiMailSend } from 'react-icons/bi';
function Contact() {
  return (
    <>
      {/* <Header/> */}
      <div className="container contact mt-1" id='contact'>
        <div className="row pt-5">
          <div className="col-md-6 ">
            <img src="./contactus.svg" alt="" />
          </div>
          <div className="col-md-6">
            <div className='contact-form m-2 p-5 n-box2'>
              <h3 className='font-bold'>Contact US</h3>
              <hr />
              <h4>
                <BiMailSend style={{ marginRight: "20px" }} />
                hariprakashm20@gmail.com
              </h4>
              <h4>
                <BsTelephoneOutboundFill style={{ marginRight: "20px" }} />
                +91 9566602010
              </h4>

              <hr />
              <input type="text" className='form-control font-bolder' placeholder='Name' />
              <input type="text" className='form-control font-bolder' placeholder='Email' />

              <textarea className="form-control font-bolder" rows={3} defaultValue={""} placeholder='Description' />

              <button className='primary-button mt-3'>SUMBIT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact