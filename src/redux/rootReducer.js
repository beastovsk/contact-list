import { initialState } from "../store";

export const rootReducer = (state = initialState, action) => {
    let newUserContact = {
        name: "Artyom",
        phone: 8927121,
        id: 2,
    };

    // Actions
    switch (action.type) {
        case "ADD_CONTACT":
            return [...state, newUserContact];
        default:
            break;
    }

    return state;
};