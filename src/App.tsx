import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LoadingEffect from "./components/LoadingEffect";
import Content from "./pages/Content";
import HeaderApp from "./templates/HeaderApp";

function App() {
    const [loadingPage, setLoadingPage] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener("DOMContentLoaded", () => {
            setLoadingPage(!loadingPage);
        });
    }, [loadingPage]);

    return (
        <BrowserRouter>
            {loadingPage ? (
                <LoadingEffect />
            ) : (
                <>
                    <HeaderApp />
                    <Routes>
                        <Route
                            path="/"
                            element={<Navigate to="/en" replace />}
                        />
                        <Route path="/">
                            <Route path="en" element={<Content />} />
                            <Route path="es" element={<Content />} />
                            <Route
                                path="*"
                                element={<Navigate to="/en" replace />}
                            />
                        </Route>
                        <Route path="*" element={<div>404 Not Found</div>} />
                    </Routes>
                </>
            )}
        </BrowserRouter>
    );
}

export default App;
