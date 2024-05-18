// import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { FaComment, FaCalendar, FaFacebookSquare, FaTwitterSquare, FaGooglePlusSquare, FaPinterestSquare, FaArrowCircleRight } from 'react-icons/fa';
import img1 from '../Assets/Skyscrapper.png';
import img2 from '../Assets/big.jpg';
import img3 from '../Assets/100x70-1.jpg';
import img4 from '../Assets/100x70-2.jpg';
import img5 from '../Assets/100x70-3.jpg';
import img6 from '../Assets/banner.png';
import './Page1.css';
import NewsItem from '../NewsItem/NewsItem';
export class Page1 extends Component {
    articles = [
        {
            "source": {
                "id": "news24",
                "name": "News24"
            },
            "author": "sport",
            "title": "Death or glory? Cricket World Cup anchors changing game of one-day cricket",
            "description": "The World Cup which gets underway on Thursday will provide a sharp focus for one-day international cricket and a chance to show how the 50-over game has evolved since India last staged the tournament in 2011.",
            "url": "https://www.news24.com/sport/cricket/death-or-glory-cricket-world-cup-anchors-changing-game-of-one-day-cricket-20231003",
            "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/3995/1f284a8e03ab41c4b8f7ce49ae6b60c1.jpg",
            "publishedAt": "2023-10-03T07:36:16",
            "content": "<ul><li>The 2023 Cricket World Cup starts in India on Thursday.</li><li>The 50-over game is struggling for popularity in a sport dominated by T20 cricket. </li><li>India great Sachin Tendulkar says t… [+3790 chars]"
        },
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": null,
            "title": "'Cricket's carbon footprint brings opportunity'",
            "description": "Australia captain Pat Cummins discusses his foundation, and the sport's opportunity to lead the way on tackling climate change.",
            "url": "http://www.bbc.co.uk/sport/cricket/66961332",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/A454/production/_131286024_p0ghgmh1.jpg",
            "publishedAt": "2023-10-03T06:37:21.0918741Z",
            "content": "Cummins wins BBC Green Sport Athlete of the Year\r\nCricket can use its platform to make a difference in combatting climate change despite its \"huge\" carbon footprint, says Australia captain Pat Cummin… [+3865 chars]"
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Al Jazeera Staff",
            "title": "Five big names missing out on the 2023 ICC Cricket World Cup",
            "description": "Some of the world’s leading cricketers are set to miss the tournament due to injury, drama and in some cases, both.",
            "url": "http://www.aljazeera.com/sports/2023/10/3/five-big-names-missing-out-2023-icc-cricket-world-cup",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/09/AP18023402304587-1695799826.jpg?resize=1920%2C1440",
            "publishedAt": "2023-10-03T05:12:23Z",
            "content": "For professional athletes, representing their country in a global sporting event is usually their driving ambition and winning it is the crowning glory of their careers.\r\nFor most cricketers, the one… [+5360 chars]"
        },
    ]

    constructor() {
        super();
        console.log("Called Constructor from news components");
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    async componentDidMount() {
        console.log("render2");
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=aab66fd47f1746568c3fad615ba3898e"
        let data = fetch(url);
        let parseddata = await data.json()
        console.log(parseddata);
        this.setState({ articles: parseddata.articles });

    }

    render() {
        console.log("Render 1");
        return (
            <div className="page1_container">
                <div className="left_container">
                    <div className="trending">
                        <h2>Trending //////////</h2>
                        <div className="trending_details">
                            <span><FaComment /> &nbsp; 9 Comment<br /></span>
                            <br />
                            <p>Ut ac justo ut nulla<br /> semper imperdiet.</p>
                        </div>
                        <div className="trending_details">
                            <span><FaComment /> &nbsp; 9 Comment<br /></span>
                            <br />
                            <p>Ut ac justo ut nulla<br /> semper imperdiet.</p>
                        </div>
                        <div className="trending_details">
                            <span><FaComment /> &nbsp; 9 Comment<br /></span>
                            <br />
                            <p>Ut ac justo ut nulla<br /> semper imperdiet.</p>
                        </div>
                        <div className="trending_details" style={{ border: 'none' }}>
                            <span><FaComment /> &nbsp; 9 Comment<br /></span>
                            <br />
                            <p>Ut ac justo ut nulla<br /> semper imperdiet.</p>
                        </div>
                        <div className="skyscrapper">
                            <img src={img1} alt="" />
                        </div>
                    </div>
                </div>
                <div className="center_container">
                    <div className="bigimg">
                        <img src={img2} alt="" />
                    </div>
                    <div className="lyfstyle">
                        <span>In <span id='insider' className='mail'>LIFESTYLE</span> </span>
                        <br />
                        <span id='hello'><FaCalendar /> Jan 21,2018 &nbsp; <FaComment />&nbsp;9Comments</span>
                        <h2 className='mail' id='heading'>It is a long established fact that a reader will be<br /> distracted by the readable content.</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when<br /> looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution<br /> of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        <button type='button' id='submit'> Reading <FaArrowCircleRight /></button>
                    </div>
                    <div className="newsbox">
                        {this.state.articles.map((element) => {
                            return <NewsItem key={element.url} title={element.title} description={element.description} imgUrl={element.urlToImage} dateTime={element.publishedAt.slice(0, 10)} newsUrl={element.url} />
                        })}
                    </div>
                </div>
                <div className="right_container">
                    <div className="container4">
                        <h2>Latest Post ////////////////////////////</h2>
                        <div className="div1">
                            <img src={img3} alt="" />
                            <div className="details">
                                <span>The Best Street-Style <br />Pics Copenhagen<br /></span>
                                <text><FaCalendar />&nbsp;Jan21,2018</text>
                            </div>
                        </div>
                        <div className="div1">
                            <img src={img4} alt="" />
                            <div className="details">
                                <span>The Best Street-Style <br />Pics Copenhagen<br /></span>
                                <text><FaCalendar />&nbsp;Jan21,2018</text>
                            </div>

                        </div>
                        <div className="div1">
                            <img src={img5} alt="" />
                            <div className="details">
                                <span>The Best Street-Style <br />Pics Copenhagen<br /></span>
                                <text><FaCalendar />&nbsp;Jan21,2018</text>
                            </div>

                        </div>
                    </div>
                    <br />
                    <div className="subscribe">
                        <h2>Subsribe ////////////////////////////</h2>
                        <div className="subscribe_div1">
                            <div className="subscribe_div2">
                                <FaFacebookSquare /><br />
                            </div>
                            <div className="subscribe_div3">
                                <FaTwitterSquare /><br />
                            </div>
                            <div className="subscribe_div4">
                                <FaGooglePlusSquare /><br />
                            </div>
                            <div className="subscribe_div5">
                                <FaPinterestSquare /><br />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="banner">
                        <img src={img6} alt="" />
                    </div>
                    <div className="category">
                        <h2>Category ////////////////////////////</h2>
                        <br />
                        <div className="category1">
                            <div className="info">FASHION</div>
                        </div>
                        <br />
                        <div className="category2">
                            <div className="info">TRAVEL</div>
                        </div>
                        <br />
                        <div className="category3">
                            <div className="info">LYFSTYLE</div>
                        </div>
                    </div>


                </div>

            </div>
        )
    }
}

export default Page1