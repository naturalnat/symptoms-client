//local state is component state; isolated and local to component

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
    this.setState({
      title: "",
      severity: "",
      notes: "",
    });
    if (this.state['title'] !== "" && this.state['severity'] !== "" && this.state['notes'] !== "" )
    {
      this.props.history.push('/'); 
    }
  };
  
  // handleError = () => {
  //   if (this.props.error) {
  //     return (
  //       <div className="error"> {this.props.error}</div>
  //     )
  //   }
  // }

  render() {
    return (
   
      //handlesubmit calls action that dispatches new obj to dispatch to update store state; action needs to post req to api to persist to db
      <div class="container">
       <form onSubmit={this.handleSubmit}>
       <div class="form-group">
        <label> Title: </label>
        <input
          type="text"
          class="form-control"
          value={this.state.title}
          onChange={this.handleChange}
          name="title"
        />
        </div>
        <div class="form-group">
        <label> Severity: </label>
        <input
          type="number"
          min="1" max="10"
          class="form-control"
          value={this.state.severity}
          onChange={this.handleChange}
          name="severity"
        />
        <small id="help" class="form-text text-muted">Please enter a value from 1-10 for severity.</small>

        </div>
        <div class="form-group">        
        <label> Notes: </label>
        <input
          type="text"
          class="form-control"
          value={this.state.notes}
          onChange={this.handleChange}
          name="notes"
        />
        <br />
        <input class="btn btn-info" type="submit" value="Enter Symptoms" />
      </div>
      </form>
      </div>
    );
  }
}


// const mapStateToProps = (state) => {
//   return { error: state.error };
// };

export default connect(null, { addSymptom })(SymptomsForm);
