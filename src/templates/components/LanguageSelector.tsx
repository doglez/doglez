import React, { FC, useEffect, useReducer } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    setEnglishAction,
    setSpanishAction,
} from "../../hooks/reducer/actions";
import { reducer } from "../../hooks/reducer/reducer";
import { initialLanguateState } from "../../hooks/reducer/state";

interface ILanguageSelector {
    language: string;
    handleDrawer: (() => void) & React.MouseEventHandler<HTMLButtonElement>;
}

const LanguageSelector: FC<ILanguageSelector> = ({
    language,
    handleDrawer,
}) => {
    const location = useLocation();
    const languageUrl = location.pathname.split("/")[1];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [state, dispatch] = useReducer(reducer, initialLanguateState);

    const handlePathEvent = () => {
        handleDrawer();
    };

    useEffect(() => {
        if (languageUrl === "en") {
            dispatch(setEnglishAction);
        } else if (languageUrl === "es") {
            dispatch(setSpanishAction);
        }
    }, [languageUrl]);

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
                    <Link to="/en" onClick={handlePathEvent}>
                        English
                    </Link>
                </li>
                <li className="text-primary px-2">
                    <Link to="/es" onClick={handlePathEvent}>
                        Español
                    </Link>
                </li>
            </ul>
        </>
    );
};

export default LanguageSelector;
