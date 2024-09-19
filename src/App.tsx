import userData from './data/user.json';
import statData from './data/statistics.json';
import friendsData from './data/friends.json';

import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';

function App() {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" statistics={statData} />
      <FriendList friends={friendsData} />
    </>
  );
}

export default App;
