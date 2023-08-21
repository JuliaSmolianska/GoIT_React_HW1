import css from './Transaction.module.css';
import PropTypes from 'prop-types';

const Transactions = ({ item: { type, amount, currency } }) => {
  return (
    <>
      <th className={css.trans}>{type}</th>
      <th>{amount}</th>
      <th>{currency}</th>
    </>
  );
};

Transactions.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};

export default Transactions;
