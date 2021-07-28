import React from "react";
import { connect } from "react-redux";
import { deleteSymptom } from "../actions/symptomsAction";

const SymptomsList = ({ symptoms, deleteSymptom }) => {
  const handleDelete = (id) => 
  {
    deleteSymptom(id)
  }

  return (
    <div>
      {symptoms.map((symptom) => (
        <ul>
          <li key={symptom.id}>
            {symptom.title}
            {symptom.severity}
            {symptom.notes}
            <button onClick={() => handleDelete(symptom.id)}>DELETE</button> 
          </li>
        </ul>
      ))}
    </div>
  );
};

//this makes symptom obj avaible as prop

const mapStateToProps = (state) => {
  return { symptoms: state.symptoms };
};

export default connect(mapStateToProps, {deleteSymptom})(SymptomsList);
