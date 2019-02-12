import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Bars from '../components/Bars';
import Song from '../components/Song';

class Player extends Component {

    constructor(props) {
        super(props);
        this.state = {
            initialized: false
        };
    }

    componentDidUpdate() {
        const videoId = this.props.videoId;
        if (this.state.initialized || !videoId) {
            return;
        }
        this.startPlaying(videoId);
    }

    startPlaying(videoId) {
        const currentPlayerList = this.props.playlist.filter(player => {
            if (player.howl.playing()) {
                player.howl.stop();
            }
            return player.videoId === videoId;
        });
        if (!currentPlayerList.length) {
            return;
        }
        const currPlayer = currentPlayerList[0].howl;
        this.setState({
            initialized: true
        });
        currPlayer.play();
    }

    onPlayer(song) {
        const videoId = song.videoId;
        const currentPlayerList = this.props.playlist.filter(player => player.videoId === videoId);
        if (!currentPlayerList.length) {
            return;
        }
        const currPlayer = currentPlayerList[0].howl;
        currPlayer.playing() ? currPlayer.pause() : currPlayer.play();
    }

    render() {
        const searchData = this.props.searchData;
        const selectedSong = searchData.selectedSong;
        const currentPlaying = this.props.currentPlaying;
        const seek = currentPlaying.seek;
        const currPlayingSongStatus = currentPlaying.playing;
        if (!selectedSong) {
            return <div></div>;
        }
        return (
            <div className="row mt-3"
                style={{
                    position: 'sticky',
                    top: '4rem',
                    zIndex: 1,
                    backgroundColor: '#ffff'
                }} >
                <div className="col-12">
                    <Song {...selectedSong} onSelect={(song) => this.onPlayer(song)} />
                    {selectedSong.metadata && (
                        <div className="card-footer text-muted">
                            <div className="d-flex align-items-center justify-content-between">
                                <p className="p-0 m-0">
                                    {selectedSong.metadata.author}
                                </p>
                                <div className="d-flex align-items-baseline">
                                    <p className="p-0 m-0 mr-2">
                                        {Math.floor(seek / 60)}:{Math.floor(seek % 60)} / {Math.floor(selectedSong.metadata.lengthSeconds / 60)}:{selectedSong.metadata.lengthSeconds % 60}
                                    </p>
                                    <Bars status={currPlayingSongStatus} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        );
    }
}

const mapStateToProps = ({ youtube, player }) => {
    return {
        searchData: youtube,
        playlist: player.playlist,
        currentPlaying: player.currentPlaying
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({}, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Player);