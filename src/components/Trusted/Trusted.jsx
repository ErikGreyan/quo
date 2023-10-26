import React from "react";
import google from "../Home/img/google.jpg";
import slack from "../Home/img/slack.jpg";
import amazon from "../Home/img/amazon.jpg";
import dropbox from "../Home/img/dropbox.jpg";
import microsot from "../Home/img/microsoft.jpg";
import real from "../Home/img/real.jpg";

const Trusted = () => {
    return (
        <>
            <section className="trusted">
                <h1>Trusted By</h1>
                <div className="trusted_items">
                    <div className="img">
                        <img src={google} alt="Google" />
                    </div>
                    <div className="img">
                        <img src={slack} alt="Slack" />
                    </div>
                    <div className="img">
                        <img src={amazon} alt="Amazon" />
                    </div>
                    <div className="img">
                        <img src={dropbox} alt="Dropbox" />
                    </div>
                    <div className="img">
                        <img src={microsot} alt="Microsot" />
                    </div>
                </div>

                <div className="real">
                    <div className="real_items">
                        <h1>Real time currency check <br /> and easier tracking system</h1>
                        <p className="text">Quo is the most easier way for transaction with your friends and family, <br />
                            No matter where are you. An exceptional way for make your life one step easier. <br />
                            Quo is the most easier way for transaction with your friends and family. </p>
                        <button>
                            <span>Explore Now</span>
                            <svg width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.6091 0.492869C12.6802 0.421609 12.7646 0.365073 12.8576 0.326497C12.9505 0.287922 13.0502 0.268066 13.1508 0.268066C13.2515 0.268066 13.3511 0.287922 13.4441 0.326497C13.5371 0.365073 13.6215 0.421609 13.6926 0.492869L18.2837 5.084C18.355 5.15508 18.4115 5.23951 18.4501 5.33248C18.4887 5.42544 18.5085 5.5251 18.5085 5.62575C18.5085 5.7264 18.4887 5.82606 18.4501 5.91902C18.4115 6.01198 18.355 6.09642 18.2837 6.1675L13.6926 10.7586C13.5489 10.9023 13.354 10.983 13.1508 10.983C12.9476 10.983 12.7528 10.9023 12.6091 10.7586C12.4654 10.6149 12.3847 10.4201 12.3847 10.2169C12.3847 10.0137 12.4654 9.81881 12.6091 9.67512L16.66 5.62575L12.6091 1.57638C12.5378 1.5053 12.4813 1.42086 12.4427 1.32789C12.4041 1.23493 12.3843 1.13527 12.3843 1.03462C12.3843 0.933973 12.4041 0.834313 12.4427 0.74135C12.4813 0.648387 12.5378 0.563948 12.6091 0.492869Z" fill="black" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.142578 5.62578C0.142578 5.42284 0.223196 5.22821 0.366697 5.08471C0.510197 4.94121 0.704826 4.8606 0.907766 4.8606H16.9767C17.1797 4.8606 17.3743 4.94121 17.5178 5.08471C17.6613 5.22821 17.7419 5.42284 17.7419 5.62578C17.7419 5.82872 17.6613 6.02335 17.5178 6.16685C17.3743 6.31035 17.1797 6.39097 16.9767 6.39097H0.907766C0.704826 6.39097 0.510197 6.31035 0.366697 6.16685C0.223196 6.02335 0.142578 5.82872 0.142578 5.62578Z" fill="black" />
                            </svg>
                        </button>
                    </div>
                    <div className="real_items_img">
                        <img src={real} alt="Real" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Trusted;