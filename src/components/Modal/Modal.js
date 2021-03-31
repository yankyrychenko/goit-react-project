import React, { Component } from 'react';
import styles from './Modal.module.css';
import { createPortal } from 'react-dom';

export default class Modal extends Component {
  state = {};
  componentDidMount() {
    const { hendleEsc } = this;
    window.addEventListener('keydown', hendleEsc);
  }
  componentWillUnmount() {
    const { hendleEsc } = this;
    window.removeEventListener('keydown', hendleEsc);
  }
  hendleClose = e => {
    const { toggleModal } = this.props;
    if (e.target === e.carrentTarget) {
      toggleModal();
    }
  };
  hendleEsc = e => {
    const { toggleModal } = this.props;
    if (e.code === 'Escape') {
      toggleModal();
    }
  };
  render() {
    const { hendleClose } = this;
    const { children } = this.props;
    return createPortal(
      <div className={styles.backDrop} onClick={hendleClose}>
        <div className={styles.content}>{children}</div>
      </div>,
      document.getElementById('modal-root'),
    );
  }
}
