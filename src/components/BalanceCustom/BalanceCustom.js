import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './BalanceCustom.module.scss';
import BalanceModal from '../BalanceModal/BalanceModal';
import { getUserBalance } from '../../redux/selectors/authSelectors';
import { addBalance } from '../../redux/operations/balanceOperations';

const initialState = {
  newBalance: '',
};

const BalanceCustom = () => {
  const [newBalance, setNewBalance] = useState({ ...initialState });
  const dispatch = useDispatch();
  const balanceHandler = ({ target }) => {
    const { name, value } = target;
    setNewBalance(state => ({ ...state, [name]: value }));
  };
  const balanceSubmit = e => {
    e.preventDefault();
    console.log(newBalance);
    dispatch(addBalance(newBalance));
  };
  const currentBalance = useSelector(state => getUserBalance(state));

  return (
    <div className={style.balanceWrapper}>
      <form className={style.balanceForm} onSubmit={balanceSubmit}>
        <label htmlFor="balance" className={style.balanceLabel}>
          Баланс:
        </label>
        <input
          maxLength="6"
          min="1"
          max="999999"
          id="balance"
          onChange={balanceHandler}
          className={style.balanceInput}
          type="number"
          name="newBalance"
          placeholder={currentBalance === 0 ? '00.00 UAH' : currentBalance}
          value={newBalance.newBalance}
        />
        <button type="submit" className={style.balanceButton}>
          ПОДТВЕРДИТЬ
        </button>
      </form>
      {newBalance.newBalance && currentBalance == 0 ? <BalanceModal /> : null}
    </div>
  );
};

export default BalanceCustom;
