export const actionType = {
    SET_USER : 'SET_USER'  // if we want to update the user information we call SET_USER action type and update it.
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case actionType.SET_USER:
            return {
                ...state, 
                user: action.user,
            };
        default :
            return state;
    }
}

export default reducer;