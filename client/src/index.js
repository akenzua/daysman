import React from 'react';
import ReactDOM from 'react-dom';

import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import { Query, ApolloProvider} from 'react-apollo';
import gql from 'graphql-tag';


import './index.css';
import App from './App';
import Login from './Login';
import { resolvers, typeDefs } from './resolvers';

const IS_LOGGED_IN = gql`  query IsUserLoggedIn {
    isLoggedIn @client
  }
`


const cache = new InMemoryCache();
const client = new ApolloClient({
    cache,
    link: new HttpLink({
      uri: 'http://localhost:4000/graphql',
      headers: {
        authorization: localStorage.getItem('token'),
      },
    }),

    typeDefs,
    resolvers,
  });
  
  cache.writeData({
    data: {
      isLoggedIn: !!localStorage.getItem('token'),
      
    },
  });

  ReactDOM.render(
    <ApolloProvider client={client}>
      <Query query={IS_LOGGED_IN}>
        {({ data }) => (data.isLoggedIn ? <App /> : <Login />)}
      </Query>
    </ApolloProvider>,
    document.getElementById('root'),
  );



