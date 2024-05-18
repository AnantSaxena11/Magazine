import React from 'react'
import './TrendingNow.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
function TrendingNow() {
    return (
        <div className="trend_container">
            <div className="trending_now">
                <div className="trend">
                    <span>TRENDING &nbsp;</span>NOW
                </div>
            </div>
            <div className="news">
                <div className="news-container">
                    &nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, accusamus!
                </div>
            </div>
            <div className="arrow">
                <div className="arrow_left">
                    <FaAngleLeft />
                </div>
                <div className="arrow_right">
                    <FaAngleRight />
                </div>
            </div>
        </div>
    )
}

export default TrendingNow;