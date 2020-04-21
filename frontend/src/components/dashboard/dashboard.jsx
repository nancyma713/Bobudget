import React from 'react';
import '../../assets/stylesheets/dashboard.scss';

class Dashboard extends React.Component {
  render() {
    return(
      <div className="green-container margin-auto flex-row space-around">
        <div className="d-left">
          <div className="weather">
            weather
          </div>
        </div>

        <div className="d-middle">
          <div className="calculator">
            calc
          </div>

          <div className="budget">
            budg
          </div>
        </div>

        <div className="d-right">
          <div className="favorites">
            fav
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;