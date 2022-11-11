import "./card.css";
import React from "react";

const func = (props) => (
    <div className="Card">
        <div className="Content">
            {props.children}
        </div>

        <div className="Footer">
            {props.title}
        </div>
    </div>
);

export default func;