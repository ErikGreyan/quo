import React from "react";
import img from "../Home/img/header.jpg";

const Header = () => {
    return (
        <header>
            <div className="header_items">
                <div className="header_item">
                    <h1>Experience the easier way <br /> for transaction</h1>
                    <p className="text">
                        Quo is the most easier way for transaction with your friends and family, now matter where are you.
                        <br />
                        An exceptional way for make your life one step easier
                    </p>
                    <button>
                        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.75 0.0605469C31.7732 0.0605469 40.75 9.03305 40.75 20.0721C40.75 31.088 31.7732 40.0605 20.75 40.0605C9.72683 40.0605 0.75 31.088 0.75 20.0721C0.75 9.03305 9.72683 0.0605469 20.75 0.0605469ZM18.472 12.1204C18.0473 12.1204 17.6419 12.2168 17.2558 12.4098C16.7732 12.6799 16.3871 13.1044 16.1747 13.6061C16.0396 13.9535 15.8272 14.9954 15.8272 15.0147C15.6149 16.1532 15.499 18.0056 15.499 20.0509C15.499 22.0017 15.6149 23.775 15.7886 24.9327C15.8079 24.952 16.0203 26.2448 16.2519 26.6886C16.6766 27.499 17.5068 28.0007 18.3948 28.0007H18.472C19.0512 27.9814 20.2674 27.4797 20.2674 27.4605C22.3137 26.6114 26.3485 23.9679 27.9701 22.212L28.0859 22.0962C28.2983 21.884 28.5685 21.556 28.6264 21.4788C28.9353 21.0736 29.0898 20.5719 29.0898 20.0721C29.0898 19.5106 28.916 18.9896 28.5878 18.5651C28.5106 18.4879 28.221 18.1599 27.9508 17.8898C26.3678 16.1918 22.2365 13.4132 20.0743 12.5642C19.7461 12.431 18.916 12.1397 18.472 12.1204Z" fill="white" />
                        </svg>
                        <span>See how we works</span>
                    </button>
                </div>
                <div className="header_item_img">
                    <img src={img} alt="Img" />
                </div>
            </div>
        </header>
    )
}

export default Header;