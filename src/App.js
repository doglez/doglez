import React, { useState } from "react";
import "./assets/css/styles.css";
import "bootstrap/dist/js/bootstrap.bundle";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import Content from "./components/Content.jsx";
import { useLoading, BallTriangle } from "@agney/react-loading";
import { useSelector } from "react-redux";

function App() {
    //Selecciona el lenguaje desde el estado del reducer
    let language = "/language/";

    const state = useSelector((state) => state.selectedLanguage.language);
    language += state;

    //Efecto por mientras carga la pantalla completa de la pagina web
    const [loadingPage, setLoadingPage] = useState(false);

    window.addEventListener("DOMContentLoaded", () => {
        setLoadingPage(!loadingPage);
    });

    const { containerProps, indicatorEl } = useLoading({
        loading: true,
        indicator: <BallTriangle className="loadingPage" />,
    });

    return (
        <div {...containerProps}>
            {loadingPage ? (
                <Router>
                    <div className="bg-dark text-primary">
                        <Switch>
                            <Route exact path="/">
                                <Redirect to={language} />
                            </Route>
                            <Route path="/language/:language" exact component={Content} />
                            <Route>404 Error Pagina no encontrada</Route>
                        </Switch>
                    </div>
                </Router>
            ) : (
                indicatorEl
            )}
        </div>
    );
}

export default App;
