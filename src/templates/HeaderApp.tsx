import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";

const HeaderApp = () => {
    const [headerScroll, setHeaderScroll] = useState<boolean>(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
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

export default HeaderApp;
