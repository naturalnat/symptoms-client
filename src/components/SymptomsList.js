import React from "react";
import { connect } from "react-redux";
import { deleteSymptom } from "../actions/symptomsAction";
import { Button } from '@material-ui/core';



const SymptomsList = ({ symptoms, deleteSymptom }) => {
  const handleDelete = (id) => {
    deleteSymptom(id);
  };

const cardStyle = {
  marginLeft: "10px", 
  marginTop: "10px",
  width: "22rem"
}

  return (
    <div class="row">
      {symptoms.map((symptom) => (
        <div class="card" style={cardStyle}>
          <div class="card-body" key={symptom.id}>
            {symptom.title} <br />
            Severity: {symptom.severity} <br />
            Notes: <br /> {symptom.notes} <br />
            <Button class="btn btn-warning" onClick={() => handleDelete(symptom.id)}>
              Delete Entry
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { symptoms: state.symptoms };
};

export default connect(mapStateToProps, { deleteSymptom })(SymptomsList);
