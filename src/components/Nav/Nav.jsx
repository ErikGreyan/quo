import React, { useState } from "react";
import logo from "../Home/img/logo.jpg";
import { Link } from "react-router-dom";

const Nav = () => {
    const [btnState, setButton] = useState(false);
    const menu = () => {
        setButton(btnState => !btnState);
    }
    let menuActive = btnState ? "active" : "";
    return (
        <nav>
            <div className="logo"><img src={logo} alt="logo" /></div>
            <ul className={menuActive}>
                <li><Link to="#">Money Transfer</Link></li>
                <li><Link to="#">Multi Currency</Link></li>
                <li><Link to="#">How it works</Link></li>
                <li><Link to="#">Business</Link></li>
                <li><Link to="#">Help</Link></li>
                <li className="login"><Link to="#">Log In</Link></li>
                <li><Link to="#" className="signup">Sign Up</Link></li>
            </ul>
            <div className={`btn ${menuActive}`} onClick={() => menu()}>
                <span></span>
            </div>
        </nav>
    );
}

export default Nav