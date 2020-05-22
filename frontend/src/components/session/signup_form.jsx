import React from "react";
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import '../../assets/stylesheets/session-forms.scss';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      zipcode: "",
      password: "",
      password2: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.clearErrors();
    let user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      zipcode: this.state.zipcode.toString(),
      budget: '5.00',
      password: this.state.password,
      password2: this.state.password2,
    };


    this.props.signup(user)
      .then(() => {
        if (this.props.errors.length === 0) {
          this.props.login({ username: this.state.username, password: this.state.password })
        }

      })
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

  render() {
    return (
      <div id="signup-form-outer">
        <div id="signup-form-middle">
          <div id="signup-form-inner">
            <h1>Sign up</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="signup-split">
                <label>
                  First Name 
                  <input
                    className={this.props.errors['firstName'] ? 'red' : 'none'}
                    type="text"
                    value={this.state.firstName}
                    onChange={this.update("firstName")}
                    placeholder="First Name"
                  />

                  <span className={this.props.errors['firstName'] ? 'error-left' : 'no-error'}>{this.renderErrors('firstName')}</span>
                </label>

                <label>
                  Last Name
                  <input
                    className={this.props.errors['lastName'] ? 'red' : 'none'}
                    type="text"
                    value={this.state.lasttName}
                    onChange={this.update("lasttName")}
                    placeholder="Last Name"
                  />

                  <span className={this.props.errors['lastName'] ? 'error-right' : 'no-error'}>{this.renderErrors('lastName')}</span>
                </label>
              </div>

              <div className="signup-split">
                <label>
                  Username
                  <input
                    className={this.props.errors['username'] ? 'red' : 'none'}
                    type="text"
                    value={this.state.username}
                    onChange={this.update("username")}
                    placeholder="Username"
                  />

                  <span className={this.props.errors['username'] ? 'error-left' : 'no-error'}>{this.renderErrors('username')}</span>
                </label>

                <label>
                  Zipcode
                  <input
                    className={this.props.errors['zipcode'] ? 'red' : 'none'}
                    type="text"
                    value={this.state.zipcode}
                    onChange={this.update("zipcode")}
                    placeholder="Zipcode"
                  />

                  <span className={this.props.errors['zipcode'] ? 'error-right' : 'no-error'}>{this.renderErrors('zipcode')}</span>
                </label>
              </div>

              <div className="signup-split">
                <label>
                  Password
                  <input
                    className={this.props.errors['password'] ? 'red' : 'none'}
                    type="text"
                    value={this.state.password}
                    onChange={this.update("password")}
                    placeholder="Password"
                  />

                  <span className={this.props.errors['password'] ? 'error-left' : 'no-error'}>{this.renderErrors('password')}</span>
                </label>

                <label>
                  Confirm Password
                  <input
                    className={this.props.errors['password2'] ? 'red' : 'none'}
                    type="text"
                    value={this.state.password2}
                    onChange={this.update("password2")}
                    placeholder="Confirm password"
                  />

                  <span className={this.props.errors['password2'] ? 'error-right' : 'no-error'}>{this.renderErrors('password2')}</span>
                </label>
              </div>

              <button type="submit">Sign Up</button>

              <p>Already have an account? <Link to="/login">Log in</Link></p>
            </form>
          </div>
        </div>
      </div>
      // <div className="signup margin-auto">
      //   <form className="session-form" onSubmit={this.handleSubmit}>
      //     <h2>Sign Up</h2>
      //     <div className="half-width">
      //       <label className="split">
      //         First Name
      //         <input
      //           className={this.props.errors['firstName'] ? 'red' : 'none'}
      //           type="text"
      //           value={this.state.firstName}
      //           onChange={this.update("firstName")}
      //           placeholder="First Name"
      //         />
      //         <span className={this.props.errors['firstName'] ? 'error-left' : 'no-error'}>{this.renderErrors('firstName')}</span>
      //       </label>

      //       <label className="split">
      //         Last Name
      //         <input
      //           className={this.props.errors['lastName'] ? 'red' : 'none'}
      //           type="text"
      //           value={this.state.lastName}
      //           onChange={this.update("lastName")}
      //           placeholder="Last Name"
      //         />
      //         <span className={this.props.errors['lastName'] ? 'error-right' : 'no-error'}>{this.renderErrors('lastName')}</span>
      //       </label>
      //     </div>

      //     <label>
      //       Username
      //       <input
      //         className={this.props.errors['username'] ? 'red' : 'none'}
      //         type="text"
      //         value={this.state.username}
      //         onChange={this.update("username")}
      //         placeholder="Username"
      //       />
      //       <span className={this.props.errors['username'] ? 'error-right' : 'no-error'}>{this.renderErrors('username')}</span>
      //     </label>

      //     <div className="half-width">
      //       <label className="split">
      //         Password
      //         <input
      //           className={this.props.errors['password'] ? 'red' : 'none'}
      //           type="password"
      //           value={this.state.password}
      //           onChange={this.update("password")}
      //           placeholder="Password"
      //         />
      //         <span className={this.props.errors['password'] ? 'error-left' : 'no-error'}>{this.renderErrors('password')}</span>
      //       </label>

      //       <label className="split">
      //         Confirm Password
      //         <input
      //           className={this.props.errors['password2'] ? 'red' : 'none'}
      //           type="password"
      //           value={this.state.password2}
      //           onChange={this.update("password2")}
      //           placeholder="Confirm Password"
      //         />
      //         <span className={this.props.errors['password'] ? 'error-right' : 'no-error'}>{this.renderErrors('password')}</span>
      //       </label>
      //     </div>

      //     <label>
      //       Zipcode
      //       <input
      //         className={this.props.errors['zipcode'] ? 'red' : 'none'}
      //         type="number"
      //         value={this.state.zipcode}
      //         onChange={this.update("zipcode")}
      //         placeholder="Zipcode"
      //       />
      //       <span className={this.props.errors['zipcode'] ? 'error-right' : 'no-error'}>{this.renderErrors('zipcode')}</span>
      //     </label>
      //     <button type="submit">Sign up</button>
      //     <p className="margin-auto">
      //       Already have an account? <Link to="/login">Log in</Link>
      //     </p>
      //   </form>
      // </div>
    );
  }
}

export default withRouter(SignupForm);
