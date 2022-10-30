import React from "react";
import ContentHooks from "../../hooks/ContentHooks";
import TechnologicalEarth from "../../assets/video/technologicalEarth.mp4";
import ReactTypingEffect from "react-typing-effect";

const Home = () => {
    const textContent = ContentHooks();
    const homeText = textContent.homeText;

    return (
        <section id="home" className="home">
            <video
                autoPlay
                muted
                loop
                src={TechnologicalEarth}
                itemType="video/mp4"
            >
                Sorry, your browser doesn't support videos.
            </video>
            <div className="home-text wrapper">
                <div className="home-text-1">{homeText.text1}</div>
                <div className="home-text-2">Danilo Gonzalez</div>
                <div className="home-text-3">
                    {homeText.text2}
                    <span>
                        <ReactTypingEffect
                            text={["Front-End", "Back-End", "Full Stack"]}
                            eraseSpeed={300}
                            eraseDelay={3000}
                            typingDelay={3000}
                        />
                    </span>
                    {homeText.text3}
                </div>
            </div>
        </section>
    );
};

export default Home;
