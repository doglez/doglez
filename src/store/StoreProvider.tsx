import React, { createContext, Dispatch, FC, useReducer } from "react";
import StoreReducer, { IInitialStore, initialStore } from "./StoreReducer";

interface IStoreProvider {
    children: JSX.Element;
}

export const StoreContext = createContext<{
    state: IInitialStore;
    dispatch: Dispatch<any>;
}>({ state: initialStore, dispatch: () => null });

const StoreProvider: FC<IStoreProvider> = ({ children }) => {
    const [state, dispatch] = useReducer(StoreReducer, initialStore);

    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;
