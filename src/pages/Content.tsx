import React from "react";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Works from "./sections/Works";

const Content = () => {
    return (
        <>
            <Home />
            <About />
            <Skills />
            <Works />
            <Contact />
        </>
    );
};

export default Content;
