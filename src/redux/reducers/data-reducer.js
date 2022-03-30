import dataEnglish from "../../data/dataEnglish";
import * as ActionTypes from "../actions/action-types";

let initialStateData = dataEnglish;

export const selectedData = (state = initialStateData, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_DATA:
            return { ...state, ...payload };

        default:
            return state;
    }
};
