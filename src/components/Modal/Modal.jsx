import { Component } from "react";
import { Overlay, ModalDiv } from './Modal.styled';

export default class Modal extends Component {
    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    render() {
        return (
            <Overlay>
                <ModalDiv>{this.props.children} Modal</ModalDiv>
            </Overlay>
        );
    }
}