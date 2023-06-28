import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from './Form';
import Sections from './Sections';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/section2">
          <Form useRefForm />
        </Route>
        <Route path="/section3">
          <Form useStateForm />
        </Route>
        <Route path="/">
          <Form />
          <Sections />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
