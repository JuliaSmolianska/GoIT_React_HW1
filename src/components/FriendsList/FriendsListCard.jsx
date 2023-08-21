import css from './FriendsList.module.css';
import PropTypes from 'prop-types';

const FriendsListCard = ({ friend: { isOnline, avatar, name } }) => {
  let onLine = 'red';
  if (isOnline) {
    onLine = 'green';
  }
  return (
    <>
      <span className={css.status} style={{ backgroundColor: onLine }}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
};

FriendsListCard.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};

export default FriendsListCard;
