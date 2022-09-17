import React, { useState } from "react";
import "./NavModal.css";
import { store } from "../../../../store";

function NavModal({ active, setActive }) {
    // const [data, setData] = useState({ name: "", phone: null });

    const addTask = () => {
        store.dispatch({
            type: "ADD_CONTACT",
            // name: data["name"],
            // phone: data["phone"],
            name: name,
            phone: phone
        });
        // setData({name: '', phone: null})
    };

    let name, phone
    // console.log(data['name'])

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
                        // setData({ name: event.target.value });
                        name = event.target.value
                    }}
                />
                <input
                    className="modal__input"
                    type="number"
                    placeholder="Number"
                    onChange={(event) => {
                        // setData({ phone: event.target.value });
                        phone = event.target.value;
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
