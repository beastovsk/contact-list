import React from "react";
import "./Navbar.css";
import NavButton from "./NavButton/NavButton";
// import { rootReducer } from "../../redux/rootReducer";

function Navbar() {

    return (
        <div className="Navbar">
            <h3>Contact List</h3>
            <NavButton />
        </div>
    );
}

export default Navbar;
