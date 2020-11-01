import React, { Component } from "react";
import Contact from "./Contact";

export default class Contacts extends React.Component {
    constructor() {
        super();
        this.state = {
            contacts: [
                {
                    id: 101,
                    name: "Prithvi Shaw",
                    email: "prithvi@gmail.com",
                    phone: "9876543210",
                },
                {
                    id: 102,
                    name: "Shreyas Iyer",
                    email: "shreyas@gmail.com",
                    phone: "9876543211",
                },
                {
                    id: 103,
                    name: "Rishabh Pant",
                    email: "rishabh@gmail.com",
                    phone: "9876543212",
                },
            ],
        };
    }
    deleteContact = (id) => {
        console.log(id);
        const { contacts } = this.state;
        const newContacts = contacts.filter((contact) => contact.id != id);
        this.setState({ contacts: newContacts });
    };

    render() {
        const { contacts } = this.state;
        return (
            <div>
                {contacts.map((contact) => (
                    <Contact
                        id={contact.id}
                        name={contact.name}
                        email={contact.email}
                        phone={contact.phone}
                        deleteClickHandler={this.deleteContact.bind(
                            this,
                            contact.id
                        )}
                    />
                ))}
            </div>
        );
    }
}
