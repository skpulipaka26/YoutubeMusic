import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Song from './Song';

import { extractYoutubeVideo } from '../actions/youtube-extractor';
import { setSelectedSong } from '../actions/youtube';
import { addSongToPlaylist } from '../actions/player';

class Home extends Component {

    onSelectYoutubeVideo(song) {
        const currentPlayingPlayer = this.props.currentPlayingPlayer;
        if (currentPlayingPlayer && currentPlayingPlayer.playing()) {
            currentPlayingPlayer.stop()
        }
        this.props.setSelectedSong(song);
        this.props.addSongToPlaylist(song);
        this.props.extractYoutubeVideo(song.videoId);
    }

    render() {
        const searches = this.props.youtube.searches || [];
        return (
            <div>
                <div className="row">
                    {searches.map((song) => {
                        return (
                            <div key={song.videoId} className="col-12 my-2">
                                <Song song={song} />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ youtube, player: { currentPlaying: { player } } }) => {
    return {
        youtube: youtube,
        currentPlayingPlayer: player
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        extractYoutubeVideo,
        setSelectedSong,
        addSongToPlaylist
    }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);