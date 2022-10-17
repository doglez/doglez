import english from "../../i18n/en.json";
import spanish from "../../i18n/es.json";

export enum LanguageActionKind {
    ENGLISH = "ENGLISH",
    SPANISH = "SPANISH",
}

export type Action = {
    type: LanguageActionKind;
    payload: object;
};

export const setEnglishAction: Action = {
    type: LanguageActionKind.ENGLISH,
    payload: english,
};

export const setSpanishAction: Action = {
    type: LanguageActionKind.SPANISH,
    payload: spanish,
};
