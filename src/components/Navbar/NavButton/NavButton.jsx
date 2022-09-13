import React from "react";
import './NavButton.css'
import { store } from "../../../store";

function NavButton() {
    const addTask = () => {
        store.dispatch({ type: "ADD_CONTACT" });
        console.log(store.getState());
    };

    return <button onClick={addTask}>Add contact</button>;
}



export default NavButton;
