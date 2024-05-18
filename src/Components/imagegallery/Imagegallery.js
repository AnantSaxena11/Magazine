import React from 'react';
import './Imagegallery.css';
// import { FaInstagram } from 'react-icons/fa';
import first from '../Assets/01.jpg';
import second from '../Assets/11.jpg';
import third from '../Assets/15.jpg';
import forth from '../Assets/04.jpg';
import fifth from '../Assets/19.jpg';
import sixth from '../Assets/06.jpg';
import seventh from '../Assets/08.jpg';
import eighth from '../Assets/09.jpg';
function Imagegallery() {
    return (
        <div className="gallery_container">
            <img src={first} alt='' />
            <img src={second} alt='' />
            <img src={third} alt='' />
            <img src={forth} alt='' />
            {/* <div className="centered">
                <FaInstagram /> &nbsp;Follow Me!
            </div> */}
            <img src={fifth} alt='' />
            <img src={sixth} alt='' />
            <img src={seventh} alt='' />
            <img src={eighth} alt='' />
        </div>
    )
}

export default Imagegallery