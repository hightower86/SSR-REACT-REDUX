import React from 'react';
import UsersList from './UsersList';

const Home = () => {
  return (
    <div>
      <h4 style={{ padding: '0', margin: '0' }}>
        I'm the home very super nice component
      </h4>
      <UsersList />
      <button onClick={() => console.log('clicked')}>Press me!</button>
    </div>
  );
};

export default Home;
