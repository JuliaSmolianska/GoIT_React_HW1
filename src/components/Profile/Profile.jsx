import css from './Profile.module.css';

const Profile = ({ user }) => {
  return (
    <div className={css.profile_box}>
      <h1>Profile</h1>
      <div className={css.profile}>
        <div className={css.description}>
          <img src={user.avatar} alt="User avatar" className={css.avatar} />
          <h2 className="name">{user.username}</h2>
          <p className={css.tag}>@{user.tag}</p>
          <p className={css.location}>{user.location}</p>
        </div>

        <ul className={css.stats}>
          <li>
            <p className={css.label}>Followers</p>
            <p className={css.quantity}>{user.stats.followers}</p>
          </li>
          <li className={css.border}>
            <p className={css.label}>Views</p>
            <p className={css.quantity}>{user.stats.views}</p>
          </li>
          <li>
            <p className={css.label}>Likes</p>
            <p className={css.quantity}>{user.stats.likes}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
