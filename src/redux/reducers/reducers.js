import { combineReducers } from "redux";
import { selectedData } from "./data-reducer";
import { selectedLanguage } from "./language-reducer";

const reducers = combineReducers({
    selectedLanguage: selectedLanguage,
    selectedData: selectedData,
});

export default reducers;
