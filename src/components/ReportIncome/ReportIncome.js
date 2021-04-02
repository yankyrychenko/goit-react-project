import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import styles from '../ReportIncome/ReportIncome.module.scss';
import incomeSprite from '../ReportIncome/incomeSprite.svg';
import ReportExpenseIncomeToggler from '../../components/ReportExpenseIncomeToggler/ReportExpenseIncomeToggler';
import CategoriesName from './CategoriesName';

const ReportIncome = ({ setActiveCategory, activeCategory }) => {
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
    state => state.periodData.incomes.incomesData,
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
      setActiveCategory(categoriesArray[0][0]);
    }
  }, [totalMonthExpenses]);

  return (
    <>
      <ReportExpenseIncomeToggler />

      <ul className={styles.ReportIncomeList}>
        {categoriesArray?.map(category => (
          <li
            name={category[0]}
            key={category[0]}
            className={styles.ReportIncomeItem}
          >
            <p name={category[0]} className={styles.ReportIncomeAmount}>
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
              <svg className={styles.ReportIncomeIcon}>
                <use
                  className={
                    activeCategory === category[0]
                      ? styles.isActiveIcon
                      : styles.nonActiveIcon
                  }
                  href={`${incomeSprite}#${category[2]}`}
                />
              </svg>
            </button>
            <h3 name={category[0]} className={styles.ReportIncomeTitle}>
              {category[0]}
            </h3>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReportIncome;
