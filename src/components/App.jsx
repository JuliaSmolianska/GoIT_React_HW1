import Profile from './Profile/Profile';
import user from '../data/user.json';
import data from '../data/statistic.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import Statistics from './Statistics/Statistics';
import FriendsList from './FriendsList/FriendsList';
import TransactionHistory from './Transaction/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
