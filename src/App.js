import React, { Component } from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

import Layout from './components/Layout';
import Video from './components/Video';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/video" component={Video}></Route>
            <Redirect exact to="/video"></Redirect>
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
