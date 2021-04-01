import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import styles from '../ReportExpense/ReportExpense.module.scss';
import Container from '../Container/Container';
// import sprite from '../../img/sprite.svg';
import expenseSprite from '../ReportExpense/expenseSprite.svg';
import CategoriesName from './CategoriesName';
import ReportExpenseIncomeToggler from '../../components/ReportExpenseIncomeToggler/ReportExpenseIncomeToggler';
// import kapustaApi from '../../services/kapusta-api';

import { getExpenseTotal } from '../../redux/selectors/periodDataSelectors';

const ReportExpense = () => {
  const [category, setCategory] = useState({});
  const [expenses, setExpenses] = useState([]);
  const [activeCategory, setActiveCategory] = useState('');

  const getCurrentCategory = name => {
    return CategoriesName.find(({ category }) => {
      return category === name;
    });
  };

  const activeCategoryHandler = e => {
    const { name } = e.target;
    if (activeCategory !== name) {
      setActiveCategory(name);
    } else {
      setActiveCategory('');
    }
  };

  const filteredExpenses = CategoriesName.filter(({ amount }) => amount > 0);

  // const fetchTotalExpenses = () => {
  //   return kapustaApi.periodDataGet().then(response => response.data);
  // };
  // console.log(fetchTotalExpenses());

  // const totalExpenses = useSelector(state => state.periodData);
  // console.log(totalExpenses);

  // const totalMonthExpenses = useSelector(
  //   state => state.periodData.expenses.incomesData.Транспорт.total,
  // );
  // console.log(totalMonthExpenses);

  // const total Object.entries(totalMonthExpenses);

  let categoriesArray = [];

  const totalMonthExpenses = useSelector(
    state => state.periodData.expenses.incomesData,
  );

  // console.log(totalMonthExpenses);

  if (totalMonthExpenses !== undefined) {
    const catArr = Object.entries(totalMonthExpenses);

    categoriesArray = catArr.map(category => {
      category.filter(({ total }) => total > 0);
      return category[1].total;
      // if (category[1].total > 0) {
      //   return category;
      // }
    });
  }

  console.log(categoriesArray);

  return (
    <>
      <ReportExpenseIncomeToggler />
      <Container>
        {/* <h1 style={{ color: 'red', textAlign: 'center' }}>Расходы</h1> */}

        <ul className={styles.ReportExpenseList}>
          {filteredExpenses.map(({ category, _id }) => (
            <li name={category} key={_id} className={styles.ReportExpenseItem}>
              {categoriesArray.map(({ total }) => (
                <p
                  name={category}
                  key={_id}
                  className={styles.ReportExpenseAmount}
                >
                  {total}
                </p>
              ))}

              <button
                type="button"
                name={category}
                // className={styles.ReportExpenseBtn}
                onClick={activeCategoryHandler}
                className={
                  activeCategory === category
                    ? styles.isActiveBtn
                    : styles.nonActiveBtn
                }
              >
                <svg className={styles.ReportExpenseIcon}>
                  <use
                    className={
                      activeCategory === category
                        ? styles.isActiveIcon
                        : styles.nonActiveIcon
                    }
                    href={`${expenseSprite}#${
                      getCurrentCategory(category).name
                    }`}
                  />
                </svg>
              </button>
              <h3 name={category} className={styles.ReportExpenseTitle}>
                {category}
              </h3>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
};

export default ReportExpense;

// Object.entries(totalMonthExpenses);

// const totalMonthExpenses = useSelector(
//     state => state.periodData.expenses.expensesData,
//   );
