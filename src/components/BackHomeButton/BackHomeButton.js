import { Link } from 'react-router-dom';
// Styles
import styles from './BackHomeButton.module.scss';
// Others
import sprite from '../../img/sprite.svg';
import routes from '../../routes/routes';

const BackHomeButton = () => {
  return (
    <Link to={routes.home} className={styles.BackHomeButton}>
      <svg width="24" height="24">
        <use href={sprite + '#icon-back-home'}></use>
      </svg>
      <span>Вернуться на главную</span>
    </Link>
  );
};

export default BackHomeButton;