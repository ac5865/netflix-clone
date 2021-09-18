import React, {useState, useEffect} from 'react'
import "./Nav.css"

function Nav() {
    const [show, handleShow] =  useState(false);
    useEffect(() =>{
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 100){
                handleShow(true);
            }
            else
                handleShow(false);
        });
        return()=>{
            window.addEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo" 
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
            alt="Netflix Logo"/>
            <img className="nav__avatar"
            src="https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
            alt="Avatar" />
        </div>
    )
}

export default Nav
