import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSymptoms } from "../actions/symptomsAction";

class SymptomsContainer extends Component {
  componentDidMount() {
    this.props.fetchSymptoms();
  }
  

  render() {
    return (
      <div class="container">
        <div>Keep track of your symptoms!</div>
        <br />
      </div>
    );
  }
}

export default connect(null, { fetchSymptoms })(SymptomsContainer);
