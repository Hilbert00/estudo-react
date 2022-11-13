import "./card.css";
import React from "react";

const Card = (props) => (
    <div className="Card" style={{ borderColor: props.color || "#000" }}>
        <div className="Content">
            {props.children}
        </div>

        <div className="Footer" style={{ backgroundColor: props.color || "#000" }}>
            {props.title}
        </div>
    </div>
);

export default Card;
