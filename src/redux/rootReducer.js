import { initialState } from "../store";

export const rootReducer = (state = initialState, action) => {

    console.log(action)

    // Actions
    switch (action.type) {
        case "ADD_CONTACT":
            let newUserContact = {
                name: action.name,
                phone: action.phone,
                id: state.length,
            };
            return [...state, newUserContact];
        default:
            break;
    }

    return state;
};