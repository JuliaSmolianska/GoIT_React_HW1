import PropTypes from 'prop-types';

const StatisticsCard = ({ items: { label, percentage } }) => {
  return (
    <>
      <p class="label">{label}</p>
      <p class="percentage">{percentage}%</p>
    </>
  );
};

StatisticsCard.propTypes = {
  items: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};

export default StatisticsCard;
