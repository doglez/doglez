import React, { useContext } from "react";
import { Bounce, Zoom } from "react-awesome-reveal";
import { StoreContext } from "../../store/StoreProvider";

const Skills = () => {
    const { state } = useContext(StoreContext);
    const skillsText = state.skillsText;
    const techStack = {
        HTML: 2015,
        CSS: 2015,
        JavaScript: 2015,
        Bootstrap: 2015,
        Sass: 2015,
        Git: 2015,
        ReactJS: 2018,
        NodeJS: 2018,
        MongoDB: 2018,
        MySQL: 2017,
        RedHat: 2017,
        Ubuntu: 2017,
        Docker: 2020,
        TypeScript: 2020,
    };

    const currentYear = new Date().getFullYear();
    const techStackYears = Object.values(techStack);
    const techStackInfo = Object.keys(techStack);

    return (
        <section id="skills" className="py-5 bg-gradient">
            <div className="container">
                <h1 className="display-5 text-center">{skillsText.title}</h1>
                <div className="row my-4" style={{ textAlign: "justify" }}>
                    <div className="col-lg-6 col-sm-12">
                        <Bounce>
                            <p className="fs-5 mb-4">{skillsText.text1}</p>
                        </Bounce>
                        <Bounce>
                            <p className="fs-5 mb-4">{skillsText.text2}</p>
                        </Bounce>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <Zoom>
                            {techStackInfo.map((info, key) => (
                                <div className="progress my-2" key={key}>
                                    <div
                                        className={`progress-bar ${info.toLowerCase()}-color fs-6`}
                                        role="progressbar"
                                        style={{
                                            width: `${Math.round(
                                                ((currentYear -
                                                    techStackYears[key]) *
                                                    100) /
                                                    (currentYear -
                                                        techStack.HTML)
                                            )}% `,
                                        }}
                                        aria-valuenow={Math.round(
                                            ((currentYear -
                                                techStackYears[key]) *
                                                100) /
                                                (currentYear - techStack.HTML)
                                        )}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                        aria-label={techStackInfo[key]}
                                    >
                                        {info}{" "}
                                        {currentYear - techStackYears[key]}{" "}
                                        {skillsText.text3}
                                    </div>
                                </div>
                            ))}
                        </Zoom>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
