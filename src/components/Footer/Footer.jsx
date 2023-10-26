import React from "react";
import logo from "../Home/img/logo.jpg"
import { Link } from "react-router-dom";

const date = new Date().getFullYear();

const Footer = () => {
    return (
        <footer>
            <section className="footer_info">
                <div className="footer_info_logo">
                    <img src={logo} alt="Logo" />
                    <p className="text">
                        Quo is the most easier way for transaction <br />
                        with your friends and family, No matter where are you. <br />
                        An exceptional way for make your life one step easier.
                    </p>
                </div>
                <div className="footer_info_txt">
                    <h2>Company</h2>
                    <ul>
                        <li><Link to="#">About Us</Link></li>
                        <li><Link to="#">Contact Us</Link></li>
                        <li><Link to="#">Support</Link></li>
                        <li><Link to="#">News/Blog</Link></li>
                    </ul>
                </div>

                <div className="footer_info_txt">
                    <h2>Terms</h2>
                    <ul>
                        <li><Link to="#">Privacy Policy</Link></li>
                        <li><Link to="#">Terms of Usage</Link></li>
                        <li><Link to="#">Areas of coverage</Link></li>
                    </ul>
                </div>

                <div className="footer_info_txt">
                    <h2>Contact</h2>
                    <ul>
                        <li><Link to="#">84/E/2  West Jafrabad, Liverpool, Uk</Link></li>
                        <li><Link to="#">+8801757410907</Link></li>
                    </ul>
                </div>
            </section>

            <section className="footer_copyright">
                <p> &#169; {date} . Made with
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1_3681)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.47976 2.76327C12.9178 -1.79873 24.0138 6.18427 8.47976 16.4493C-7.05424 6.18527 4.04176 -1.79873 8.47976 2.76327Z" fill="#FF6B6B" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_3681">
                                <rect width="16" height="16" fill="white" transform="translate(0.47998 0.449219)" />
                            </clipPath>
                        </defs>
                    </svg>
                    by <Link to="https://erikgreyan.github.io/" target="_blank" className="by_link">Erik Greyan</Link></p>
            </section>
        </footer>
    );
}

export default Footer;