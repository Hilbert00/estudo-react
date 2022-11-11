import React from "react";

const func = (props) => (
    <div>
        <h2>Filhos:</h2>
        <div>{props.children}</div>
    </div>
);

export default func;
