import IFriend from '../../interfaces/Friends.interface';

import style from './FriendListItem.module.css';

type TFriend = Omit<IFriend, 'id'>;

const FriendListItem = ({ avatar, name, isOnline }: TFriend) => {
  return (
    <li className={style.item}>
      <span className={isOnline ? style.active : style.disabled}></span>
      <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
