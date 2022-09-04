import React from "react";
import ContactItem from "./ContactItem/ContactItem";
import "./ContactList.css";

const contactData = [
    { name: "Name", phone: 123123, id: 0 },
    { name: "newName", phone: 32321, id: 0 },
];

function ContactList() {
    return (
        <div className="ContactList">
            <ContactItem contacts={contactData} />
        </div>
    );
}

export default ContactList;
