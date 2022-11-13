import React from "react";

const Child = (props) => (
    <div>
        <p>{props.children} {props.surname}</p>
    </div>
);

export default Child;
