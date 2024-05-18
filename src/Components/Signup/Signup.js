import React from 'react';
import './Signup.css';
function Signup() {
    return (
        <div className="signup_container">
            <div className="note1">
                Sign up for our <span>Newsletter</span>
            </div>
            <br/>
            <br/>
            <div className='note2'>
                <span>Subscribe now to get notified about exclusive offers</span>
                <br/>
                <span>from The ... every week!</span>
            </div>
            <br/>
            <br/>
            <input className='email' placeholder='Your email address' type='email'/>
            <button type="submit">Sign Up</button>
        </div>
    )
}

export default Signup