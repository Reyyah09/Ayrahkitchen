import React from 'react'
import '../section5/style.css'
import Img1 from '../../images/chef.jpg'
export default()=>{
    return(
        <>
        <div className="container our-team d-flex">
            <div className="col-md-6">
                <div className="section-title">
                MEET OUR CHEF
                <hr className="our-team-line"></hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. 
                    Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam commodo nibh.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. 
                        Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare.</p>
                </div>
            </div>
            <div className="col-md-6 ">
                <div className="team-image">
                <img src={Img1} alt="our-chef" />
                </div>

            </div>
        </div>
        </>
    )
}