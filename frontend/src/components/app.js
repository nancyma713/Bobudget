import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";
import '../assets/stylesheets/app.scss';
import MainPage from "./main/main_page";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import Dashboard from './dashboard/dashboard'; // temporary, remove later
// import DashboardContainer from "./dashboard/dashboard_container";

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/dashboard" component={Dashboard} /> {/* temporary, remove later */}
      {/* <AuthRoute exact path="/dashboard" component={DashboardContainer} /> */}
    </Switch>
  </div>
);

export default App;
