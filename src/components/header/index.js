import React, { useState, useEffect } from 'react'
import './style.css'
export default () => {
    const [header1,setHeader1]=useState(false)
    const [header2,setHeader2]=useState(false)
    const [changeColor,setChangeColor]=useState(false)
    useEffect(()=>{
        let scrollpos = window.scrollY;
        window.addEventListener('scroll', function () {
            scrollpos = window.scrollY;
         
            if (scrollpos > 50) {
                setHeader2(true)
                setHeader1(false)
                
            }
            else if(scrollpos < 50) {
                setHeader1(true)
                setHeader2(false)
             
            }
        });
    },[])
    useEffect(()=>{
        let scrollpos = window.scrollY;
        window.addEventListener('scroll', function () {
            scrollpos = window.scrollY;
            console.log("scrollpos", scrollpos)
            if (scrollpos > 415 && scrollpos < 715) {
                setChangeColor(true)
            }
            else if(scrollpos < 415) {
                setChangeColor(false)
            }
        });
    },[])
    return (
        <>
        {header1 &&
            <div className="header-main">
                <ul>
                    <li >Specials</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Chef</li>
                    <li>Contact</li>
                </ul>
            </div>
            }
            { header2 &&
            <div className="header-main2">
                <ul>
                    <li className={changeColor ? " test" : ""}>Specials</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Chef</li>
                    <li>Contact</li>
                </ul>
            </div>
            }
        </>
    )
}