import React from 'react';
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
        {Object.keys(this.state.errors).map((err, i) => (
          <li key={`err-${i}`}>{this.state.errors[err]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <main className='main-body'>
        <div>
          <h2>Log In</h2>
          <form className="session-form" onSubmit={this.handleSubmit}>
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
            <button className="center" type="submit">Sign in</button>
          </form>
        </div>
      </main>
    );
  }
}

export default LoginForm;