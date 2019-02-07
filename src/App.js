import React, { Component } from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

import Layout from './components/Layout';
import Songs from './containers/Songs';

class App extends Component {

  componentDidMount() { }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/songs" component={Songs} />
            <Redirect exact to="/songs" />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;