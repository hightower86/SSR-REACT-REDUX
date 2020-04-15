import React from 'react';

const Home = () => {
  return (
    <div>
      <h4 style={{ padding: '0', margin: '0' }}>
        I'm the home very nice component
      </h4>
      <button onClick={() => console.log('clicked')}>Press me!</button>
    </div>
  );
};

export default Home;
