import React, { useState } from "react";
import Logo from "../Logo/Logo";
import MenuItems from "./MenuItems";

const NavBar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawer = () => {
        setMobileOpen(!mobileOpen);
    };
    return (
        <nav className="navbar container">
            <h3 className="navbar-logo">
                <Logo />
            </h3>
            <div className="navbar-menu-drawer">
                <span onClick={handleDrawer} className="material-icons md-36">
                    {mobileOpen ? "close" : "menu"}
                </span>
            </div>
            <div className="navbar-menu">
                <MenuItems mobileOpen={mobileOpen} handleDrawer={handleDrawer} />
            </div>
        </nav>
    );
};

export default NavBar;
