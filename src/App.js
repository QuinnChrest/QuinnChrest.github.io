import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Projects" component={Projects}/>
        <Route exact path="/Contact" component={Contact}/>
        <Redirect from="/*" to="/"/>
      </Switch>
    </Router>
  );
}

export default App;
