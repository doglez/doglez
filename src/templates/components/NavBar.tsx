import React, { useState } from "react";
import Logo from "../../components/Logo";
import MenuItems from "./MenuItems";

const NavBar = () => {
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);
    const handleDrawer: (() => void) &
        React.MouseEventHandler<HTMLButtonElement> = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <nav className="navbar container">
            <Logo />
            <div className="navbar-menu-drawer">
                <span
                    className="material-icons md-36 text-primary"
                    onClick={handleDrawer}
                >
                    {mobileOpen ? "close" : "menu"}
                </span>
            </div>
            <div className="navbar-menu">
                <MenuItems
                    mobileOpen={mobileOpen}
                    handleDrawer={handleDrawer}
                />
            </div>
        </nav>
    );
};

export default NavBar;
