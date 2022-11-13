import React from "react";
import Display from "./display";
import Step from "./stepForm";
import ButtonsOperations from "./buttons";

export default class Contador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passo: props.step || 1,
            valor: props.value || 0,
        };
    }

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <Step step={this.state.passo} change={(newStep) => this.setState({ passo: +newStep })}></Step>
                <Display value={this.state.valor}></Display>
                <ButtonsOperations
                    value={this.state.valor}
                    step={this.state.passo}
                    action={(newValue) => this.setState({ valor: +newValue })}
                ></ButtonsOperations>
            </div>
        );
    }
}
