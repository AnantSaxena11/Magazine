import React from 'react';
import './Collage.css';
import LeftBig from '../Assets/LeftBIg.jpg';
import first from '../Assets/1.jpg';
import second from '../Assets/2.jpg';
import third from '../Assets/3.jpg';
import forth from '../Assets/4.jpg';
function Collage() {
  return (
    <div className="news_massionary">
      <div className="left-photo">
        <img src={LeftBig} alt=''/>
      </div>
      <div className="right-photo">
      <img src={first} alt=''/>
      <img src={second} alt=''/>
      <img src={third} alt=''/>
      <img src={forth} alt=''/>
      </div>
    </div>
  )
}

export default Collage