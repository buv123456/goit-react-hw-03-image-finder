import { Component } from 'react';
import { ModalStyled, ModalWrapStyled } from './ModalStyled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', this.handleClose);
  }

  componentWillUnmount() {
    document.body.style.overflow = 'auto';
    window.removeEventListener('keydown', this.handleClose);
  }

  handleClose = e => {
    if (e.target === e.currentTarget || e.code === 'Escape')
      this.props.onClose();
  };

  render() {
    return createPortal(
      <ModalWrapStyled onClick={this.handleClose}>
        <ModalStyled>{this.props.children}</ModalStyled>
      </ModalWrapStyled>,
      modalRoot
    );
  }
}
