import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { signup, clearErrors } from "../../actions/session_actions";
import SignupForm from './signup_form';

const mapStateToProps = (state, ownProps) => ({
  // user: state.
  signedIn: state.session.isSignedIn,
  errors: state.errors.session,
  username: ownProps.username
});

const mapDispatchToProps = (dispatch) => ({
  signup: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);