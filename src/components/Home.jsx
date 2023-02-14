import React from "react";
import { FaGooglePlay, FaAppStoreIos } from 'react-icons/fa';
import Animate from "./Animate";
// import { motion } from "framer-motion";
function Home() {
    return (
        <Animate>
        <div id="main">
            <div className="name">
                <h1>Create Beautiful <span className="frs">UI<span className="sc">|</span>UX </span>and Show it to the world !</h1>
                <div className="details">
                    <a href="#" className="c-btn"><FaGooglePlay /></a>
                    <a href="#" className="c-btn cc"><FaAppStoreIos /></a>
                </div>
            </div>
        </div>
        </Animate>
    )
}
export default Home;