import React from 'react';

const Hello = ({ user }) => {
  return (
    <div>
      {user?.name ? <h1>Hello! {user.name}</h1> : <button>Login</button>}
    </div>
  );
};

export default Hello;
