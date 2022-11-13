import React from "react";
import "./buttons.css";

export default function Buttons(props) {
    return (
        <div>
            <button
                className="stepButton"
                onClick={() => {
                    props.action(props.value + props.step);
                }}
            >
                +
            </button>
            <button
                className="stepButton"
                onClick={() => {
                    props.action(props.value - props.step);
                }}
            >
                -
            </button>
        </div>
    );
}
