import StatisticsCard from './StatisticsCard';
import css from './Statistics.module.css';

const Statistics = ({ stats }) => {
  const colorBackground = ['lightblue', 'purple', 'orange', 'red', 'yellowgreen'];
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>
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

export default Statistics;
