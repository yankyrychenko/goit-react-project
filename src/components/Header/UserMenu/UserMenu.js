// import { useSelector } from 'react-redux';
// Styles
import styles from './UserMenu.module.scss';
// import './UserMenu.module.scss'; //! почему-то не работает
// Others
import sprite from '../../../img/sprite.svg';

const UserMenu = () => {
  // const user = useSelector(state => state.auth.user.email);

  return (
    <div className={styles.UserMenu}>
      {/* <div className="UserMenu"> //! почему-то не работает */}
      <div className={styles.user}>
        <span className={styles.userIcon}>U</span>
        <p className={styles.userEmail}>user@mail.com</p>
      </div>
      <button type="button" className={styles.logoutButton}>
        <svg className={styles.logoutButtonIcon} width="16" height="16">
          <use href={sprite + '#icon-logout-1'}></use>
        </svg>
        <p className={styles.logoutButtonText}>Выйти</p>
      </button>
    </div>
  );
};

export default UserMenu;
