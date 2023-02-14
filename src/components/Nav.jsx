import React from "react";
import { IoColorFilterSharp,IoHome,IoOptionsSharp,IoBookSharp,IoColorFillSharp,IoCodeDownload} from 'react-icons/io5';
import { Link, NavLink } from "react-router-dom";
function Nav() {
  return (
    <><navbar className='navbar'>
      <Link to='/'><a href="#" className='logo'>
        <h4 className="logo"><IoColorFilterSharp /></h4>
      </a></Link>
      <ul className="menu">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/Feature'>Features</NavLink></li>
        <li><NavLink to='/About'>About</NavLink></li>
        <li><NavLink to='/ui'>UI</NavLink></li>
        <li><NavLink to='/Download'>Download</NavLink></li>
      </ul>
    </navbar>
    <div className="mob-nav">
    <ul className="menu-mob">
        <li><NavLink to='/'><IoHome/></NavLink></li>
        <li><NavLink to='/Feature'><IoOptionsSharp/></NavLink></li>
        <li><NavLink to='/About'><IoBookSharp/></NavLink></li>
        <li><NavLink to="/ui"><IoColorFillSharp/></NavLink></li>
        <li><NavLink to="/Download"><IoCodeDownload/></NavLink></li>
      </ul>
    </div>
    </>
  )
}
export default Nav;