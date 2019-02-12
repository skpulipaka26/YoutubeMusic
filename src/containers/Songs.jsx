import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { handleSongPlay } from '../actions/player';
import { setSelectedSong } from '../actions/youtube';

import Song from '../components/Song';
import Player from './Player';

class Songs extends Component {

    async onSelectSong(song) {
        const currentPlayingPlayer = this.props.currentPlayingPlayer;
        if (currentPlayingPlayer && currentPlayingPlayer.playing()) {
            currentPlayingPlayer.stop();
        }
        window.scrollTo(0, 0);
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
                <Player videoId={videoId} />
                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-between align-items-center">
                        <h6 className="p-0 m-0 font-weight-bold"> RELATED</h6>
                        <div>
                            {/* TODO: Autoplay toggle button */}
                        </div>
                    </div>
                </div>
                <div className="row">
                    {searchData.relatedSearches
                        .map(video => {
                            return (
                                <div className="col-12" key={video.videoId}>
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