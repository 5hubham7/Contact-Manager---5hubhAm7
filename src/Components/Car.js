import React, { Component } from "react";

export default class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = { brand: "lamborghini", color: "red" };
    }
    changeColor = () => {
        this.setState({ color: "blue" });
    };
    render() {
        return (
            <div>
                <h1>
                    Not my Car
                    <p>
                        with {this.state.color} {this.state.brand}
                    </p>
                </h1>
                <button className="btn btn-primary" onClick={this.changeColor}>
                    Change Color
                </button>
            </div>
        );
    }
}
