import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LoadingEffect from "./components/LoadingEffect";
import HeaderApp from "./templates/HeaderApp";

function App() {
    const [loadingPage, setLoadingPage] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener("DOMContentLoaded", () => {
            setLoadingPage(!loadingPage);
        });
    }, [loadingPage]);

    return (
        <>
            {loadingPage ? (
                <LoadingEffect />
            ) : (
                <BrowserRouter>
                    <HeaderApp />
                    <Routes>
                        <Route
                            path="*"
                            element={<Navigate to="/en" replace />}
                        />
                        <Route path="/en" element={<div>English</div>} />
                        <Route path="/es" element={<div>Español</div>} />
                    </Routes>
                </BrowserRouter>
            )}
        </>
    );
}

export default App;
