import React from 'react'; 
import Router from './components/Router'
import SymptomsContainer from './components/SymptomsContainer';
import Nav from './components/Nav';

const App = () => { 
  return (
    <div>
      <Nav />
      <SymptomsContainer />
     <Router/> 
    </div>
  )
}
export default App;