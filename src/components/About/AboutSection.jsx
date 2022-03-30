import React from "react";
import { useSelector } from "react-redux";
import myPhoto from "../../assets/img/myPhoto.jpg";
import Fade from "react-reveal";

const AboutSection = () => {
    const state = useSelector((state) => state.selectedData);
    const { title, text1, text2, text3 } = state.aboutData;

    return (
        <div id="about" className="py-5">
            <div className="container">
                <h1 className="display-5 text-center">{title}</h1>
                <div className="row mt-5">
                    <div className="col-sm-12 d-block d-lg-none pb-4">
                        <Fade right>
                            <img
                                src={myPhoto}
                                alt="Danilo_Gonzalez"
                                className="rounded img-fluid"
                            />
                        </Fade>
                    </div>
                    <div className="col-lg-7 col-sm-12" style={{ textAlign: "justify" }}>
                        <Fade left>
                            <p className="fs-5 mb-4">{text1}</p>
                        </Fade>
                        <Fade left>
                            <p className="fs-5 mb-4">{text2}</p>
                        </Fade>
                        <Fade left>
                            <p className="fs-5 mb-4">{text3}</p>
                        </Fade>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block">
                        <Fade right>
                            <img
                                src={myPhoto}
                                alt="Danilo_Gonzalez"
                                className="rounded img-fluid"
                            />
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
