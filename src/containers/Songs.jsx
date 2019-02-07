import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Song from '../components/Song';

class Songs extends Component {

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        const songs = this.props.songs;
        return (
            <div>
                {songs.map(song => <Song {...song} />)}
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return { ...state };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({}, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Songs);