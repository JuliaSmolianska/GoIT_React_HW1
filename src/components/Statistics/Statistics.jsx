import StatisticsCard from './StatisticsCard';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ stats, title }) => {
  const colorBackground = [
    'lightblue',
    'purple',
    'orange',
    'red',
    'yellowgreen',
  ];
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.stat_list}>
        {stats.map((item, index) => (
          <li
            key={item.id}
            className={css.list}
            style={{
              backgroundColor: colorBackground[index % colorBackground.length],
            }}
          >
            <StatisticsCard items={item} />
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};

export default Statistics;
