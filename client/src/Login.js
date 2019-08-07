import React from 'react';
import { Mutation, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import { AppBar, Toolbar, Typography, makeStyles, Grid} from '@material-ui/core';

import LoginForm from './LoginForm';
 




const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
    login(email: $email, password:$password) {
        token
    }
  }
`;
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Login() {

  const classes = useStyles();
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
  
              return (
                <div className={classes.root}>
                <AppBar position="static">
                  <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                      daysman
                    </Typography>
                  </Toolbar>
                </AppBar>
                <Grid 
                  container
                  direction = "column"
                  justify = "center"
                  alignItems = "center"
                 
                  > 
                   <Grid item > <LoginForm login={login} /> </Grid>
                </Grid>
              </div>
              ) 
            }}
          </Mutation>
        )}
      </ApolloConsumer>
    );
  }


