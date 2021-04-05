import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './BalanceCustom.module.scss';
import BalanceModal from '../BalanceModal/BalanceModal';
import { getUserBalance } from '../../redux/selectors/authSelectors';
import { addBalance } from '../../redux/operations/balanceOperations';

const BalanceCustom = () => {
  const [currentBalance, setCurrentBalance] = useState();
  const newBalance = useSelector(state => getUserBalance(state));

  useEffect(() => setCurrentBalance(newBalance), [newBalance]);

  const dispatch = useDispatch();
  const balanceHandler = ({ target }) => {
    const { name, value } = target;
    setCurrentBalance(value);
  };
  const balanceSubmit = e => {
    e.preventDefault();
    dispatch(addBalance({ newBalance: currentBalance }));
  };
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
          value={currentBalance}
        />
        <button type="submit" className={style.balanceButton}>
          ПОДТВЕРДИТЬ
        </button>
      </form>
      {currentBalance == 0 ? <BalanceModal /> : null}
    </div>
  );
};

export default BalanceCustom;
