//data + methods 

import React, { Component } from 'react'; 
import { connect } from 'react-redux'
import { fetchSymptoms } from '../actions/symptomsAction'
import SymptomsForm from './SymptomsForm'

class SymptomsContainer extends Component {

    componentDidMount() {
        this.props.fetchSymptoms()
    }


    render() {
        return ( 
            <div> 
            Symptoms
            <SymptomsForm/>
            </div>
        ); 
    }
} 

export default connect(null, { fetchSymptoms })(SymptomsContainer); 