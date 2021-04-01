import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import styles from '../ReportIncome/ReportIncome.module.scss';
import Container from '../Container/Container';
// import sprite from '../../img/sprite.svg';
import incomeSprite from '../ReportIncome/incomeSprite.svg';
import ReportExpenseIncomeToggler from '../../components/ReportExpenseIncomeToggler/ReportExpenseIncomeToggler';
import CategoriesName from './CategoriesName';
import {
  getIncomeTotal,
  getExpenseTotal,
} from '../../redux/selectors/periodDataSelectors';

const ReportIncome = () => {
  // const [categories, setCategories] = useState([]);
  const [incomes, setIncomes] = useState([]);
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

  const filteredIncome = CategoriesName.filter(({ amount }) => amount > 0);

  const periodDataExpenses = useSelector(state => state.periodData);
  console.log(periodDataExpenses);

  return (
    <>
      <ReportExpenseIncomeToggler />
      <Container>
        {/* <h1 style={{ color: 'green', textAlign: 'center' }}>Доходы</h1> */}

        <ul className={styles.ReportIncomeList}>
          {filteredIncome.map(({ category, _id, amount }) => (
            <li name={category} key={_id} className={styles.ReportIncomeItem}>
              <p name={category} className={styles.ReportIncomeAmount}>
                {amount}
              </p>
              <button
                type="button"
                name={category}
                // className={styles.ReportIncomeBtn}
                onClick={activeCategoryHandler}
                className={
                  activeCategory === category
                    ? styles.isActiveBtn
                    : styles.nonActiveBtn
                }
              >
                <svg className={styles.ReportIncomeIcon}>
                  <use
                    className={
                      activeCategory === category
                        ? styles.isActiveIcon
                        : styles.nonActiveIcon
                    }
                    href={`${incomeSprite}#${
                      getCurrentCategory(category).name
                    }`}
                  />
                </svg>
              </button>
              <h3 name={category} className={styles.ReportIncomeTitle}>
                {category}
              </h3>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
};

export default ReportIncome;
