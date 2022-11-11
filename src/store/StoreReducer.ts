import english from "../i18n/en.json";
import spanish from "../i18n/es.json";

enum LanguageActionKind {
    ENGLISH = "ENGLISH",
    SPANISH = "SPANISH",
}

export const types = {
    ENGLISH: "ENGLISH",
    SPANISH: "SPANISH",
};

export interface IInitialState {
    menuItems: {
        home: string;
        about: string;
        skills: string;
        works: string;
        contact: string;
        language: string;
    };
    homeText: {
        text1: string;
        text2: string;
        text3: string;
    };
    aboutText: {
        title: string;
        text1: string;
        text2: string;
        text3: string;
    };
    skillsText: {
        title: string;
        text1: string;
        text2: string;
        text3: string;
    };
    worksText: {
        title: string;
        text1: string;
    };
    contactText: {
        title: string;
        name: string;
        email: string;
        company: string;
        subject: string;
        message: string;
        requiredMessage: string;
        validName: string;
        validEmail: string;
        validCompany: string;
        validSubject: string;
        validMessage: string;
        submit: string;
        sentMessage1: string;
        sentMessage2: string;
    };
}

interface ILanguageAction {
    type: LanguageActionKind;
    payload: IInitialState;
}

export const initialState = english;

const StoreReducer = (state: IInitialState, action: ILanguageAction) => {
    switch (action.type) {
        case LanguageActionKind.ENGLISH:
            return english;

        case LanguageActionKind.SPANISH:
            return spanish;

        default:
            return state;
    }
};

export default StoreReducer;
