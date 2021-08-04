import React from "react";
import { connect } from "react-redux";
import { deleteSymptom } from "../actions/symptomsAction";
import { addFlag } from "../actions/symptomsAction";

import { Button } from "@material-ui/core";

const SymptomsList = ({ symptoms, deleteSymptom, addFlag }) => {
  const handleDelete = (id) => {
    deleteSymptom(id);
  };

  const handleFlag = (id) => {
    addFlag(id);
  };

  const cardStyle = {
    marginLeft: "10px",
    marginTop: "10px",
    width: "22rem",
  };

  return (
    <div class="row">
      {symptoms.map((symptom) => (
        <div class="card" style={cardStyle}>
          <div class="card-body" key={symptom.id}>
            <h5>{symptom.title}</h5>
            <b>Date:</b>{" "}
            {new Date(symptom.created_at).toLocaleString("en-US", {
              hour12: true,
            })}{" "}
            <br />
            <b>Severity:</b> {symptom.severity} <br />
            <b>Notes:</b> {symptom.notes} <br />
            {symptom.flag ? (
              <div>
                <b>Flag:</b>{" "}
                <span style={{ color: "red" }}>
                  Important <i class="fa fa-medkit" aria-hidden="true"></i>
                </span>
              </div>
            ) : (
              ""
            )}
            <Button
              class="btn btn-secondary"
              onClick={() => handleFlag(symptom.id)}
            >
            Flag
            </Button>
            &nbsp; &nbsp; 
            <Button
              class="btn btn-secondary"
              onClick={() => handleDelete(symptom.id)}
            >
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

export default connect(mapStateToProps, { deleteSymptom, addFlag })(
  SymptomsList
);
