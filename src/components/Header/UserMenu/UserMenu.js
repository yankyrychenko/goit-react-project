import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// Styles
import styles from './UserMenu.module.scss';
// Components
import ExitModal from './ExitModal/ExitModal';
// Selectors
import { getUserEmail } from '../../../redux/selectors/authSelectors';
// Others
import { routes } from '../../../routes';
import sprite from '../../../img/sprite.svg';
import { useBreakpoint } from 'react-use-size';

const UserMenu = () => {
  const [showModal, setShowModal] = useState(false);
  const email = useSelector(state => getUserEmail(state));
  const mobile = useBreakpoint(768);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <>
      <div className={styles.UserMenu}>
        <Link to={routes.home} className={styles.user}>
          <span className={styles.userIcon}>
            {email && email[0].toUpperCase()}
          </span>
          {!mobile && <p className={styles.userEmail}>{email}</p>}
        </Link>
        <button
          type="button"
          className={styles.logoutButton}
          onClick={toggleModal}
        >
          {mobile && (
            <svg className={styles.logoutButtonIcon} width="16" height="16">
              <use href={sprite + '#icon-logout-1'}></use>
            </svg>
          )}
          {!mobile && <p className={styles.logoutButtonText}>Выйти</p>}
        </button>
      </div>
      {showModal && (
        <ExitModal
          question="Вы действительно хотите выйти?"
          toggleModal={toggleModal}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
};

export default UserMenu;
