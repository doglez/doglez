import React from "react";
import ContentHooks from "../../hooks/ContentHooks";
import myPhoto from "../../assets/img/myPhoto.jpg";
import { Fade } from "react-awesome-reveal";

const About = () => {
    const textContent = ContentHooks();
    const aboutText = textContent.aboutText;

    return (
        <section id="about" className="py-5">
            <div className="container">
                <h1 className="display-5 text-center">{aboutText.title}</h1>
                <div className="row mt-5">
                    <div className="col-sm-12 d-block d-lg-none pb-4">
                        <Fade cascade delay={400}>
                            <img
                                src={myPhoto}
                                alt="Danilo_Gonzalez"
                                className="rounded img-fluid"
                            />
                        </Fade>
                    </div>
                    <div
                        className="col-lg-7 col-sm-12"
                        style={{ textAlign: "justify" }}
                    >
                        <Fade cascade delay={400}>
                            <p className="fs-5 mb-4">{aboutText.text1}</p>
                        </Fade>
                        <Fade cascade delay={400}>
                            <p className="fs-5 mb-4">{aboutText.text2}</p>
                        </Fade>
                        <Fade cascade delay={400}>
                            <p className="fs-5 mb-4">{aboutText.text3}</p>
                        </Fade>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block">
                        <Fade cascade delay={400}>
                            <img
                                src={myPhoto}
                                alt="Danilo_Gonzalez"
                                className="rounded img-fluid"
                            />
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
