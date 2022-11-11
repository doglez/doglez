import React, { FC, useContext } from "react";
import { StoreContext } from "../../store/StoreProvider";

interface ILanguageSelector {
    language: string;
    handleDrawer: (() => void) & React.MouseEventHandler<HTMLButtonElement>;
}

const LanguageSelector: FC<ILanguageSelector> = ({
    language,
    handleDrawer,
}) => {
    const { dispatch } = useContext(StoreContext);

    const handleLanguage = () => {
        handleDrawer();
        dispatch({});
    };

    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a className="menuLink" onClick={handleLanguage}>
            <i className="bi bi-globe" />
            {language}
        </a>
    );
};

export default LanguageSelector;
