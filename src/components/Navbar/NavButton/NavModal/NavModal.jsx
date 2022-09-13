import React from "react";
import "./NavModal.css";

function NavModal({ active, setActive }) {
    return (
        <div
            className={active ? "modal active" : "modal"}
            onClick={() => setActive(false)}
        >
            <div
                className={active ? "modal__content active" : "modal__content"}
                onClick={(e) => e.stopPropagation()}
            >
                <input
                    className="modal__input"
                    type="text"
                    placeholder="Name"
                />
                <input
                    className="modal__input"
                    type="text"
                    placeholder="Number"
                />
                <button className="modal__button">Add contact</button>
            </div>
        </div>
    );
}

export default NavModal;
