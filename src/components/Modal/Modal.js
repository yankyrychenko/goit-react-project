import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.scss';

const Modal = ({ children }) => {
  const [showModal, setShowModal] = useState(true);

  console.log(showModal);

  function closeModal(e) {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  }
  function escapeModal(e) {
    if (e.code === `Escape`) {
      setShowModal(false);
    }
  }

  useEffect(() => {
    window.addEventListener('click', escapeModal);
    return () => {
      window.removeEventListener('click', escapeModal);
    };
  });

  return (
    showModal &&
    createPortal(
      <div className={s.backdrop} onClick={closeModal}>
        <div className={s.content}>{children}</div>
      </div>,
      document.getElementById('modal-root'),
    )
  );
};

export default Modal;
