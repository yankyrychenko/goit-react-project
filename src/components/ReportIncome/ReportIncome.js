import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styles from '../ReportIncome/ReportIncome.module.scss';
import Container from '../Container/Container';
// import sprite from '../../img/sprite.svg';
import incomeSprite from '../ReportIncome/incomeSprite.svg';
import ReportExpenseIncomeToggler from '../../components/ReportExpenseIncomeToggler/ReportExpenseIncomeToggler';
import CategoriesName from './CategoriesName';

const ReportIncome = () => {
  const [categories, setCategories] = useState([]);

  const getCurrentCategory = name => {
    return CategoriesName.find(({ category }) => {
      return category === name;
    });
  };

  return (
    <>
      <ReportExpenseIncomeToggler />
      <Container>
        <h1 style={{ color: 'green', textAlign: 'center' }}>Доходы</h1>

        <ul className={styles.ReportIncomeList}>
          {CategoriesName.map(({ category, _id, amount }) => (
            <li name={category} key={_id} className={styles.ReportIncomeItem}>
              <p name={category} className={styles.ReportIncomeAmount}>
                {amount}
              </p>
              <button
                type="button"
                name={category}
                className={styles.ReportIncomeBtn}
                // onClick={}
              >
                <svg className={styles.ReportIncomeIcon}>
                  <use
                    href={`${incomeSprite}#${
                      getCurrentCategory(category).name
                    }`}
                  />
                </svg>
                {/* <svg className={styles.ReportIncomeIcon}>
                  <use href={sprite + '#icon-invoice-1'}></use>
                </svg> */}
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
