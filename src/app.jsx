import "./app.css";
import React from "react";

import Card from "./components/layout/card";
import First from "./components/basics/first";
import Parametro from "./components/basics/parameter";
import Filhos from "./components/basics/child";
import Repeticao from "./components/basics/repetition";
import Condicao from "./components/basics/condition";
import CondicaoV2 from "./components/basics/conditionV2";

const app = (props) => (
    <div className="App">
        <Card title="#01 - Primeiro Componente">
            <First />
        </Card>

        <Card title="#02 - Componente com filho">
            <Filhos>
                <ul>
                    <li>Pedro</li>
                    <li>Felipe</li>
                    <li>Mateus</li>
                    <li>Sara</li>
                    <li>Rosa</li>
                    <li>Thomas</li>
                </ul>
            </Filhos>
        </Card>

        <Card title="#03 - Componente com parâmetro">
            <Parametro titulo="Título" subtitulo="Subtítulo" />
        </Card>

        <Card title="#04 - Repetição">
            <Repeticao></Repeticao>
        </Card>

        <Card title="#05 - Condição v1">
            <Condicao num={4}></Condicao>
        </Card>

        <Card title="#06 - Condição v2">
            <CondicaoV2 num={2}></CondicaoV2>
        </Card>
    </div>
);

export default app;
