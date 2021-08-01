import React from "react";
import { connect } from "react-redux";
import { deleteSymptom } from "../actions/symptomsAction";
import { Button } from '@material-ui/core';


const SymptomsList = ({ symptoms, deleteSymptom }) => {
  const handleDelete = (id) => {
    deleteSymptom(id);
  };

  return (
    <div>
      {symptoms.map((symptom) => (
        <ul>
          <li key={symptom.id}>
            {symptom.title} <br />
            Severity: {symptom.severity} <br />
            Notes: <br /> {symptom.notes} <br />
            <Button onClick={() => handleDelete(symptom.id)}>
              delete entry
            </Button>
          </li>
        </ul>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { symptoms: state.symptoms };
};

export default connect(mapStateToProps, { deleteSymptom })(SymptomsList);
