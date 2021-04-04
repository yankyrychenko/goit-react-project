import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// Styles
import styles from './ExitModal.module.scss';
// Operations
import authOperations from '../../../../redux/operations/authOperations';
// Others
import sprite from '../../../../img/sprite.svg';

const ExitModal = ({ question, toggleModal, setShowModal }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('keydown', escapeModal);
    return () => {
      window.removeEventListener('keydown', escapeModal);
    };
  }, []);

  const onLogout = () => dispatch(authOperations.handleLogOut());

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
          <svg width="12" height="12">
            <use href={sprite + '#icon-close'}></use>
          </svg>
        </button>
        <p className={styles.question}>{question}</p>
        <button
          type="button"
          className={styles.yesButton}
          onClick={onLogout}
          autoFocus
        >
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
