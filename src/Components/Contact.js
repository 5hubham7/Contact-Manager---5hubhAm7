import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            showContactInfo: true,
        };
    }
    onDeleteClick = (e) => {
        this.props.deleteClickHandler();
    };
    render() {
        const { id, name, email, phone } = this.props;
        const { showContactInfo } = this.state;
        return (
            <div className="App">
                <div className="card card-body m-3">
                    <h1>
                        {name}{" "}
                        <i
                            className="fas fa-chevron-circle-down"
                            onClick={() => {
                                this.setState({
                                    showContactInfo: !this.state
                                        .showContactInfo,
                                });
                            }}
                        />
                        <i
                            onClick={this.onDeleteClick}
                            className="fas fa-times"
                            style={{
                                cursor: "pointer",
                                float: "right",
                                color: "red",
                            }}
                        />
                    </h1>
                    {showContactInfo ? (
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-primary list-group-item-action">
                                {"ID: " + id}
                            </li>
                            <li className="list-group-item list-group-item list-group-item-action">
                                {"Email: " + email}
                            </li>
                            <li className="list-group-item list-group-item-primary list-group-item-action">
                                {"Phone: " + phone}
                            </li>
                        </ul>
                    ) : null}
                </div>
            </div>
        );
    }
}

Contact.defaultProps = {
    name: "MS Dhoni",
    email: "msd@gmail.com",
    phone: "7777777777",
};

Contact.propTypes = {
    deleteClickHandler: PropTypes.func.isRequired,
};

export default Contact;
