import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header";
import Contacts from "./Components/Contacts";
import Contact from "./Components/Contact";
import Car from "./Components/Car";

class App extends Component {
    render() {
        return (
            <div className="App container">
                <Header branding="DC - Contact Manager - 5hubhAm7" />
                {/* <Contact
                    id="1"
                    name="Prithvi Shaw"
                    email="prithvi@gmail.com"
                    phone="9876543210"
                />
                <Contact
                    id="2"
                    name="Shreyas Iyer"
                    email="shreyas@gmail.com"
                    phone="9876543211"
                />
                <Contact
                    id="3"
                    name="Rishabh Pant"
                    email="rishabh@gmail.com"
                    phone="9876543212"
                /> */}
                <Contacts />
            </div>
        );
    }
}

export default App;
