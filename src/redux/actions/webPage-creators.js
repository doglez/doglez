import dataEnglish from "../../data/dataEnglish";
import dataSpanish from "../../data/dataSpanish";
import * as ActionTypes from "./action-types";

export const selectlanguage = (language) => (dispatch) => {
    dispatch({
        type: ActionTypes.SELECT_LANGUAGE,
        payload: language,
    });
};

export const getData = (language) => (dispatch) => {
    if (language === "es") {
        dispatch({
            type: ActionTypes.GET_DATA,
            payload: dataSpanish,
        });
    } else if (language === "en") {
        dispatch({
            type: ActionTypes.GET_DATA,
            payload: dataEnglish,
        });
    }
};
