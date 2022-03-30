import * as ActionTypes from "../actions/action-types";

let language = "";
if (navigator.languages[1] === "es") {
    language += "es";
} else {
    language += "en";
}

const initialStateLanguage = {
    language,
};

export const selectedLanguage = (
    state = initialStateLanguage,
    { type, payload }
) => {
    switch (type) {
        case ActionTypes.SELECT_LANGUAGE:
            return { ...state, language: payload };

        default:
            return state;
    }
};
