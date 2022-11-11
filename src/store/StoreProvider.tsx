import React, { createContext, Dispatch, FC, useReducer } from "react";
import StoreReducer, { IInitialState, initialState } from "./StoreReducer";

interface IStoreProvider {
    children: JSX.Element;
}

export const StoreContext = createContext<{
    state: IInitialState;
    dispatch: Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

const StoreProvider: FC<IStoreProvider> = ({ children }) => {
    const [state, dispatch] = useReducer(StoreReducer, initialState);

    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;
