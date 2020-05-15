import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";

import "../assets/stylesheets/colors.scss";
import "../assets/stylesheets/app.scss";

import MainPage from "./main/main_page";
import NavBarContainer from "./nav/navbar_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import DashboardContainer from "./dashboard/dashboard_container";
import Creators from "./creators/creators";
import Search from "./search/search_container";
import PurchaseHistoryContainer from './purchase_history/purchase_history_container';

const App = () => (
  <>
    <NavBarContainer />
    <Route exact path='/creators' component={Creators} />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <ProtectedRoute exact path="/dashboard" component={DashboardContainer} />
      <ProtectedRoute exact path="/search" component={Search} />
      <ProtectedRoute exact path="/purchases" component={PurchaseHistoryContainer} />
    </Switch>
  </>
);

export default App;
