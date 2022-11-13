import React from "react";

export default function Step(props) {
    return (
        <div>
            <label htmlFor="stepChange">Passo: </label>
            <input
                type="number"
                name="stepChange"
                value={props.step}
                onChange={(e) => {
                    props.change(+e.target.value);
                }}
                style={{ fontSize: "1.4rem", width: "30%" }}
            />
        </div>
    );
}
