import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home} from './Components/Home';
import {Projects} from './Components/Projects';
import {Contact} from './Components/Contact';
import {NoMatch} from './Components/NoMatch';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
