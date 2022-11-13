import React from "react";
import "./bubbles.css";

export default function Bubbles(props) {
    let chosenNumbers = [];

    const quantity = props.quantity > 12 ? 12 : props.quantity;

    while (chosenNumbers.length < quantity) {
        const random = Math.round(Math.random() * 59 + 1);

        if (!chosenNumbers.includes(random)) {
            chosenNumbers.push(random);
        }
    }

    chosenNumbers.sort((a, b) => a - b);

    return (
        <div id="BubbleBox">
            {chosenNumbers.map((x) => (
                <div key={chosenNumbers.indexOf(x)} className="Bubble">
                    <p>{x}</p>
                </div>
            ))}
        </div>
    );
}
