import "./app.css";
import React from "react";

import Card from "./components/layout/card";
import First from "./components/basics/first";
import Parametro from "./components/basics/parameter";
import Filhos from "./components/basics/child";
import Repeticao from "./components/basics/repetition";
import Condicao from "./components/basics/condition";
import CondicaoV2 from "./components/basics/conditionV2";
import Pai from "./components/communication/direct/parent";
import Super from "./components/communication/indirect/super";
import Input from "./components/form/input";
import Contador from "./components/counter/counter";
import Mega from "./components/mega/mega"

export default function App(props) {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">
                <Card title="#11 - Mega Sena" color="#ebbc4e">
                    <Mega></Mega>
                </Card>

                <Card title="#10 - Contador" color="#ff007f">
                    <Contador></Contador>
                </Card>

                <Card title="#09 - Input" color="#3b3b3b">
                    <Input></Input>
                </Card>

                <Card title="#08 - Comunicação Indireta" color="#004479">
                    <Super></Super>
                </Card>

                <Card title="#07 - Comunicação Direta" color="#d600ff">
                    <Pai surname="Hilbert"></Pai>
                </Card>

                <Card title="#06 - Condição v2" color="#df1b05">
                    <CondicaoV2 num={7}></CondicaoV2>
                </Card>

                <Card title="#05 - Condição v1" color="#4b0150">
                    <Condicao num={4}></Condicao>
                </Card>

                <Card title="#04 - Repetição" color="#56ab6c">
                    <Repeticao></Repeticao>
                </Card>

                <Card title="#03 - Componente com parâmetro" color="#5e9dcc">
                    <Parametro titulo="Título" subtitulo="Subtítulo" />
                </Card>

                <Card title="#02 - Componente com filho" color="#575d5f">
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

                <Card title="#01 - Primeiro Componente" color="#ffb81c">
                    <First />
                </Card>
            </div>
        </div>
    );
}
