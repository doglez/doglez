import React, { FC, useContext } from "react";
import { Link } from "react-scroll";
import { StoreContext } from "../../store/StoreProvider";
import LanguageSelector from "./LanguageSelector";

interface IMenuItem {
    mobileOpen: boolean;
    handleDrawer: (() => void) & React.MouseEventHandler<HTMLButtonElement>;
}

const MenuItems: FC<IMenuItem> = ({ mobileOpen, handleDrawer }) => {
    const { state } = useContext(StoreContext);
    const menuList = Object.values(state.menuItems);
    const menuLinks = Object.keys(state.menuItems);

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
                        to={menuLinks[key]}
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
            <li>
                <LanguageSelector
                    language={menuList[icons.length]}
                    handleDrawer={handleDrawer}
                />
            </li>
        </ul>
    );
};

export default MenuItems;
