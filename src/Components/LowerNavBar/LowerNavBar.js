import React from 'react'
import './LowerNavBar.css';
import Logo from '../Assets/logo-white.png';
import {FaUser,FaSearch,FaBars} from 'react-icons/fa';
function LowerNavBar() {
  return (
    <div className="lower_container">
        <div className="lower_left">
            <img id='pointer' src={Logo} alt=''/>
        </div>
        <div className="lower_center">
            <ul>
                <li id='pointer'>HOME</li>
                <li id='pointer'>FEATURE</li>
                <li id='pointer'>VIDEO</li>
                <li id='pointer'>NEWS</li>
                <li id='pointer'>MEGAMENU</li>
                <li id='pointer'>LYFESTYLE</li>
                <li id='pointer'>CONTACT</li>
            </ul>
        </div>
        <div className="lower_right">
            <ul>
                <li id='pointer'><FaUser/></li>
                <li id='pointer'><FaBars/></li>
                <li id='pointer'><FaSearch/></li>
            </ul>
        </div>

    </div>
  )
}

export default LowerNavBar