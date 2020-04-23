import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import { Route } from "react-router-dom";

import { Switch } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";
import "../assets/stylesheets/app.scss";
import MainPage from "./main/main_page";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import DashboardContainer from "./dashboard/dashboard_container";
// import Dashboard from "./dashboard/dashboard";

import Search from "./search/search_container";
import PurchaseHistoryContainer from './purchase_history/purchase_history_container';



// Testing for maps- START
import MapContainer from "./map/map_container";
//END

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <ProtectedRoute exact path="/dashboard" component={DashboardContainer} />
      <ProtectedRoute exact path="/search" component={Search} />



      {/* testing for map-START */}
        <Route exact path='/map' component={MapContainer}/>
      {/* END */}
      

      <ProtectedRoute exact path="/purchases" component={PurchaseHistoryContainer} />
    </Switch>
  </div>
);

export default App;
