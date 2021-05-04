import React from "react";

import user from "./../data/user.json";
import Profile from "./Profile/Profile";
import statisticalData from "./../data/statistical-data.json";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import friends from "./../data/friends.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "./../data/transactions.json";
const App = () => (
  <>
    <Profile {...user} />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);

export default App;
