import React from 'react';
import style from './BalanceModal.module.scss'
const BalanceModal = () => {
  return (
    <div className={style.balanceModal}>
      <p className={style.text}>Привет! Для начала работы внеси текущий баланс своего счета!</p>
      <p className={style.text}>Ты не можешь тратить деньги пока
их у тебя нет :)</p>
    </div>
  );
};

export default BalanceModal;