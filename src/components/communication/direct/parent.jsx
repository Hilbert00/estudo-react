import React from "react";
import Child from "./child";

const Parent = (props) => (
    <div>
        <h2>Filhos</h2>
        <Child {...props}>Nicolas</Child>
        <Child {...props}>Felipe</Child>
        <Child {...props}>Marcos</Child>
    </div>
);

export default Parent;
