import React from 'react';
import style from './BalanceCustom.module.scss'
import BalanceModal from '../BalanceModal/BalanceModal'

const BalanceCustom = () => {
  return (
    <div className={style.balanceWrapper} >
      <p className={style.balanceText}>Баланс:</p>
      <form className={style.balanceForm}>
        <input className={style.balanceInput} type="number" name="blance" placeholder=" 00.00 UAH" />
        <button className={style.balanceButton}>ПОДТВЕРДИТЬ</button>
        <BalanceModal/>
      </form>
    </div>
  );
};

export default BalanceCustom;