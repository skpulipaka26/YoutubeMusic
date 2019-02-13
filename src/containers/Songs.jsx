import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { handleSongPlay } from '../actions/player';
import { setSelectedSong } from '../actions/youtube';

import Song from '../components/Song';

class Songs extends Component {

    async onSelectSong(song) {
        const currentPlayingPlayer = this.props.currentPlayingPlayer;
        if (currentPlayingPlayer && currentPlayingPlayer.playing()) {
            currentPlayingPlayer.stop();
        }
        const selectedSong = await this.props.setSelectedSong(song);
        const player = await this.props.handleSongPlay(selectedSong);
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
                    {searchData.relatedSearches
                        .map(video => {
                            return (
                                <div className="col-12 my-2" key={video.videoId}>
                                    <Song {...video} onSelect={(song) => this.onSelectSong(song)} />
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
        handleSongPlay,
        setSelectedSong
    }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Songs);