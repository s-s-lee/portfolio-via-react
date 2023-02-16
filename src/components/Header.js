import React from "react";
// import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Header(props) {
    return (
        <div>
            {props.children}
        </div>
    );
}

export default Header;