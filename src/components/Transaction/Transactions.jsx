import css from './Transaction.module.css';

const Transactions = ({ item: { type, amount, currency } }) => {
  return (
    <>
      <th className={css.trans}>{type}</th>
      <th>{amount}</th>
      <th>{currency}</th>
    </>
  );
};

export default Transactions;
