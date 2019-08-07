import React from 'react';

import { ApolloConsumer } from 'react-apollo';
import Button from '@material-ui/core/Button';




export default function Logout() {
  return (
    <ApolloConsumer>
      {client => (
        <Button color="inherit"
          onClick={() => {
            client.writeData({ data: { isLoggedIn: false } });
            localStorage.clear();
          }}
          >Logout</Button>
        
      )}
    </ApolloConsumer>
  );
}

