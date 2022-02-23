import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Button } from './Button'
import './Navbar.css'

function Navbar() {
  const [ click, setClick ] = useState(false);
  const [ button, setButton ] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
	  if(window.innerWidth <= 960 ){
         setButton(false);
	  }else{
		setButton(true);
	  }
  }

  useEffect(() => {
	  showButton();
  }, [])
 
  window.addEventListener('resize', showButton)


	return (
		<>
			<div className="navbar">
			<div className="navbar-container container">
                   <Link to="/" className="navbar-logo" onClick={closeMobileMenu} >
				   <img src="/img/logo.png" alt="icon" className="navbar-icon"/>
                       SQUANDER
				   </Link>
				   <div className="menu-icon" onClick={handleClick}>
				   {click ? <FontAwesomeIcon icon={faTimes} className='fa-times' /> : 
				            <FontAwesomeIcon icon={faBars} className='fa-bars' />}
				   </div> 
				   <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                       <li className="nav-item">
					      <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                             Home
						  </Link>
					   </li>
					   <li className="nav-item">
					      <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                             Services
						  </Link>
					   </li>
					   <li className="nav-item">
					      <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                             Products
						  </Link>
					   </li>
					   <li className='nav-btn'>
                        {button ? 
						(<Link to='/sign-up' className='btn-link'> 
						  <Button buttonStyle='btn--outline'>SIGN UP</Button>
						</Link>
						):(
							<Link to='/sign-up' className='btn-link' onClick={closeMobileMenu}> 
						  <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>SIGN UP</Button>
						</Link>)
						 }
					   </li>
				   </ul>
               </div>
			</div>
		</>
	)
}

export default Navbar

