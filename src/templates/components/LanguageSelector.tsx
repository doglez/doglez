import React, { FC } from "react";
import { Link } from "react-router-dom";

interface ILanguageSelector {
    language: string;
    handleDrawer: (() => void) & React.MouseEventHandler<HTMLButtonElement>;
}

const LanguageSelector: FC<ILanguageSelector> = ({
    language,
    handleDrawer,
}) => {
    return (
        <>
            <button
                className="dropdown-toggle text-primary menuLink"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <i className="bi bi-globe" />
                {language}
            </button>
            <ul
                className="dropdown-menu bg-dark"
                aria-labelledby="navbarDropdown"
            >
                <li className="text-primary px-2">
                    <Link to="/language/en" onClick={handleDrawer}>
                        English
                    </Link>
                </li>
                <li className="text-primary px-2">
                    <Link to="/language/es" onClick={handleDrawer}>
                        Español
                    </Link>
                </li>
            </ul>
        </>
    );
};

export default LanguageSelector;
