import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import NavigationBar from './Components/NavigationBar/NavigationBar';

function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
      <Container>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Projects" component={Projects}/>
            <Route exact path="/Contact" component={Contact}/>
            <Redirect from="/*" to="/"/>
          </Switch>
        </Router>
      </Container>
    </React.Fragment>
  );
}

export default App;
