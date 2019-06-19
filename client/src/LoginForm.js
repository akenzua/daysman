import React, { Component } from 'react';


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
          <input
            required
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            onChange={this.onChange}
          />

            <input
            required
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            onChange={this.onChange}
          />
          <button type="submit">Log in</button>
        </form>
     
    );
  }
}

