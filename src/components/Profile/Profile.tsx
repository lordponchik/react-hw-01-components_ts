import IProfile from '../../interfaces/Profile.interface';
import style from './Profile.module.css';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}: IProfile) => {
  return (
    <div className={style.profile}>
      <div className="description">
        <img src={avatar} alt={username} width="150" className={style.avatar} />
        <p className={style.name}>{username}</p>
        <p className={style.tag}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.stats}>
        <li className={style.stats__item}>
          <span className={style.label}>Followers</span>
          <span className={style.quantity}>{formatNumber(followers)}</span>
        </li>
        <li className={style.stats__item}>
          <span className={style.label}>Views</span>
          <span className={style.quantity}>{formatNumber(views)}</span>
        </li>
        <li className={style.stats__item}>
          <span className={style.label}>Likes</span>
          <span className={style.quantity}>{formatNumber(likes)}</span>
        </li>
      </ul>
    </div>
  );
};

function formatNumber(quantity: number): string {
  return new Intl.NumberFormat('en').format(quantity);
}

export default Profile;
