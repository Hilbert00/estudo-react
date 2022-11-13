import React from "react";
import Bubbles from "./bubbles";
import "./mega.css"

export default function Mega(props) {
    const [quantity, setQuantity] = React.useState(6);
    const [numbers, setNumbers] = React.useState();

    return (
        <div className="Mega">
            <h2>Mega</h2>
            <input type="number" name="quant" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            <button onClick={() => setNumbers(<Bubbles quantity={quantity}></Bubbles>)}>Gerar</button>
            {numbers}
        </div>
    );
}
