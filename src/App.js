import React, { Component } from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchVideos } from './actions/videos';

import './App.css';

import Layout from './components/Layout';
import Video from './components/Video';

class App extends Component {

  componentDidMount() {
    this.props.fetchVideos('pandu pandu erra pandu');
  }

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

const mapStateToProps = ({ videos }) => {
  return {
    ...videos
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchVideos,
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);