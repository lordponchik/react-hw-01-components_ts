import IFriend from '../../interfaces/Friends.interface';

import FriendListItem from '../FriendListItem/FriendListItem';

import style from './FriendList.module.css';

interface IFriends {
  friends: IFriend[];
}

const FriendList = ({ friends }: IFriends) => {
  return (
    <ul className={style.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />;
      })}
    </ul>
  );
};

export default FriendList;
