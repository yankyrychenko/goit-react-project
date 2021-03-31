import React from 'react';
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// Components
import UserMenu from './UserMenu/UserMenu';
// Styles
import './Header.module.scss';
// Others
import { routes } from '../../routes/routes';
import sprite from '../../img/sprite.svg';

const Header = () => {
  // const isAuthenticated = useSelector(state => Boolen(state.auth.token));

  return (
    <header>
      <Link to={routes.home} className="logo">
        <svg width="90" height="31">
          <use href={sprite + '#icon-logo'}></use>
        </svg>
      </Link>
      {/* {isAuthenticated && <UserMenu />} */}
      <UserMenu />
    </header>
  );
};

export default Header;
