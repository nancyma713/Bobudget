import React from "react";
import { Link, Redirect } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import '../../assets/stylesheets/signup_form.scss';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      username: this.props.username,
      zipcode: "",
      // budget: "",
      password: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      zipcode: this.state.zipcode.toString(),
      // budget: this.state.budget,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.signup(user)
    .then(() => this.props.history.push("/dashboard"));
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((err, i) => (
          <li key={`err-${i}`}>{this.state.errors[err]}</li>
        ))}
      </ul>
    );
  }

  render() {
    debugger;
    return (
      <div className='signup-form'>
        <form onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          <label>
            First Name 
            <input
              type="text"
              value={this.state.firstName}
              onChange={this.update("firstName")}
              placeholder="First Name"
            />
          </label>

          <label>
            Last Name 
            <input
              type="text"
              value={this.state.lastName}
              onChange={this.update("lastName")}
              placeholder="Last Name"
            />
          </label>

          <label>
            Username 
            <input
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              placeholder="Username"
            />
          </label>

          <label>
            Password 
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
          </label>

          <label>
            Confirm Password 
            <input
              type="password"
              value={this.state.password2}
              onChange={this.update("password2")}
              placeholder="Confirm Password"
            />
          </label>

          <label>
            Zipcode 
            <input
              type="number"
              value={this.state.zipcode}
              onChange={this.update("zipcode")}
              placeholder="Zipcode"
            />
          </label>

          {/* <label>
            Budget 
            <input
              type="number"
              min="5.00"
              step="0.01"
              value={this.state.budget}
              onChange={this.update("budget")}
              placeholder="Budget"
            />
          </label> */}

          <button type="submit">Sign up</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
