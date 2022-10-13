import React, { FC } from "react";
import { Link } from "react-scroll";
import LanguageSelector from "./LanguageSelector";

interface IMenuItem {
    mobileOpen: boolean;
    handleDrawer: (() => void) & React.MouseEventHandler<HTMLButtonElement>;
}

const MenuItems: FC<IMenuItem> = ({ mobileOpen, handleDrawer }) => {
    const menuList = ["Home", "About", "Skills", "Works", "Contact"];
    const language = "Language";

    const icons = [
        "house-door",
        "person",
        "code-slash",
        "briefcase",
        "envelope",
    ];

    return (
        <ul className={mobileOpen ? "menu mobileOpen" : "menu"}>
            {menuList.map((menu, key) => (
                <li key={key}>
                    <Link
                        activeClass="active"
                        className="menuLink"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        onClick={handleDrawer}
                    >
                        <i className={`bi bi-${icons[key]}`} />
                        {menu}
                    </Link>
                </li>
            ))}
            <li className="dropdown-center my-3 my-lg-0">
                <LanguageSelector
                    handleDrawer={handleDrawer}
                    language={language}
                />
            </li>
        </ul>
    );
};

export default MenuItems;
