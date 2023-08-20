import css from './Transaction.module.css';
import Transactions from './Transactions';

const TransactionHistory = ({ items }) => {
  return (
    <div>
      <h2 className={css.title}>TransactionHistory</h2>
      <table className={css.transaction_history}>
        <thead>
          <tr className={css.transaction_header}>
            <th className={css.title_colomns}>Type</th>
            <th className={css.title_colomns}>Amount</th>
            <th className={css.title_colomns}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <Transactions item={item} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
