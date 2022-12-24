import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "normalize.css";
import "./assets/scss/styles.scss";
import "bootstrap/dist/js/bootstrap.bundle";
import Config from "./config/Config";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (Config.NODE_ENV === "production") {
    disableReactDevTools();
}

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
