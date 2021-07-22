import React, { Component } from "react";
import { connect } from "react-redux";
import { addSymptom } from "../actions/symptomsAction";

class SymptomsForm extends Component {
  state = {
    title: "",
    severity: "",
    notes: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addSymptom(this.state);
  };

  render() {
    return (
      //handlesubmit calls action that dispatches new obj to dispatch to update store state; action needs to post req to api to persist to db
      <form onSubmit={this.handleSubmit}>
        <label> Title: </label>
        <input
          type="text"
          value={this.state.title}
          onChange={this.handleChange}
          name="title"
        />
        <br />
        <label> Severity: </label>
        <input
          type="text"
          value={this.state.severity}
          onChange={this.handleChange}
          name="severity"
        />
        <br />
        <label> Notes: </label>
        <input
          type="text"
          value={this.state.notes}
          onChange={this.handleChange}
          name="notes"
        />
        <br />
        <input type="submit" value="Enter Symptoms" />
      </form>
    );
  }
}

export default connect(null, { addSymptom })(SymptomsForm);
