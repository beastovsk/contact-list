import React from "react";
import "./NavModal.css";
import { store } from "../../../../store";

function NavModal({ active, setActive }) {
    const addTask = () => {
        store.dispatch({
            type: "ADD_CONTACT",
            name: contactName,
            phone: contactPhone,
        });
        setActive(false);
    };

    let contactName, contactPhone

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
                    onChange={(event) => {
                        contactName = event.target.value;
                    }}
                />
                <input
                    className="modal__input"
                    type="number"
                    placeholder="Number"
                    onChange={(event) => {
                        contactPhone = event.target.value;
                    }}
                />
                <button className="modal__button" onClick={addTask}>
                    Add contact
                </button>
            </div>
        </div>
    );
}

export default NavModal;
