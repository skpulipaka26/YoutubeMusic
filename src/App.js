import React, { Component } from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchVideos } from './actions/videos';

import './App.css';

import Layout from './components/Layout';
import Songs from './containers/Songs';
import Song from './components/Song';

class App extends Component {

  componentDidMount() {
    this.props.fetchVideos('pandu pandu erra pandu');
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/songs" component={Songs} />
            <Route exact path="/songs/:id" component={Song} />
            <Redirect exact to="/songs" />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ videos }) => {
  return {
    ...videos
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchVideos,
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);