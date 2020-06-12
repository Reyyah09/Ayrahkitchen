import React, { useState } from 'react'
import './style.css'
import Axios from 'axios'
import {ApiForm} from '../../config'
import Facebook from '../../images/facebook.png'
import Twitter from '../../images/twitter.png'
import Youtube from '../../images/youtube.png'




export default ()=>{
    const [Name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState("");
    const postDetail=(event)=>{
        event.preventDefault(event);
        let payload={Name:Name, email:email, message:message}
        Axios.post(ApiForm + '/api/contactform', payload).then(Response=>{
            console.log(Response.data);
            window.location.replace("/")
        })
    }
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
                <form onSubmit={event=>postDetail(event)}>
                <div className="footer-section">
                    <div className="footer-input">
                <input className="footer-input-one" placeholder="Name"
                value={Name}
                onChange={event=>setName(event.target.value)}
                ></input>
                <input className="footer-input-two" placeholder="Email"
                value={email}
                onChange={event=>setEmail(event.target.value)}
                ></input>
                
                </div>
                </div>
                <div className="footer-section">
                <input className="footer-input-three" placeholder="Message"
                value={message}
                onChange={event=>setMessage(event.target.value)}
                ></input>
                </div>
                <div className="footer-section">
                    <button  className="footer-btn" type="submit">SEND MESSAGE</button>
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