//fetch symptoms from api
// import axios from 'axios'

export const fetchSymptoms = () => {
  return (dispatch) => {
    fetch("/symptoms")
      .then((res) => res.json())
      .then((symptoms) =>
        dispatch({ type: "FETCH_SYMPTOMS", payload: symptoms })
      );
  };
};

export const editSymptom = (id) => {
  return (dispatch) => {
    fetch(`/symptoms/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((symptom) =>
        dispatch({ type: "DELETE_SYMPTOM", payload: symptom })
      );
  };
};

export const addSymptom = (symptom) => {
  return (dispatch) => {
    fetch("/symptoms", {
      method: "POST",
      body: JSON.stringify(symptom),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.status === 422) {
          alert("Please fill out all fields");
        }
        return res.json();
      })
      .then((symptoms) =>
        dispatch({ type: "ADD_SYMPTOMS", payload: symptoms })
      );
  };
};

//was trying to work on error handling with axios: 

// export const addSymptom = (symptom) => {
//   return (dispatch) => {
//     axios("/symptoms", {
//       method: "POST",
//       body: JSON.stringify(symptom),
//       headers: { "Content-Type": "application/json" },
//     })
      // .then((res) => {
      //   if (res.status == 422) {
      //     throw new Error({message: "Can't be blank"})  
      //   //   alert("Please fill out all fields");
      //   }
      //   return res.json();
      // })
//       .then((symptoms) =>
//         dispatch({ type: "ADD_SYMPTOMS", payload: symptoms })
//       ).catch(e => {
//         dispatch({ type: "ERROR", payload: "can't be blank"})
      
//       })
//   };
// };

export const addFlag = (id) => {
  return (dispatch) => {
    fetch(`/symptoms/${id}/addflag`, {
      method: "POST",
      //body: JSON.stringify(symptom),
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => res.json())
    .then((symptom) =>
      dispatch({ type: "UPDATE_SYMPTOM", payload: symptom })
    );
};
};

export const deleteSymptom = (id) => {
  return (dispatch) => {
    fetch(`/symptoms/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((symptom) =>
        dispatch({ type: "DELETE_SYMPTOM", payload: symptom })
      );
  };
};
