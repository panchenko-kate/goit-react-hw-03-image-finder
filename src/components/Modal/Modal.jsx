import React,{ Component } from "react";
import { Overlay, ModalDiv } from './Modal.styled';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root')

export default class Modal extends Component {
   componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    };


    handleKeyDown = e => {
        if(e.code === 'Escape') {
            this.props.onClose();
        }
    };

    handleBackdropClick = e => {
        if(e.currentTarget === e.target) {
            this.props.onClose();
        }
    };

    render() {
        return createPortal(
            <Overlay onClick={this.handleBackdropClick}>
                <ModalDiv src={this.props.img} alt={this.props.alt}></ModalDiv>
            </Overlay>,
            modalRoot,
        );
    }
};

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
  };