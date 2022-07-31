import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext(); // we are creating the context.

export const StateProvider = ( {reducer, initialState, children} ) => {
    return (
 //we will import reducer from reducer and initialState from initialState and chilren is our component
 <StateContext.Provider value={ useReducer(reducer, initialState) }>  {/* since we are using reducer we need to use useReducer hook to pass information*/}
    { children }
 </StateContext.Provider>
);
}
// we are creating our custom hook to update our state value
export const useStateValue = () => useContext(StateContext); //every time we dont need to use import useContext and that perticular context name you can directly use useStateValue to dispatch and use all the child parameters inside it thats why we are export it here