import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Playlist extends Component {

    render() {
        return (
            <div>
                some shit bro
            </div>);
    }

}

const mapStateToProps = ({ player }) => {
    return player;
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({}, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Playlist);