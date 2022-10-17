import { Action, LanguageActionKind } from "./actions";
import { State } from "./state";

export const reducer = (state: State, action: Action) => {
    const { type, payload } = action;

    switch (type) {
        case LanguageActionKind.ENGLISH:
            return {
                ...state,
                language: payload,
            };

        case LanguageActionKind.SPANISH:
            return {
                ...state,
                language: payload,
            };

        default:
            return state;
    }
};
