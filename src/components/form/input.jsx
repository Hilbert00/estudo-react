import React, { useState } from "react";

export default function Form(props) {
    const [name, setName] = useState("Digite");

    return (
        <div>
            <h2>{name}</h2>
            <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>
    );
}
