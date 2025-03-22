// setup data layer
// we need this to track the market

import {createContext, useContext, useReducer } from "react";


//this is the data layer
export const StateContext = createContext();

//buld a provider
export const StateProvider = ({reducer, initialState, children}) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    );
};



export const useStateValue = () =>useContext(StateContext);