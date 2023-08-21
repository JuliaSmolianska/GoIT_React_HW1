import css from './FriendsList.module.css';
import FriendsListCard from './FriendsListCard';
import PropTypes from 'prop-types';

const FriendsList = ({ friends }) => {
  return (
    <section className={css.box}>
      <h2 className={css.title}>Friends List</h2>
      <ul className={css.friends_list}>
        {friends.map(friend => (
          <li key={friend.id} className={css.list}>
            <FriendsListCard friend={friend} />
          </li>
        ))}
      </ul>
    </section>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default FriendsList;
