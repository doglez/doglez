import React from "react";
import ContentHooks from "../../hooks/ContentHooks";

const Home = () => {
    const textConent = ContentHooks();
    console.log(textConent);
    return <div>Home</div>;
};

export default Home;
