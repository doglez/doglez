import React from "react";
import { useSelector } from "react-redux";
import ReactTypingEffect from "react-typing-effect";
import TechnologicalEarth from "../../assets/video/technologicalEarth.mp4";

const HomeSection = () => {
    const state = useSelector((state) => state.selectedData);
    const { text1, text2, text3 } = state.homeData;

    return (
        <section id="home" className="home">
            <video autoPlay muted loop src={TechnologicalEarth} type="video/mp4" />
            <div className="home-text wrapper">
                <div className="home-text-1">{text1}</div>
                <div className="home-text-2">Danilo Gonzalez</div>
                <div className="home-text-3">
                    {text2}
                    <span>
                        <ReactTypingEffect
                            text={["Front-End", "Back-End", "Full Stack"]}
                            eraseSpeed={300}
                            eraseDelay={3000}
                            typingDelay={3000}
                        />
                    </span>
                    {text3}
                </div>
            </div>
        </section>
    );
};

export default HomeSection;
