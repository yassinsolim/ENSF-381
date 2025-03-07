import React from 'react';

function Home({ title, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Home;
