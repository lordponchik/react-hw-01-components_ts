import userData from './data/user.json';
import statData from './data/statistics.json';

import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';

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
    </>
  );
}

export default App;
