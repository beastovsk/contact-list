import React from "react";
import { connect } from "react-redux";

import { store } from "../../store";
import ContactItem from "./ContactItem/ContactItem";
import "./ContactList.css";

function ContactList() {
    let contactData = store.getState();

    return (
        <div className="ContactList">
            <ContactItem contacts={contactData} />
        </div>
    );
}

export default connect(
    (state) => ({
        contacts: state,
    }),
    (dispatch) => ({})
)(ContactList);
