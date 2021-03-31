import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styles from '../ReportExpense/ReportExpense.module.scss';
import Container from '../Container/Container';
// import sprite from '../../img/sprite.svg';
import expenseSprite from '../ReportExpense/expenseSprite.svg';
import CategoriesName from './CategoriesName';
import ReportExpenseIncomeToggler from '../../components/ReportExpenseIncomeToggler/ReportExpenseIncomeToggler';

const ReportExpense = () => {
  const [categories, setCategories] = useState([]);
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

  return (
    <>
      <ReportExpenseIncomeToggler />
      <Container>
        {/* <h1 style={{ color: 'red', textAlign: 'center' }}>Расходы</h1> */}

        <ul className={styles.ReportExpenseList}>
          {CategoriesName.map(({ category, _id, amount }) => (
            <li name={category} key={_id} className={styles.ReportExpenseItem}>
              <p name={category} className={styles.ReportExpenseAmount}>
                {amount}
              </p>
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
