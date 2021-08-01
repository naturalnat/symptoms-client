//fetch symptoms from api

export const fetchSymptoms = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/symptoms")
      .then((res) => res.json())
      .then((symptoms) =>
        dispatch({ type: "FETCH_SYMPTOMS", payload: symptoms })
      );
  };
};

export const addSymptom = (symptom) => {
  return (dispatch) => {
    fetch("http://localhost:3000/symptoms", {
      method: "POST",
      body: JSON.stringify(symptom),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.status == 422) {
          alert("Please fill out all fields");
        }
        return res.json();
      })
      .then((symptoms) =>
        dispatch({ type: "ADD_SYMPTOMS", payload: symptoms })
      );
  };
};

export const deleteSymptom = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/symptoms/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((symptom) =>
        dispatch({ type: "DELETE_SYMPTOM", payload: symptom })
      );
  };
};
