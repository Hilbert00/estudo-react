import React from "react";

const Sub = (props) => {
    function action() {
        props.click(Math.round(Math.random() * 100), "Novo valor");
    }

    return (
        <div>
            <button onClick={action}>Alterar</button>
        </div>
    );
};

export default Sub;
