// //local state is component state; isolated and local to component
// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { fetchSymptoms } from "../actions/symptomsAction";
// import { editSymptom } from "../actions/symptomsAction";

// class SymptomsFormEdit extends React.Component {
//   componentDidMount() {
//     this.props.fetchSymptoms();
//   };


//   render() {
//     return (
//       <div class="container">
//       </div>
//     );
//   }
// }

// export default connect(null, null)(SymptomsContainer);




// class SymptomsFormEdit extends Component {
//   state = {
//     title: "",
//     severity: "",
//     notes: "",
//   };

//   handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.addSymptom(this.state);
//     this.setState({
//       title: "",
//       severity: "",
//       notes: "",
//     });
//     if (
//       this.state["title"] !== "" &&
//       this.state["severity"] !== "" &&
//       this.state["notes"] !== ""
//     ) {
//       this.props.history.push("/");
//     }
//   };

//   render() {

//     const { symptom } = this.props;
    
//     return (
//       //handlesubmit calls action that dispatches new obj to dispatch to update store state; action needs to post req to api to persist to db
//       <div className="container">
//         <form onSubmit={this.handleSubmit}>
//           <div className="form-group">
//             <label> Title: </label>
//             <input
//               type="text"
//               className="form-control"
//               value={this.state.symptom}
//               onChange={this.handleChange}
//               name="title"
//             />
//           </div>
//           <div className="form-group">
//             <label> Severity: </label>
//             <input
//               type="number"
//               min="1"
//               max="10"
//               className="form-control"
//               value={this.state.severity}
//               onChange={this.handleChange}
//               name="severity"
//             />
//             <small id="help" className="form-text text-muted">
//               Please enter a value from 1-10 for severity.
//             </small>
//           </div>
//           <div className="form-group">
//             <label> Notes: </label>
//             <input
//               type="text"
//               className="form-control"
//               value={this.state.notes}
//               onChange={this.handleChange}
//               name="notes"
//             />
//             <br />
//             <input className="btn btn-info" type="submit" value="Enter Symptoms" />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state, ownProps) => {
//   debugger;
//   return { symptomsList: state.symptoms };
// };

// export default connect(mapStateToProps, { editSymptom })(SymptomsFormEdit);
