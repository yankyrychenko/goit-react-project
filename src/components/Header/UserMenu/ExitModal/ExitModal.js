import { useEffect } from 'react';
// Styles
import styles from './ExitModal.module.scss';

const ExitModal = ({ question, onLogout, toggleModal, setShowModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', escapeModal);
    return () => {
      window.removeEventListener('keydown', escapeModal);
    };
  }, []);

  const escapeModal = event => {
    event.code === 'Escape' && setShowModal(false);
  };

  return (
    <div
      className={styles.backdrop}
      onClick={e => e.target === e.currentTarget && toggleModal()}
    >
      <div className={styles.content}>
        <button
          type="button"
          className={styles.closeButton}
          onClick={toggleModal}
        >
          x
        </button>
        <p className={styles.question}>{question}</p>
        <button type="button" className={styles.yesButton} onClick={onLogout}>
          Да
        </button>
        <button type="button" className={styles.noButton} onClick={toggleModal}>
          Нет
        </button>
      </div>
    </div>
  );
};

export default ExitModal;
