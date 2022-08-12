import React from 'react'
import { FaReact,FaHtml5,FaCss3Alt,FaJsSquare,FaBootstrap,FaNodeJs } from 'react-icons/fa'
import { SiMongodb , SiMysql} from 'react-icons/si'
import Header from '../components/Header'
function Courosel() {
  return (
    <div>
        {/* <Header/> */}
      <div className='courosel-parent position-relative' id='courosel'>
        <h1 className='position-absolute top-0 start-0 end-0 text-center mt-3'>Technologoies I Use</h1>
        <div className='gallery'>
          <span style={{'--i':1}}><FaReact color="cyan" /></span>
          <span style={{'--i':2}}><FaHtml5 color="orange"/></span>
          <span style={{'--i':3}}><FaCss3Alt color="blue"/></span>
          <span style={{'--i':4}}><FaJsSquare color="yellow"/></span>
          <span style={{'--i':5}}><FaBootstrap color="darkblue"/></span>
          <span style={{'--i':6}}><FaNodeJs color="green"/></span>
          <span style={{'--i':7}}><SiMongodb color="lightgreen"/></span>
          <span style={{'--i':8}}><SiMysql color="red"/></span>
        </div>
      </div>
    </div>
  )
}

export default Courosel