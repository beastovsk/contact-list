import React from "react";
import { store } from "../../store";
import ContactItem from "./ContactItem/ContactItem";
import "./ContactList.css";

// [{}, {}] => [{}, {}, {}]
function ContactList() {
    let contactData = store.getState();

    return (
        <div className="ContactList">
            <ContactItem contacts={contactData} />
        </div>
    );
}

// Doesn't refresh list
store.subscribe(ContactList)
// 

export default ContactList;
