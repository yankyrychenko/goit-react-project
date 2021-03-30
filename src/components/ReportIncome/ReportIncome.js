import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styles from '../ReportIncome/ReportIncome.module.scss';
import Container from '../Container/Container';
import sprite from '../../img/sprite.svg';
import ReportExpenseIncomeToggler from '../../components/ReportExpenseIncomeToggler/ReportExpenseIncomeToggler';

const ReportIncome = () => {
  const [categories, setCategories] = useState(['З/П', 'Доп. доход']);
  return (
    <>
      <ReportExpenseIncomeToggler />
      <Container>
        <h1 style={{ color: 'green', textAlign: 'center' }}>Доходы</h1>

        <ul className={styles.ReportIncomeList}>
          {categories.map(({ category, id, amount }) => (
            <li name={category} key={id} className={styles.ReportIncomeItem}>
              <p name={category} className={styles.ReportIncomeAmount}>
                45000.00 {amount}
              </p>
              <button
                type="button"
                name={category}
                className={styles.ReportIncomeBtn}
                // onClick={}
              >
                <svg className={styles.ReportIncomeIcon}>
                  <use href={sprite + '#icon-invoice-1'}></use>
                </svg>
              </button>
              <h3 name={category} className={styles.ReportIncomeTitle}>
                З/П{category}
              </h3>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
};

export default ReportIncome;
