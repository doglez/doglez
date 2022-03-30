import React from "react";
import { useSelector } from "react-redux";
import { Rotate, Zoom } from "react-reveal";

const SkillsSection = () => {
    const state = useSelector((state) => state.selectedData);
    const { title, text1, text2, text3 } = state.skillsData;
    return (
        <div id="skills" className="py-5 bg-gradient">
            <div className="container">
                <h1 className="display-5 text-center">{title}</h1>
                <div className="row my-4" style={{ textAlign: "justify" }}>
                    <div className="col-lg-6 col-sm-12">
                        <Rotate top left>
                            <p className="fs-5 mb-4">{text1}</p>
                        </Rotate>
                        <Rotate top left>
                            <p className="fs-5 mb-4">{text2}</p>
                        </Rotate>
                        <Rotate top left>
                            <p className="fs-5 mb-4">{text3}</p>
                        </Rotate>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <Zoom>
                            <h5>Front-End / Back-End</h5>
                            <div className="progress my-2">
                                <div
                                    className="progress-bar fs-5 html-color"
                                    role="progressbar"
                                    style={{ width: "95%" }}
                                    aria-valuenow="30"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    HTML 95%
                                </div>
                            </div>
                            <div className="progress my-2">
                                <div
                                    className="progress-bar fs-5 sass-color"
                                    role="progressbar"
                                    style={{ width: "70%" }}
                                    aria-valuenow="30"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    Sass 70%
                                </div>
                            </div>
                            <div className="progress my-2">
                                <div
                                    className="progress-bar fs-5 javascript-color"
                                    role="progressbar"
                                    style={{ width: "90%" }}
                                    aria-valuenow="30"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    JavaScript 90%
                                </div>
                            </div>
                            <div className="progress my-2">
                                <div
                                    className="progress-bar fs-5 nodejs-color"
                                    role="progressbar"
                                    style={{ width: "85%" }}
                                    aria-valuenow="30"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    NodeJS 85%
                                </div>
                            </div>
                            <div className="progress my-2">
                                <div
                                    className="progress-bar fs-5 php-color"
                                    role="progressbar"
                                    style={{ width: "85%" }}
                                    aria-valuenow="30"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    PHP 85%
                                </div>
                            </div>
                            <h5>Framework / Libraries</h5>
                            <div className="progress my-2">
                                <div
                                    className="progress-bar fs-5 react-color"
                                    role="progressbar"
                                    style={{ width: "90%" }}
                                    aria-valuenow="30"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    React 90%
                                </div>
                            </div>
                            <div className="progress my-2">
                                <div
                                    className="progress-bar fs-5 bootstrap-color"
                                    role="progressbar"
                                    style={{ width: "95%" }}
                                    aria-valuenow="30"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    Bootstrap 95%
                                </div>
                            </div>
                            <div className="progress my-2">
                                <div
                                    className="progress-bar fs-5 nodejs-color"
                                    role="progressbar"
                                    style={{ width: "85%" }}
                                    aria-valuenow="30"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    ExpressJS 85%
                                </div>
                            </div>
                            <h5>Database</h5>
                            <div className="progress my-2">
                                <div
                                    className="progress-bar fs-5 mongo-color"
                                    role="progressbar"
                                    style={{ width: "80%" }}
                                    aria-valuenow="30"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    MongoDB 80%
                                </div>
                            </div>
                            <div className="progress my-2">
                                <div
                                    className="progress-bar fs-5 mysql-color"
                                    role="progressbar"
                                    style={{ width: "80%" }}
                                    aria-valuenow="30"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    MySQL 80%
                                </div>
                            </div>
                            <h5>Operating Systems</h5>
                            <div className="progress my-2">
                                <div
                                    className="progress-bar fs-5 ubunutu-color"
                                    role="progressbar"
                                    style={{ width: "95%" }}
                                    aria-valuenow="30"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    Linux Ubunutu 95%
                                </div>
                            </div>
                            <div className="progress my-2">
                                <div
                                    className="progress-bar fs-5 redhat-color"
                                    role="progressbar"
                                    style={{ width: "85%" }}
                                    aria-valuenow="30"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    Linux Red Hat 85%
                                </div>
                            </div>
                        </Zoom>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;
