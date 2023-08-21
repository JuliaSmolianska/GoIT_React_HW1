import Profile from './Profile/Profile';
import user from '../data/user.json';
import data from '../data/statistic.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import Statistics from './Statistics/Statistics';
import FriendsList from './FriendsList/FriendsList';
import TransactionHistory from './Transaction/TransactionHistory';
import PropTypes from 'prop-types';

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

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

Statistics.propTypes = {
  stats: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};

FriendsList.propTypes = {
  friends: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

TransactionHistory.propTypes = {
  payment: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
