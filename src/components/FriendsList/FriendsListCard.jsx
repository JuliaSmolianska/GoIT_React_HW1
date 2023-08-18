import css from './FriendsList.module.css';

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

export default FriendsListCard;
