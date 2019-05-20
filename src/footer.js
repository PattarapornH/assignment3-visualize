import React, { Component } from "react";
import './footer.css'
class footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="footer">
          <div className="text-left">
            <p>Ministry of Tourism & Sports</p>
          </div>
          <div className="topright">
            Pattaraporn Hanphadungkit 5910502026
          </div>
					{/* <hr /> */}
          <div className="bottomright">
            <p> Copyright 2019&copy; </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default footer;
