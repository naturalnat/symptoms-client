import React from "react";
import { connect } from "react-redux";
import { deleteSymptom } from "../actions/symptomsAction";
import { addFlag } from "../actions/symptomsAction";
import { Link } from "react-router-dom";


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
    <div className="row">
      {symptoms.map((symptom) => (
        <div className="card" style={cardStyle}>
          <div className="card-body" key={symptom.id}>
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
                <span style={{ color: "red" }}>
                  Important <i className="fa fa-medkit" aria-hidden="true"></i>
                </span>
              </div>
            ) : (
              ""
            )}
            <button
              className="btn btn-secondary"
              onClick={() => handleFlag(symptom.id)}>
              Flag
            </button>

            &nbsp; &nbsp;
            
            <button
              className="btn btn-secondary"
              onClick={() => handleDelete(symptom.id)}>
              Delete Entry
              </button>

            &nbsp; &nbsp;

            {/* <Link to={`/editsymptom/${symptom.id}`} id={symptom.id}> <button
              className="btn btn-secondary">
              Edit
            </button>
            </Link>  */}

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
