import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";
import LanguageSelector from "./LanguageSelector";

const MenuItems = (props) => {
    const state = useSelector((state) => state.selectedData);
    const { home, about, skills, works, contact, language } = state.menuItems;

    return (
        <ul className={props.mobileOpen ? "menu mobileOpen" : "menu"}>
            <li>
                <Link
                    activeClass="active"
                    className="menuLink"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    onClick={props.handleDrawer}
                >
                    <i className="bi bi-house-door" />
                    {home}
                </Link>
            </li>
            <li>
                <Link
                    activeClass="active"
                    className="menuLink"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    onClick={props.handleDrawer}
                >
                    <i className="bi bi-person" />
                    {about}
                </Link>
            </li>
            <li>
                <Link
                    activeClass="active"
                    className="menuLink"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    onClick={props.handleDrawer}
                >
                    <i className="bi bi-code-slash" />
                    {skills}
                </Link>
            </li>
            <li>
                <Link
                    activeClass="active"
                    className="menuLink"
                    to="works"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    onClick={props.handleDrawer}
                >
                    <i className="bi bi-briefcase" />
                    {works}
                </Link>
            </li>
            <li>
                <Link
                    activeClass="active"
                    className="menuLink"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    onClick={props.handleDrawer}
                >
                    <i className="bi bi-envelope" />
                    {contact}
                </Link>
            </li>
            <LanguageSelector handleDrawer={props.handleDrawer} language={language} />
        </ul>
    );
};

export default MenuItems;
