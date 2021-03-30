import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styles from '../ReportExpense/ReportExpense.module.scss';
import Container from '../Container/Container';
// import sprite from '../../img/sprite.svg';
import expenseSprite from '../ReportExpense/expenseSprite.svg';
// import CategoriesName from './CategoriesName';
import ReportExpenseIncomeToggler from '../../components/ReportExpenseIncomeToggler/ReportExpenseIncomeToggler';

const ReportExpense = () => {
  const [categories, setCategories] = useState([
    'Продукты',
    'Алкоголь',
    'Развлечения',
    'Здоровье',
    'Транспорт',
    'Всё для дома',
    'Техника',
    'Коммуналка и связь',
    'Спорт и хобби',
    'Образование',
    'Прочее',
  ]);
  return (
    <>
      <ReportExpenseIncomeToggler />
      <Container>
        <h1 style={{ color: 'red', textAlign: 'center' }}>Расходы</h1>

        <ul className={styles.ReportExpenseList}>
          {categories.map(({ category, id, amount }) => (
            <li name={category} key={id} className={styles.ReportExpenseItem}>
              <p name={category} className={styles.ReportExpenseAmount}>
                5000.00 {amount}
              </p>
              <button
                type="button"
                name={category}
                className={styles.ReportExpenseBtn}
                // onClick={}
                // className={styles.IsActiveBtn && styles.isActiveIcon}
              >
                <svg className={styles.ReportExpenseIcon}>
                  <use href={expenseSprite + '#icon-alcohol'}></use>
                </svg>
              </button>
              <h3 name={category} className={styles.ReportExpenseTitle}>
                Продукты {category}
              </h3>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
};

export default ReportExpense;
