import React, { Component } from 'react'
import Logo from '../Assets/logo-white.png';
import img1 from '../Assets/100x70-1.jpg';
import img2 from '../Assets/100x70-2.jpg';
import img3 from '../Assets/100x70-3.jpg';
import { FaCalendar } from 'react-icons/fa';
import './Footer.css';
export class Footer extends Component {
    render() {
        return (
            <div className="Footer_COntainer">
                <div className="Upper_Footer">
                    <div className="container1">
                        <div className="image">
                            <img id='Logo' src={Logo} alt="" />
                        </div>
                        <br />
                        <br />
                        <p>It is a long established fact that a reader<br />
                            will be distracted by the readable content of<br />
                            a page when looking at its layout. The point<br />
                            of using Lorem Ipsum</p>
                        <br />
                        <br />
                        <p>457 BIgBlue Street, Suite 4A<br />
                            New York, NY 10013<br />
                            (315) 5512-2579</p>
                        <br />
                        Contact us on <span className='mail'>info@example.com</span>
                    </div>
                    <div className="container2">
                        <h2>Twitter</h2>
                        <ul>
                            <li><p>So proud to have become an<br />
                                <span className='mail'>@envato</span> Power Elite author. Drop<br />
                                our #ThemeForest:<br />
                                <span className='mail'>https://t.co/jGyLLggygN</span></p></li>
                            <li><p>So proud to have become an<br />
                                <span className='mail'>@envato</span> Power Elite author. Drop<br />
                                our #ThemeForest:<br />
                                <span className='mail'>https://t.co/jGyLLggygN</span></p></li>
                        </ul>
                    </div>
                    <div className="container3">
                        <h2>Need help</h2>
                        <ul>
                            <li>Our Community</li>
                            <li>See Our Portfolio</li>
                            <li>Story About Us</li>
                            <li>Keep in touch</li>
                            <li>Purchase our Products</li>
                        </ul>
                    </div>
                    <div className="container4">
                        <h2>Latest Post</h2>
                        <div className="div1">
                            <img src={img1} alt="" />
                            <div className="details">
                                <span>The Best Street-Style <br />Pics Copenhagen<br /></span>
                                <text><FaCalendar />&nbsp;Jan21,2018</text>
                            </div>
                        </div>
                        <div className="div1">
                            <img src={img2} alt="" />
                            <div className="details">
                                <span>The Best Street-Style <br />Pics Copenhagen<br /></span>
                                <text><FaCalendar />&nbsp;Jan21,2018</text>
                            </div>

                        </div>
                        <div className="div1">
                            <img src={img3} alt="" />
                            <div className="details">
                                <span>The Best Street-Style <br />Pics Copenhagen<br /></span>
                                <text><FaCalendar />&nbsp;Jan21,2018</text>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="Lower_Footer">
                    <span>Copyright © 2023 by Anant. All Rights Reserved.</span>
                </div>
            </div>
        )
    }
}


export default Footer