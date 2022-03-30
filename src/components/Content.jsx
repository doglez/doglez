import React from "react";
import HeaderMenu from "./Header/HeaderMenu";
import HomeSection from "./Home/HomeSection";
import AboutSection from "./About/AboutSection";
import SkillsSection from "./Skills/SkillsSection";
import WorksSection from "./Works/WorksSection";
import ContactSection from "./Contact/ContactSection";

const Content = () => {
    return (
        <div>
            <HeaderMenu />
            <HomeSection />
            <AboutSection />
            <SkillsSection />
            <WorksSection />
            <ContactSection />
        </div>
    );
};

export default Content;
