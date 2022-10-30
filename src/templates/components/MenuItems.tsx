import React, { FC } from "react";
import { Link } from "react-scroll";
import ContentHooks from "../../hooks/ContentHooks";
import LanguageSelector from "./LanguageSelector";

interface IMenuItem {
    mobileOpen: boolean;
    handleDrawer: (() => void) & React.MouseEventHandler<HTMLButtonElement>;
}

const MenuItems: FC<IMenuItem> = ({ mobileOpen, handleDrawer }) => {
    const textConent = ContentHooks();
    const menuList = Object.values(textConent.menuItems);
    const language = textConent.menuItems.language;

    const icons = [
        "house-door",
        "person",
        "code-slash",
        "briefcase",
        "envelope",
    ];

    return (
        <ul className={mobileOpen ? "menu mobileOpen" : "menu"}>
            {icons.map((icon, key) => (
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
                        <i className={`bi bi-${icon}`} />
                        {menuList[key]}
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
