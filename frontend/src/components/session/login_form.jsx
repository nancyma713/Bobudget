import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/stylesheets/splash.scss';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  update(field) {
    return e => this.setState({ 
      [field]: e.currentTarget.value 
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.login(user)
      // .then(() => this.props.history.push('/dashboard'))
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.props.errors).map((err, i) => (
          <li key={`err-${i}`}>{this.props.errors[err]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
        <div className="login margin-auto">
          <form className="session-form" onSubmit={this.handleSubmit}>
          <h2>Log In</h2>
            {this.renderErrors()}
            <label>Username
              <input 
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="Username"
              />
            </label>

            <label>Password
              <input 
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            </label>
            <button className="center" type="submit">Log in</button>
          <p className="margin-auto">Don't have an account? <Link to="/signup">Sign up</Link></p>
          </form>
        </div>
    );
  }
}

export default LoginForm;