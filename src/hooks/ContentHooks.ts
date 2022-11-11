import { useState, useEffect } from "react";
import englishData from "../i18n/en.json";
import spanishDAta from "../i18n/es.json";

/**
 * @name ContentHooks
 * @description Returns the content in the language that has the URL
 * @returns {Object} Content
 */
const ContentHooks = () => {
    const [content, setContent] = useState(englishData);
    const language = "en";
    useEffect(() => {
        if (language === "en") {
            setContent(englishData);
        } else if (language === "es") {
            setContent(spanishDAta);
        }
    }, [language]);

    return content;
};

export default ContentHooks;
