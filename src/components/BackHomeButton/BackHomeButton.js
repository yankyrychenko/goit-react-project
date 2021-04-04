// import { useEffect, useState } from 'react'; //* JavaScript рендер в зависимости от вьюпорта
import { Link } from 'react-router-dom';
// Styles
import styles from './BackHomeButton.module.scss';
// Others
import sprite from '../../img/sprite.svg';
import routes from '../../routes/routes';
import { useBreakpoint } from 'react-use-size'; //* Библиотека 'react-use-size'

const BackHomeButton = () => {
  const mobile = useBreakpoint(768); //* Библиотека 'react-use-size'

  //* JavaScript рендер в зависимости от вьюпорта
  // const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  // useEffect(() => {
  //   const onResize = () => setViewportWidth(window.innerWidth);
  //   window.addEventListener('resize', onResize);
  //   return () => window.removeEventListener('resize', onResize);
  // });

  return (
    <Link to={routes.home} className={styles.BackHomeButton}>
      <svg width="24" height="24">
        <use href={sprite + '#icon-back-home'}></use>
      </svg>
      {!mobile && <span>Вернуться на главную</span>}
      {/* {viewportWidth >= 768 && <span>Вернуться на главную</span>} */}
    </Link>
  );
};

export default BackHomeButton;
