import React from "react";
import './NavButton.css'
// import { store } from "../../../store";

function NavButton({ openModalWindow }) {
    // const addTask = () => {
    //     store.dispatch({ type: "ADD_CONTACT" });
    //     console.log(store.getState());
    // };

    return <button className='nav__button' onClick={openModalWindow}>Add contact</button>;
}



export default NavButton;
