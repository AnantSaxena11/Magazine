import React from 'react';
import './UpperNavBar.css';
import { FaCalendarCheck, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaCloud } from 'react-icons/fa';
function UpperNavBar() {
    return (
        <div className="container">
            <div className="left">
                <ul>
                    <li id='pointer'><FaCalendarCheck />Thursday,January 25</li>
                    <li id='pointer'>Contact</li>
                    <li id='pointer'>About</li>
                </ul>
            </div>
            <div className="right">
                <ul>
                    <li id='pointer'><FaFacebookF /></li>
                    <li id='pointer'><FaTwitter /></li>
                    <li id='pointer'><FaInstagram /></li>
                    <li id='pointer'><FaLinkedin /></li>
                    <li id='pointer'><FaYoutube /></li>
                    <li id='pointer' >Login / Register</li>
                    <li id='pointer' ><FaCloud />29  <sup>C </sup>New Delhi</li>
                </ul>
            </div>
        </div>
    )
}
export default UpperNavBar;