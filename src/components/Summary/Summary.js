import React from 'react';
import Container from '../Container';
import styles from './Summary.module.scss';

const Summary = () => {
  return (
    <Container>
      <table className={styles.table}>
        <tr key="sum">
          <th className={styles.tableHeader} colspan="2">
            Cводка
          </th>
        </tr>
        <tr key="">
          {/* пример */}

          <th>december</th>
          <th>10000</th>
        </tr>
        <tr key="">
          {/*пример */}
          <th>october</th>
          <th>10000</th>
        </tr>
      </table>
    </Container>
  );
};

export default Summary;
