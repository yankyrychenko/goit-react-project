import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// Components
import UserMenu from './UserMenu/UserMenu';
// Styles
import styles from './Header.module.scss';
// Selectors
import { getIsAuthenticated } from '../../redux/selectors/authSelectors';
// Others
import { routes } from '../../routes/routes';
import sprite from '../../img/sprite.svg';

const Header = () => {
  const isAuthenticated = useSelector(state => getIsAuthenticated(state));

  return (
    <header className={styles.Header}>
      <Link to={routes.home} className="logo">
        <svg width="90" height="31">
          <use href={sprite + '#icon-logo'}></use>
        </svg>
      </Link>
      {isAuthenticated && <UserMenu />}
    </header>
  );
};

export default Header;
