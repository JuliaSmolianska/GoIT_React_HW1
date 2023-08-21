const StatisticsCard = ({ items: { label, percentage } }) => {
  return (
    <>
      <p class="label">{label}</p>
      <p class="percentage">{percentage}%</p>
    </>
  );
};

export default StatisticsCard;


