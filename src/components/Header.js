import React from "react";
// import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Header(props) {
    return (
        <div>
            {/* <h1>
                Susan Lee
            </h1> */}
            {props.children}
        </div>
    );
}

export default Header;