import React, { FC, useContext, useState } from "react";
import { StoreContext } from "../../store/StoreProvider";
import { types } from "../../store/StoreReducer";

interface ILanguageSelector {
    handleDrawer: (() => void) & React.MouseEventHandler<HTMLButtonElement>;
}

const LanguageSelector: FC<ILanguageSelector> = ({ handleDrawer }) => {
    const { state, dispatch } = useContext(StoreContext);
    const [englishLanguage, setEnglishLanguage] = useState(false);

    const handleLanguage = () => {
        handleDrawer();
        if (englishLanguage) {
            dispatch({ type: types.ENGLISH });
        } else {
            dispatch({ type: types.SPANISH });
        }
        setEnglishLanguage(!englishLanguage);
    };

    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a className="menuLink" onClick={handleLanguage}>
            <i className="bi bi-globe" />
            {state.menuItems.language}
        </a>
    );
};

export default LanguageSelector;
