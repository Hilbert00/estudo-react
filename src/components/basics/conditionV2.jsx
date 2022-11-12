import React from "react";
import If from "./if";

const cond = (props) => (
    <div>
        <h2>O número {props.num} é</h2>
        <If test={props.num % 2 === 0}>
            <span>PAR</span>
        </If>
        <If test={props.num % 2 === 1}>
            <span>ÍMPAR</span>
        </If>
    </div>
);

export default cond;
