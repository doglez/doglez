import React from "react";
import { Parallax } from "react-parallax";
import ContentHooks from "../../hooks/ContentHooks";
import CleanDesktopImg from "../../assets/img/clean-desktop.jpg";

const Works = () => {
    const textContent = ContentHooks();
    const worksText = textContent.worksText;

    return (
        <Parallax
            bgImage={CleanDesktopImg}
            bgImageAlt="Clean Desktop"
            renderLayer={(percentage) => (
                <div
                    style={{
                        position: "absolute",
                        background: `rgba(253, 126, 20, ${percentage * 1})`,
                        left: "50%",
                        top: "50%",
                        width: percentage * 500,
                        height: percentage * 500,
                    }}
                />
            )}
        >
            <section id="works" className="pt-5">
                <div
                    className="container text-secondary"
                    style={{ height: "350px", marginTop: "150px" }}
                >
                    <h1 className="display-5 text-center">{worksText.title}</h1>
                    <h1 className="display-6 text-center">{worksText.text1}</h1>
                </div>
            </section>
            <div style={{ height: "100px" }} />
        </Parallax>
    );
};

export default Works;
