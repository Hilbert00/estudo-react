import React, { useState } from "react";
import Sub from "./sub";

const Super = (props) => {
    const [num, setNum] = useState(0);
    const [txt, setTxt] = useState("Valor");

    function click(value, text) {
        setNum(value);
        setTxt(text);
    }

    return (
        <div>
            <h2>
                {txt}: {num}
            </h2>
            <Sub click={click}></Sub>
        </div>
    );
};

export default Super;
