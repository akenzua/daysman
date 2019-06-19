import React from 'react';

import { ApolloConsumer } from 'react-apollo';



export default function Logout() {
  return (
    <ApolloConsumer>
      {client => (
        <button
          onClick={() => {
            client.writeData({ data: { isLoggedIn: false } });
            localStorage.clear();
          }}
        >
         
          Logout
        </button>
      )}
    </ApolloConsumer>
  );
}

