
import React from 'react'; 
import { connect } from 'react-redux'

const SymptomsList = ({ symptoms }) => { 
  return (
    <div>
     {symptoms.map(symptom => <ul><li key={symptom.id}> 
         {symptom.title} 
         {symptom.severity}
         {symptom.notes}
         </li></ul>)}
    </div>
  )
}
 
//this makes symptom obj avaible as prop

const mapStateToProps = state => {
    return { symptoms: state.symptoms}
}

export default connect(mapStateToProps)(SymptomsList);