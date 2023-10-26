import React from "react";
import countries from "../Home/img/countries.jpg";

const Countries = () => {
    return (
        <section className="countries">
            <h1 className="title">Widely covering these countries</h1>
            <p className="text">
                Quo is the most easier way for transaction with your friends and family, No matter where are you. <br />
                An exceptional way for make your life one step easier. Quo is the most easier way for transaction with your friends and family,
            </p>

            <div className="countries_img">
                <img src={countries} alt="Countries" />
            </div>
        </section>
    );
}

export default Countries;