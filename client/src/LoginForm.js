import React, { Component } from 'react';

import {TextField, Button} from '@material-ui/core';


export default class LoginForm extends Component {
  state = { 
      email: '',
      password: ''
 };

  onChange = event => {
    this.setState({
        [event.target.id]: event.target.value
    })
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.login({ variables: { email: this.state.email, password: this.state.password } });
  };

  render() {
    return (
      
        <form onSubmit={this.onSubmit}>
        <TextField
        id="email"
        label="Email"
        // className={classes.textField}
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        fullWidth 
        // variant="outlined"
        onChange={this.onChange}
      />
      
      <TextField
        id="password"
        label="Password"
        // className={classes.textField}
        name="password"
        type="password"
        autoComplete="current-password"
        margin="normal"
        fullWidth 
        // variant="outlined"
        onChange={this.onChange}
      />  
          

            {/* <input
            required
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            onChange={this.onChange}
          /> */}
          <Button variant="contained" color="primary" fullWidth type="submit">
        Log In
      </Button>
        </form>
     
    );
  }
}

