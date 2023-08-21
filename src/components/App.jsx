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
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        user={user}
      />
      <Statistics stats={data} title="Upload stats" />
      <FriendsList
        avatar={friends.avatar}
        name={friends.name}
        isOnline={friends.isOnline}
        friends={friends}
      />
      <TransactionHistory
        id={transactions.id}
        type={transactions.type}
        amount={transactions.amount}
        currency={transactions.currency}
        items={transactions}
      />
    </div>
  );
};
