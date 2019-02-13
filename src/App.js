import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { history } from './store';

import './App.css';

import Layout from './components/Layout';
import Home from './containers/Home';
import Songs from './containers/Songs';
import Playlist from './containers/Playlist';

class App extends Component {

  componentDidMount() { }

  render() {
    return (
      <BrowserRouter>
        <ConnectedRouter history={history}>
          <Layout>
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/songs/:id" component={Songs} />
              <Route exact path="/playlist" component={Playlist} />
              <Redirect exact to="/home" />
            </Switch>
          </Layout>

        </ConnectedRouter>
      </BrowserRouter>
    );
  }
}

export default App;