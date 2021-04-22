import React from 'react';
import '../index.css';
import Profile from './Profile/Profile';
import user from '../user.json';
import Statistics from './Statistics/Statistics';
import statisticalData from '../statistical-data.json';
import FriendList from './FriendList/FriendList';
import friends from '../friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../transactions.json';

export default function App() {
  return (
    <div>
     <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
}