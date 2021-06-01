import React from "react";

import user from "./data-json/user.json";
import statistics from "./data-json/statistics.json";
import friends from "./data-json/friend-list.json";
import transactions from "./data-json/transactions.json";

import Profile from "./components/profile-component/Profile";
import Statistics from "./components/statistics-component/Stastistics";
import FriendList from "./components/friends-list-component/FriendList";
import TransactionHistory from "./components/transactions-component/TransactionHistory";

const App = () => (
  <>
    <Profile
      src={user.avatar}
      name={user.name}
      location={user.location}
      tag={user.tag}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
    <Statistics stats={statistics} />
    <Statistics title="Upload stats" stats={statistics} />
    <FriendList friends={friends} />
    <TransactionHistory transctions={transactions} />
  </>
);

export default App;
