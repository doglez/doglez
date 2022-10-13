import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HeaderApp from "./templates/HeaderApp";

function App() {
    return (
        <BrowserRouter>
            <HeaderApp />
            <Routes>
                <Route path="*" element={<Navigate to="/en" replace />} />
                <Route path="/en" element={<div>English</div>} />
                <Route path="/es" element={<div>Español</div>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
