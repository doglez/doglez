import React, { useEffect, useState } from "react";
import LoadingEffect from "./components/LoadingEffect";
import Content from "./pages/Content";
import StoreProvider from "./store/StoreProvider";
import HeaderApp from "./templates/HeaderApp";

function App() {
    const [loadingPage, setLoadingPage] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener("DOMContentLoaded", () => {
            setLoadingPage(!loadingPage);
        });
    }, [loadingPage]);

    return (
        <StoreProvider>
            {loadingPage ? (
                <LoadingEffect />
            ) : (
                <>
                    <HeaderApp />
                    <Content />
                </>
            )}
        </StoreProvider>
    );
}

export default App;
