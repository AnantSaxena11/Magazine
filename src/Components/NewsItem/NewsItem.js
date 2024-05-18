import React, { Component } from 'react'
import './NewsItem.css';
import {FaCalendar } from 'react-icons/fa';
export class NewsItem extends Component {
    
    render() {
        let {title,description,imgUrl,dateTime,newsUrl} = this.props;
        function openNewsUrl(newsUrl) {
            window.open(newsUrl, '_blank');
          }
          
        return (
            <div className="newsblock">
                <div className="newsimg">
                    <img src={imgUrl} alt="" />
                </div>
                <div className="newscontent">
                    <span>In <span id='insider' className='mail'>FASHION</span> </span>
                    <br />
                    <h4 className='mail' id='heading'>{title}</h4>
                    <span id='hello'><FaCalendar /> {dateTime}</span>
                    <p>{description}</p>
                    <br/>
                    <button id='submit' data-link={newsUrl} onClick={() => openNewsUrl(newsUrl)}>Reading</button>

                </div>
            </div>
        )
    }
}

export default NewsItem