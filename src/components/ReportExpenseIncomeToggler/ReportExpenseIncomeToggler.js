import React from 'react';
import Container from '../Container/Container';
import styles from '../ReportExpenseIncomeToggler/ReportExpenseIncomeToggler.module.scss';
import sprite from '../../img/sprite.svg';

const ReportExpenseIncomeToggler = () => {
  return (
    <>
      <Container>
        <div className={styles.TogglerWrapper}>
          <svg className={styles.ArrowIcon}>
            <use href={sprite + '#icon-arrow-left'}></use>
          </svg>
          <p className={styles.TogglerText}>Доходы/Расходы</p>
          <svg className={styles.ArrowIcon}>
            <use href={sprite + '#icon-arrow-right'}></use>
          </svg>
        </div>
      </Container>
    </>
  );
};

export default ReportExpenseIncomeToggler;
