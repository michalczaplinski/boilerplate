import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';


class MainComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.test}
      </div>
    )
  }

}

const Application = connect(
  (state) =>  state,
  (dispatch) => { return { actions: bindActionCreators(actions, dispatch)} }
)(MainComponent);


export default Application;
