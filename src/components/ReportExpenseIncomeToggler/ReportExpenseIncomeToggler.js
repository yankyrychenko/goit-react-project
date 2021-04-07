import React, { useState } from 'react';
import styles from '../ReportExpenseIncomeToggler/ReportExpenseIncomeToggler.module.scss';
import sprite from '../../img/sprite.svg';
import ReportExpense from '../../components/ReportExpense/ReportExpense';
import ReportIncome from '../../components/ReportIncome/ReportIncome';

const section = {
  EXPENSE: 'expense',
  INCOME: 'income',
};

const ReportExpenseIncomeToggler = () => {
  const [currentSection, setCurrentSection] = useState(section.INCOME);

  return (
    <div className={styles.Panel}>
      <div className={styles.TogglerWrapper}>
        <button
          type="button"
          className={styles.TogglerButton}
          onClick={() => setCurrentSection(section.INCOME)}
        >
          <svg className={styles.ArrowIcon} name="arrowLeft">
            <use href={sprite + '#icon-arrow-left'}></use>
          </svg>
        </button>

        <p className={styles.TogglerText}>
          {section.EXPENSE === currentSection ? 'Доходы' : 'Расходы'}
        </p>

        <button
          type="button"
          className={styles.TogglerButton}
          onClick={() => setCurrentSection(section.EXPENSE)}
        >
          <svg className={styles.ArrowIcon} name="arrowRight">
            <use href={sprite + '#icon-arrow-right'}></use>
          </svg>
        </button>
      </div>
      {section.EXPENSE === currentSection && <ReportIncome />}
      {section.INCOME === currentSection && <ReportExpense />}
    </div>
  );
};

export default ReportExpenseIncomeToggler;
