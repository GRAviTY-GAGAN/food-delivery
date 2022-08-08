export const actionType = {
    SET_USER : 'SET_USER',  // if we want to update the user information we call SET_USER action type and update it.
    SET_FOOD_ITEMS: 'SET_FOOD_ITEMS',
    SET_CART_SHOW: 'SET_CART_SHOW',
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case actionType.SET_USER:
            return {
                ...state, 
                user: action.user,
            };

        case actionType.SET_FOOD_ITEMS:
            return {
                ...state,
                foodItems: action.foodItems,
            };

        case actionType.SET_CART_SHOW:
            return {
                ...state,
                cartShow: action.cartShow,
            };
            
        default :
            return state;
    }
}

export default reducer;