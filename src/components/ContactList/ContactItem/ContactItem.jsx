import React from "react";
import "./ContactItem.css";

function ContactItem({ contacts }) {
    return contacts.map((contact, i) => {
        return (
            <p key={contact.id} className="ContactItem">
                {contact.name}, {contact.phone}
            </p>
        );
    });
}

export default ContactItem;
