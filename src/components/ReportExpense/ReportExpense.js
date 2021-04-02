import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import styles from '../ReportExpense/ReportExpense.module.scss';
import expenseSprite from '../ReportExpense/expenseSprite.svg';
import CategoriesName from './CategoriesName';
import ReportExpenseIncomeToggler from '../../components/ReportExpenseIncomeToggler/ReportExpenseIncomeToggler';

const ReportExpense = ({setActiveCategory,activeCategory}) => {
  // const [activeCategory, setActiveCategory] = useState('');

  const activeCategoryHandler = e => {
    const { name } = e.target;
    if (activeCategory !== name) {
      setActiveCategory(name);
    } else {
      setActiveCategory('');
    }
  };

  const totalMonthExpenses = useSelector(
    state => state.periodData.expenses.expensesData,
  );

  let categoriesArray = [];

  if (totalMonthExpenses !== undefined) {
    const catArr = Object.entries(totalMonthExpenses);

    catArr.forEach(category => {
      if (category[1].total > 0) {
        CategoriesName.forEach(item => {
          if (item.category === category[0]) {
            categoriesArray.push([...category, item.name]);
          }
        });
      }
    });
  }

      useEffect(() => {
        if (categoriesArray.length > 0) {
        setActiveCategory(categoriesArray[0][0])
      }
    }, [totalMonthExpenses]);

  return (
    <>
      <ReportExpenseIncomeToggler />

      <ul className={styles.ReportExpenseList}>
        {categoriesArray?.map(category => (
          <li
            name={category[0]}
            key={category[0]}
            className={styles.ReportExpenseItem}
          >
            <p name={category[0]} className={styles.ReportExpenseAmount}>
              {category[1].total}
            </p>

            <button
              type="button"
              name={category[0]}
              onClick={activeCategoryHandler}
              className={
                activeCategory === category[0]
                  ? styles.isActiveBtn
                  : styles.nonActiveBtn
              }
            >
              <svg className={styles.ReportExpenseIcon}>
                <use
                  className={
                    activeCategory === category[0]
                      ? styles.isActiveIcon
                      : styles.nonActiveIcon
                  }
                  href={`${expenseSprite}#${category[2]}`}
                />
              </svg>
            </button>
            <h3 name={category[0]} className={styles.ReportExpenseTitle}>
              {category[0]}
            </h3>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReportExpense;
