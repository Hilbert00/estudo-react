import React from "react";

const Cond = (props) => (
    <div>
        <h2>O número {props.num} é</h2>
        {props.num % 2 === 0 ? <span>PAR</span> : <span>ÍMPAR</span>}
    </div>
);

export default Cond;
