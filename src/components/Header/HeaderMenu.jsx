import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";

const HeaderMenu = () => {
    const [headerScroll, setHeaderScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            // console.log(window.scrollY)
            if (window.scrollY >= 600) {
                setHeaderScroll(true);
            } else {
                setHeaderScroll(false);
            }
        });
    }, [headerScroll]);

    return (
        <header
            className={
                headerScroll
                    ? "headerScrollEffect py-1 fixed-top"
                    : "header py-1 fixed-top"
            }
        >
            <NavBar />
        </header>
    );
};

export default HeaderMenu;
