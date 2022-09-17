import React from "react";
import './NavButton.css'

function NavButton({ openModalWindow }) {
    return <button className='nav__button' onClick={openModalWindow}>Add contact</button>;
}

export default NavButton;