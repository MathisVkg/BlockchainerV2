import './../assets/scss/Base.scss';
import { FaFreebsd } from "react-icons/fa";
import React from "react";

const Loader = () => {
    return (
        <div className="loader">
            <span className="loaderIcon"><FaFreebsd /></span>
            <div className="loaderRing"/>
            <div className="loaderRing2"/>
            <div className="loaderBack"/>
            {/*<h2>Loading</h2>*/}
        </div>
    )
}

export default Loader