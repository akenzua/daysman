import React from 'react';
import ReactDOM from 'react-dom';

import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import { Query, ApolloProvider} from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import { ThemeProvider } from '@material-ui/styles';


import {CssBaseline} from '@material-ui/core';




import './index.css';
import App from './App';
import Login from './Login';
import theme from './theme/theme';
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
      <ApolloHooksProvider client={client}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
         
          <Query query={IS_LOGGED_IN}>
            {({ data }) => (data.isLoggedIn ? <App /> : <Login />)}
          </Query>
          </ThemeProvider>
      </ApolloHooksProvider>
    </ApolloProvider>,
    document.getElementById('root'),
  );



