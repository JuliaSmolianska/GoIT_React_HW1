import Profile from './Profile/Profile';
import user from '../data/user.json';
import data from '../data/statistic.json';
import Statistics from './Statistics/Statistics';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics stats={data} />
    </div>
  );
};
