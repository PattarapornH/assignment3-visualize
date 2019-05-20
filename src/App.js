import React, { Component } from 'react';
import Sum_budget from './sum_budget';
import Stackchart from './stackchart';

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Sum_budget/>
        <Stackchart/>
      </React.Fragment>
    );
  }
}
export default Main;