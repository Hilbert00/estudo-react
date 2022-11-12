import React from "react";

import produtos from "../../data/products";

const repetition = (props) => {
    function getProductsListItem() {
        return produtos.map((prod) => {
            return (
                <li key={prod.id}>
                    ID: {prod.id} / Nome: {prod.name} / Preço: R${prod.price}
                </li>
            );
        });
    }

    return (
        <div>
            <h2>Repetição</h2>
            <ul>{getProductsListItem()}</ul>
        </div>
    );
};

export default repetition;
