import React from "react";
import { connect } from "react-redux";

class Counter extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {
            value: '',
            characters: 0
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            value: '', 
            characters: this.state.characters + this.state.value.length
        });
      };
    

  render() {
    return (
        <div class="container">
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label> Title: </label>
            <input
              type="text"
              class="form-control"
              value={this.state.value}
              onChange={(event) => this.setState({value: event.target.value}) }
            //   {(value) => this.setState({value: value.target.value}) }
              name="title"
            />
             </div>
            <input class="button" type="submit" value="Click me" />
          </form>
          <b>Characters:</b> {this.state.characters} <br />
        </div>
    );
  }
}

export default Counter; 
