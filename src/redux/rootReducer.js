export const rootReducer = (state, action) => {
    let newUserContact = {
        name: "Artyom",
        phone: 8927121,
        id: 2
    };

    // Actions
    switch (action.type) {
        case 'ADD_CONTACT':
            state = [...state, newUserContact]
            break;
        default: 
            break;
    }

    return state
}