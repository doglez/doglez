import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import englishData from "../i18n/en.json";
import spanishDAta from "../i18n/es.json";

/**
 * @name ContentHooks
 * @description Returns the content in the language that has the URL
 * @returns {Object} Content
 */
const ContentHooks = () => {
    const location = useLocation();
    const languageUrl = location.pathname.split("/")[1];
    const [content, setContent] = useState(englishData);
    useEffect(() => {
        if (languageUrl === "en") {
            setContent(englishData);
        } else if (languageUrl === "es") {
            setContent(spanishDAta);
        }
    }, [languageUrl]);

    return content;
};

export default ContentHooks;
