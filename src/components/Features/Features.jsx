import React from "react";
import users from "../Home/img/users.jpg";
import card from "../Home/img/card.jpg";
import weekly from "../Home/img/weekly.jpg";

const Features = () => {
    return (
        <section className="features">
            <h1 className="title">Worthy features that you will love</h1>
            <div className="features_items">
                <div className="features_item">
                    <div className="features_items_img">
                        <img src={users} alt="Users" />
                    </div>
                    <div className="features_items_txt">
                        <h1 className="title">
                            Boost your savings <br />
                            by cutting extra fees
                        </h1>
                        <p className="text">
                            Quo is the most easier way for transaction with your friends and family.  <br />
                            No matter where are you. An exceptional way for make your life one step easier. <br />
                            Quo is the most easier way for transaction with your friends and family,
                        </p>

                        <button>
                            <span>Learn How</span>
                            <svg width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.6721 0.386912C12.7431 0.315652 12.8276 0.259116 12.9206 0.22054C13.0135 0.181965 13.1132 0.162109 13.2138 0.162109C13.3145 0.162109 13.4141 0.181965 13.5071 0.22054C13.6001 0.259116 13.6845 0.315652 13.7556 0.386912L18.3467 4.97804C18.418 5.04912 18.4745 5.13356 18.5131 5.22652C18.5516 5.31948 18.5715 5.41914 18.5715 5.51979C18.5715 5.62044 18.5516 5.7201 18.5131 5.81306C18.4745 5.90603 18.418 5.99047 18.3467 6.06155L13.7556 10.6527C13.6119 10.7964 13.417 10.8771 13.2138 10.8771C13.0106 10.8771 12.8157 10.7964 12.6721 10.6527C12.5284 10.509 12.4477 10.3141 12.4477 10.1109C12.4477 9.90772 12.5284 9.71285 12.6721 9.56917L16.723 5.51979L12.6721 1.47042C12.6008 1.39934 12.5443 1.3149 12.5057 1.22194C12.4671 1.12897 12.4473 1.02931 12.4473 0.928665C12.4473 0.828016 12.4671 0.728356 12.5057 0.635393C12.5443 0.54243 12.6008 0.457991 12.6721 0.386912Z" fill="black" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.205566 5.51992C0.205566 5.31698 0.286184 5.12235 0.429685 4.97885C0.573186 4.83535 0.767814 4.75473 0.970754 4.75473H17.0397C17.2426 4.75473 17.4373 4.83535 17.5808 4.97885C17.7243 5.12235 17.8049 5.31698 17.8049 5.51992C17.8049 5.72286 17.7243 5.91749 17.5808 6.06099C17.4373 6.20449 17.2426 6.28511 17.0397 6.28511H0.970754C0.767814 6.28511 0.573186 6.20449 0.429685 6.06099C0.286184 5.91749 0.205566 5.72286 0.205566 5.51992Z" fill="black" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="features_item">
                    <div className="features_items_txt">
                        <h1 className="title">
                            Capable for taking <br />
                            multiple cards at one place
                        </h1>
                        <p className="text">
                            Quo is the most easier way for transaction with your friends and family.  <br />
                            No matter where are you. An exceptional way for make your life one step easier. <br />
                            Quo is the most easier way for transaction with your friends and family,
                        </p>

                        <button>
                            <span>Learn How</span>
                            <svg width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.6721 0.386912C12.7431 0.315652 12.8276 0.259116 12.9206 0.22054C13.0135 0.181965 13.1132 0.162109 13.2138 0.162109C13.3145 0.162109 13.4141 0.181965 13.5071 0.22054C13.6001 0.259116 13.6845 0.315652 13.7556 0.386912L18.3467 4.97804C18.418 5.04912 18.4745 5.13356 18.5131 5.22652C18.5516 5.31948 18.5715 5.41914 18.5715 5.51979C18.5715 5.62044 18.5516 5.7201 18.5131 5.81306C18.4745 5.90603 18.418 5.99047 18.3467 6.06155L13.7556 10.6527C13.6119 10.7964 13.417 10.8771 13.2138 10.8771C13.0106 10.8771 12.8157 10.7964 12.6721 10.6527C12.5284 10.509 12.4477 10.3141 12.4477 10.1109C12.4477 9.90772 12.5284 9.71285 12.6721 9.56917L16.723 5.51979L12.6721 1.47042C12.6008 1.39934 12.5443 1.3149 12.5057 1.22194C12.4671 1.12897 12.4473 1.02931 12.4473 0.928665C12.4473 0.828016 12.4671 0.728356 12.5057 0.635393C12.5443 0.54243 12.6008 0.457991 12.6721 0.386912Z" fill="black" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.205566 5.51992C0.205566 5.31698 0.286184 5.12235 0.429685 4.97885C0.573186 4.83535 0.767814 4.75473 0.970754 4.75473H17.0397C17.2426 4.75473 17.4373 4.83535 17.5808 4.97885C17.7243 5.12235 17.8049 5.31698 17.8049 5.51992C17.8049 5.72286 17.7243 5.91749 17.5808 6.06099C17.4373 6.20449 17.2426 6.28511 17.0397 6.28511H0.970754C0.767814 6.28511 0.573186 6.20449 0.429685 6.06099C0.286184 5.91749 0.205566 5.72286 0.205566 5.51992Z" fill="black" />
                            </svg>
                        </button>
                    </div>
                    <div className="features_items_img">
                        <img src={card} alt="Card" />
                    </div>
                </div>

                <div className="features_item">
                    <div className="features_items_img">
                        <img src={weekly} alt="Weekly" />
                    </div>
                    <div className="features_items_txt">
                        <h1 className="title">
                            Stay updated with your <br />
                            daily reports and news
                        </h1>
                        <p className="text">
                            Quo is the most easier way for transaction with your friends and family.  <br />
                            No matter where are you. An exceptional way for make your life one step easier. <br />
                            Quo is the most easier way for transaction with your friends and family,
                        </p>

                        <button>
                            <span>Learn How</span>
                            <svg width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.6721 0.386912C12.7431 0.315652 12.8276 0.259116 12.9206 0.22054C13.0135 0.181965 13.1132 0.162109 13.2138 0.162109C13.3145 0.162109 13.4141 0.181965 13.5071 0.22054C13.6001 0.259116 13.6845 0.315652 13.7556 0.386912L18.3467 4.97804C18.418 5.04912 18.4745 5.13356 18.5131 5.22652C18.5516 5.31948 18.5715 5.41914 18.5715 5.51979C18.5715 5.62044 18.5516 5.7201 18.5131 5.81306C18.4745 5.90603 18.418 5.99047 18.3467 6.06155L13.7556 10.6527C13.6119 10.7964 13.417 10.8771 13.2138 10.8771C13.0106 10.8771 12.8157 10.7964 12.6721 10.6527C12.5284 10.509 12.4477 10.3141 12.4477 10.1109C12.4477 9.90772 12.5284 9.71285 12.6721 9.56917L16.723 5.51979L12.6721 1.47042C12.6008 1.39934 12.5443 1.3149 12.5057 1.22194C12.4671 1.12897 12.4473 1.02931 12.4473 0.928665C12.4473 0.828016 12.4671 0.728356 12.5057 0.635393C12.5443 0.54243 12.6008 0.457991 12.6721 0.386912Z" fill="black" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.205566 5.51992C0.205566 5.31698 0.286184 5.12235 0.429685 4.97885C0.573186 4.83535 0.767814 4.75473 0.970754 4.75473H17.0397C17.2426 4.75473 17.4373 4.83535 17.5808 4.97885C17.7243 5.12235 17.8049 5.31698 17.8049 5.51992C17.8049 5.72286 17.7243 5.91749 17.5808 6.06099C17.4373 6.20449 17.2426 6.28511 17.0397 6.28511H0.970754C0.767814 6.28511 0.573186 6.20449 0.429685 6.06099C0.286184 5.91749 0.205566 5.72286 0.205566 5.51992Z" fill="black" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;