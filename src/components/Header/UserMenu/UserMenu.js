import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// Styles
import styles from './UserMenu.module.scss';
// Operations
import authOperations from '../../../redux/operations/authOperations';
// Selectors
import { getUserEmail } from '../../../redux/selectors/authSelectors';
// Others
import { routes } from '../../../routes/routes';
import sprite from '../../../img/sprite.svg';

const UserMenu = () => {
  const email = useSelector(state => getUserEmail(state));
  const dispatch = useDispatch();

  const onLogout = () => dispatch(authOperations.handleLogOut());

  return (
    <div className={styles.UserMenu}>
      <Link to={routes.home} className={styles.user}>
        <span className={styles.userIcon}>
          {email && email[0].toUpperCase()}
        </span>
        <p className={styles.userEmail}>{email}</p>
      </Link>
      <button type="button" className={styles.logoutButton} onClick={onLogout}>
        <svg className={styles.logoutButtonIcon} width="16" height="16">
          <use href={sprite + '#icon-logout-1'}></use>
        </svg>
        <p className={styles.logoutButtonText}>Выйти</p>
      </button>
    </div>
  );
};

export default UserMenu;
