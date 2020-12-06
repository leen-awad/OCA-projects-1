import './nav.scss';
import { useState } from 'react';
import { UserContext } from '../UserContext'
import Logo from "../img/MarvelLogo.png"
// import {BrowserRouter as Router , Route } from "react-router-dom"

// import Booking from "../Booking"


function Nav() {

    const [isOpen, setIsOpen] = useState(false);
    const [isProfile, setProfile] = useState(localStorage.getItem("email") ? "Profile" : "Log in");

    const [islogin2, setUserName] = useState(sessionStorage.getItem("islogin"))

    function loginfor() {
        isProfile === "Profile" ? window.location = "/profile" : window.location = "/login"
    }

    const openToggler = () => {
        setIsOpen(!isOpen);
    }

    function login() {
        sessionStorage.setItem("islogin", true);
        setUserName("true");
        setProfile("Profile")

    }






    return (
        <UserContext.Provider value={islogin2} >




            <div className="nav-page">
                <nav className='nav'>

                    <a href="/"><img style={{ height: "6vh", position: "absolute", left: "10px", top: "1vh" }} src={Logo} alt='Logo' /></a>

                    <div onClick={openToggler} className="humburger">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>

                    <ul className={isOpen ? 'nav-links open ' : 'nav-links'}>
                        <li><a href="/">Main</a></li>
                        <li><a href="/services" onClick={login}>Services</a></li>
                        <li><a href="/login" onClick={loginfor} >{isProfile}</a></li>
                        {/* <li><a onClick={logout} >About us</a></li> */}

                    </ul>

                </nav>



            </div>
            {/* <Booking/> */}
        </UserContext.Provider>
    );
}

export default Nav;
