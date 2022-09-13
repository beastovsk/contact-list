import { createStore } from "redux";
import { rootReducer } from "./redux/rootReducer";

export let initialState = [
    { name: "Name", phone: 123123, id: 0 },
    { name: "newName", phone: 32321, id: 1 },
];

export const store = createStore(rootReducer, initialState);

window.store = store;
    

