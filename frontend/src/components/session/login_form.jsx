import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/stylesheets/session-forms.scss';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.demoLoginHelper = this.demoLoginHelper.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      username: this.state.username,
      password: this.state.password,
    };

    this.props.login(user);
  }

  renderErrors(field) {
    if (this.props.errors) {
      return (
        <>{this.props.errors[field]}</>
      )
    } else {
      return null;
    }
  }

  // demoLogin(e) {
  //   e.preventDefault();
  //   const user = { username: "demo_user", password: "123456" };

  //   this.props.login(user)
  // }

  demoLogin(e) {
    e.preventDefault();
    const user = { username: "demo_user", password: "123456" };
    const userNameArray = user.username.split('');
    const passwordArray = user.password.split('');

    this.setState({ username: '', password: '' }, () => {
      this.demoLoginHelper(userNameArray, passwordArray);
    });
  }

  demoLoginHelper(userNameArray, passwordArray) {
    if (userNameArray.length > 0) {
      this.setState({
        username: this.state.username + userNameArray.shift()
      }, () => {
        window.setTimeout(() =>
          this.demoLoginHelper(userNameArray, passwordArray), 75);
      }
      );
    } else if (passwordArray.length > 0) {
      this.setState({
        password: this.state.password + passwordArray.shift()
      }, () => {
        window.setTimeout(() =>
          this.demoLoginHelper(userNameArray, passwordArray), 75);
      }
      );
    } else {
      this.props.login(this.state);
    }
  }


  render() {
    return (
      <div className="login margin-auto">
        <form className="session-form" onSubmit={this.handleSubmit}>
          <h2>Log In</h2>
          <label>
            Username
            <input
              className={this.props.errors['username'] ? 'red' : 'none'}
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              placeholder="Username"
            />
            <span className={this.props.errors['username'] ? 'error-right' : 'no-error'}>{this.renderErrors('username')}</span>
          </label>

          <label>
            Password
            <input
              className={this.props.errors['password'] ? 'red' : 'none'}
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
            <span className={this.props.errors['password'] ? 'error-right' : 'no-error'}>{this.renderErrors('password')}</span>
          </label>

          <button className="center" type="submit">
            Log in
          </button>

          <button className="center" type="submit" onClick={this.demoLogin}>
            Demo User
          </button>

          <p className="margin-auto">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default LoginForm;