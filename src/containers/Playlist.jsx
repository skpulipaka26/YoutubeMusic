import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Song from '../containers/Song';

class Playlist extends Component {

    queuePlaylist(player) {
        const playlist = this.props.playlist;
        const currPlayerIndex = playlist.findIndex(song => song.videoId === player.videoId);
        const nextSongIndex = currPlayerIndex + 1 > playlist.length ? 0 : currPlayerIndex + 1;
        console.log(nextSongIndex);
    }

    render() {
        return this.props.playlist.map(song => {
            return (
                <div className="my-2" key={song.videoId}>
                    <Song song={song} />
                </div>
            );
        });
    }
}

const mapStateToProps = ({ player: { playlist } }) => {
    return {
        playlist: playlist
    };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({}, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Playlist);