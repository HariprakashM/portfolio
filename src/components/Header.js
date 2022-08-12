import React, { useState } from 'react'
import { AiOutlineMenuUnfold, AiFillCloseCircle } from 'react-icons/ai'
import { Link} from 'react-router-dom';
function Header() {
  const [showHeader, setShowHeader] = useState(false);
  const path=window.location.pathname;
  return (
    <div className='header'>
      {(showHeader ? (<AiFillCloseCircle onClick={()=>{setShowHeader(!showHeader)}} className='menu-icon position-fixed top-0 start-0' />) 
      : (<AiOutlineMenuUnfold onClick={()=>{setShowHeader(!showHeader)}} className='menu-icon position-fixed top-0 start-0' />))}
<ul className={`${showHeader ? 'show-header' : 'hide-header'} n-box-1`}>
  {/* <li className={`${path=='/' && 'active'}`}><Link to='/'>Home</Link></li>
  <li className={`${path=='/about' && 'active'}`}><Link to='/about'>About</Link></li>
  <li className={`${path=='/projects' && 'active'}`}><Link to='/projects'>Projects</Link></li>
  <li className={`${path=='/contact' && 'active'}`}><Link to='/contact'>Contact</Link></li> */}
   <li className={`${path=='/#home' && 'active'}`}><a href='#home'>Home</a></li>
  <li className={`${path=='/#about' && 'active'}`}><a href='#about'>About</a></li>
  <li className={`${path=='/#projects' && 'active'}`}><a href='#projects'>Projects</a></li>
  <li className={`${path=='/#contact' && 'active'}`}><a href='#contact'>Contact</a></li>
</ul>

    </div>
  )
}

export default Header