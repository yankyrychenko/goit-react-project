import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../ReportExpenseIncomeToggler/ReportExpenseIncomeToggler.module.scss';
import sprite from '../../img/sprite.svg';
import routes from '../../routes/routes';

const ReportExpenseIncomeToggler = () => {
  // const [toggler, setToggler] = useState('');
  const history = useHistory();

  const ExpenseIncomeTogglerHandler = e => {
    const { name } = e.target;

    if (name === 'arrowLeft') {
      history.push(routes.expense);
      console.log('left');
    }
    if (name === 'arrowRight') {
      history.push(routes.income);
      console.log('right');
    }
  };

  return (
    <>
      <div className={styles.TogglerWrapper}>
        <svg
          onClick={ExpenseIncomeTogglerHandler}
          className={styles.ArrowIcon}
          name="arrowLeft"
        >
          <use href={sprite + '#icon-arrow-left'}></use>
        </svg>
        <p className={styles.TogglerText}>Доходы/Расходы</p>
        <svg
          onClick={ExpenseIncomeTogglerHandler}
          className={styles.ArrowIcon}
          name="arrowRight"
        >
          <use href={sprite + '#icon-arrow-right'}></use>
        </svg>
      </div>
    </>
  );
};

export default ReportExpenseIncomeToggler;

// ====================================================
// import { useHistory } from 'react-router-dom';

// function HomeButton() {
//   let history = useHistory();

//   function handleClick() {
//     history.push('/home');
//   }

//   return (
//     <button type="button" onClick={handleClick}>
//       Go home
//     </button>
//   );
// }

// const ExpenseIncomeTogglerHandler = e => {
//   const { name } = e.target;

//   if (name === 'arrowLeft') {
//     setToggler()
//   }
//   if (name === 'arrowRight') {
//     setToggler();
//   }
// };

//  const token = useSelector(state => state.token);
//  const history = useHistory();
//  useEffect(() => {
//    if (token) {
//      history.push(navigation.home);
//    } else {
//      history.push(navigation.login);
//    }
//  }, [token]);
