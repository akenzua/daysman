import React from 'react';
import { Mutation, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';

import LoginForm from './LoginForm';




const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
    login(email: $email, password:$password) {
        token
    }
  }
`;

export default function Login() {
    return (
      <ApolloConsumer>
        {client => (
          <Mutation
            mutation={LOGIN_USER}
            onCompleted={({ login }) => {
              localStorage.setItem('token', login.token);
              client.writeData({ data: { isLoggedIn: true } });
            }}
          >
            {(login, { loading, error }) => {
              
              if (loading) return <h1>Loading</h1>;
              if (error) return <p>An error occurred</p>;
  
              return <LoginForm login={login} />;
            }}
          </Mutation>
        )}
      </ApolloConsumer>
    );
  }


