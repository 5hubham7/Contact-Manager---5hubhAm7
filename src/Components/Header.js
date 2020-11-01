import React from "react";
// import PropTypes from "prop-types";

function Header(props) {
    return (
        <nav className="navbar navbar-expand-sm bg-primary navbar-dark m-3">
            <div className="container">
                <a href="/" className="navbar-brand">
                    {props.branding}{" "}
                </a>
            </div>
            <div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        {" "}
                        <a href="/" className="nav-link">
                            HOME
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

// Header.defaultProps = {
//     branding: "Default Contact Manager",
// };

// Header.propTypes = {
//     branding: PropTypes.string.isRequired,
// };

// const headerStyle = {
//     color: "blue",
//     fontSize: "40px",
// };

export default Header;
