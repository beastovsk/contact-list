import React from "react";
import "./ContactItem.css";

function ContactItem({ contacts }) {
    return contacts.map((item) => {
        return (
            <React.Fragment>
                <p key={item.id} className="ContactItem">
                    {item.name}, {item.phone}
                </p>
            </React.Fragment>
        );
    });
}

export default ContactItem;
