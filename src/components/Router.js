import React from 'react'; 
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import About from './About';
import SymptomsContainer from './SymptomsContainer';
import SymptomsList from './SymptomsList';

const Router = () => { 
  return (
<Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/about' component={About} />
    <Route exact path='/symptoms' component={SymptomsList} />
    <Route exact path='/newsymptom' component={SymptomsContainer} />

</Switch>
  )
}
export default Router;
