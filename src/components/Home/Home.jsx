import React from "react";
import Nav from "../Nav/Nav";
import Headers from "../Header/Header";
import Trusted from "../Trusted/Trusted";
import Works from "../Works/Works";
import Features from "../Features/Features";
import Countries from "../Countries/Countries";
import Footer from "../Footer/Footer";
import "./css/style.css"

const Home = () => {
    return (
        <>
            <Nav />
            <Headers />
            <main>
                <Trusted />
                <Works />
                <Features />
                <Countries />
            </main>
            <Footer />
        </>
    );
}

export default Home;