import React from 'react';
import style from './BalanceCustom.module.scss'

const BalanceCustom = () => {
  return (
    <div className={style.balanceWrapper} >
      <p className={style.balanceText}>Баланс:</p>
      <form className={style.balanceForm}>
        <input className={style.balanceInput} type="number" name="blance" placeholder="UAH" />
        <button className={style.balanceButton}>ПОДТВЕРДИТЬ</button>
      </form>
    </div>
  );
};

export default BalanceCustom;