import React from 'react'
import './Video.css'
function Video() {
    return (
        <div className="video">
            <div className="upper">
                Featured Video ///////////////////////////////////////////////////////////////////////////////////////////////
            </div>
            <div className="text">
                Video
            </div>
            <div className="videobox">
                <iframe width="750" height="420" src="https://www.youtube.com/embed/ZV70-WYRNnU?si=72jN5zxtjB7QnZ27&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default Video