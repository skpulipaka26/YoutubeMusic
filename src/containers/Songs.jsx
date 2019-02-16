import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addSongToPlaylist } from '../actions/player';
import { setSelectedSong } from '../actions/youtube';

import Song from './Song';

class Songs extends Component {

    async onSelectSong(song) {
        const currentPlayingPlayer = this.props.currentPlayingPlayer;
        if (currentPlayingPlayer && currentPlayingPlayer.playing()) {
            currentPlayingPlayer.stop();
        }
        const selectedSong = await this.props.setSelectedSong(song);
        const player = await this.props.addSongToPlaylist(selectedSong);
        if (!player) {
            return;
        }
        player.howl.play();
    }

    render() {
        const videoId = this.props.match.params.id;
        const searchData = this.props.searchData;
        const selectedSong = searchData.selectedSong;
        if (!videoId || !selectedSong) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <div className="row">
                    <div className="col-12 mt-2">
                        <Song song={selectedSong} />
                        <hr />
                    </div>
                    {searchData.relatedSearches
                        .map(video => {
                            return (
                                <div className="col-12 my-2" key={video.videoId}>
                                    <Song song={video} />
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
        searchData: youtube,
        currentPlayingPlayer: player
    };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        addSongToPlaylist,
        setSelectedSong
    }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Songs);