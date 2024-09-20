import style from './TransactionHistory.module.css';

import ITransaction from '../../interfaces/Transaction.interface';

interface ITransactions {
  transactions: ITransaction[];
}

const TransactionHistory = ({ transactions }: ITransactions) => {
  return (
    <table className={style.transactionHistory}>
      <thead>
        <tr className={style.titleBlock}>
          <th className={style.title}>Type</th>
          <th className={style.title}>Amount</th>
          <th className={style.title}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} className={style.transaction}>
              <td className={style.type}>{type}</td>
              <td className={style.amount}>{amount}</td>
              <td className={style.currency}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
