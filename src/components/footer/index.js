import React from 'react'
import './style.css'
import Facebook from '../../images/facebook.png'
import Twitter from '../../images/twitter.png'
import Youtube from '../../images/youtube.png'
export default ()=>{

    return(
        <>
         <div className="footer-main">
           
               
                <div className="footer-section">
                    <div className="image-one">
                        <h4>RESERVATIONS</h4>
                        <hr className="footer-hr-line"></hr>
                        <h5>Please Call</h5>
                        <h5>(887)654-3210</h5>
                    </div>
                    <div className="image-two">
                    <h4>ADDRESS</h4>
                    <hr className="footer-hr-line"></hr>
                    <h5>4321 California St,</h5>
                    <h5>San Francisco, CA 12345</h5>
                       
                    </div>
                    <div className="footer-div-three">
                    <h4>OPENING HOURS</h4>
                    <hr className="footer-hr-line"></hr>
                   <h5>Mon-Thurs: 10:00 AM - 11:00 PM</h5>
                   <h5>Fri-Sun: 11:00 AM - 02:00 AM</h5>
                        
                    </div>

                </div>
                
                <div className="footer-title">SEND US A MESSAGE</div>
                <hr className="footer-hr-line"></hr>
                <form>
                <div className="footer-section">
                    <div className="footer-input">
                <input className="footer-input-one" placeholder="Name"></input>
                <input className="footer-input-two" placeholder="Email"></input>
                
                </div>
                </div>
                <div className="footer-section">
                <input className="footer-input-three" placeholder="Message"></input>
                </div>
                <div className="footer-section">
                    <button className="footer-btn">SEND MESSAGE</button>
                </div>
                </form>
                <div className="footer-section-end">
                    <div className="footer-div-four">
                    <h5>2017 Gusto. All rights reserved. Design by Rehayyah</h5>
                    </div>
                    <div className="footer-div-five">
                    <img className="footer-img" src={Facebook} alt="Not Found"></img>
                    <img className="footer-img" src={Twitter} alt="Not Found"></img>
                    <img className="footer-img" src={Youtube} alt="Not Found"></img>
                    </div>
                </div>
            </div>
        </>
    );
}