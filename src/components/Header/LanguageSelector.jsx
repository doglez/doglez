import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getData, selectlanguage } from "../../redux/actions/webPage-creators";

const LanguageSelector = (props) => {
    //Agarra el lenguage desde la URL del navegador
    let { language } = useParams();

    //Despacha el lenguage al estado para que este disponible para toda la pagina web
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(selectlanguage(language));
        dispatch(getData(language));
    }, [dispatch, language]);

    return (
        <li className="dropdown my-3 my-lg-0">
            <button
                className="text-primary menuLink"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <i className="bi bi-globe" />
                {props.language}
            </button>
            <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                <li className="text-primary px-2">
                    <Link to="/language/en" onClick={props.handleDrawer}>
                        English
                    </Link>
                </li>
                <li className="text-primary px-2">
                    <Link to="/language/es" onClick={props.handleDrawer}>
                        Español
                    </Link>
                </li>
            </ul>
        </li>
    );
};

export default LanguageSelector;
