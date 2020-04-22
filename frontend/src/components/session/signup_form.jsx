import React from "react";
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
// import '../../assets/stylesheets/splash.scss';

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
      budget: 5,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.signup(user)
      // .then(() => this.props.history.push("/dashboard"));
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.props.errors).map((err, i) => (
          <li key={`err-${i}`}>{this.props.errors[err]}</li>
        ))}
      </ul>
    );
  }

  render() {
    // debugger;
    return (
      <div className="signup margin-auto">
          <form className='session-form' id='signup-form' onSubmit={this.handleSubmit}>
          <h2>Sign Up</h2>
            {this.renderErrors()}

            <div className='half-width'>
              <label className='split'>
                First Name 
                <input
                  type="text"
                  value={this.state.firstName}
                  onChange={this.update("firstName")}
                  placeholder="First Name"
                />
              </label>

              <label className='split'>
                Last Name 
                <input
                  type="text"
                  value={this.state.lastName}
                  onChange={this.update("lastName")}
                  placeholder="Last Name"
                />
              </label>
            </div>

            <label>
              Username 
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                placeholder="Username"
              />
            </label>

            <div className='half-width'>
              <label className='split'>
                Password 
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  placeholder="Password"
                />
              </label>

              <label className='split'>
                Confirm Password 
                <input
                  type="password"
                  value={this.state.password2}
                  onChange={this.update("password2")}
                  placeholder="Confirm Password"
                />
              </label>
            </div>

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
          <p className="margin-auto">Already have an account? <Link to="/login">Log in</Link></p>
          </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
