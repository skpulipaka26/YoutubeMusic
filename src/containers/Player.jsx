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
        const videoId = this.props.videoId || this.props.selectedSong ? this.props.selectedSong.videoId : null;
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

    getProgress(seek, duration) {
        const progress = (seek * 100) / Number(duration);
        return {
            width: `${progress}%`
        };
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
        const selectedSong = this.props.selectedSong;
        const currentPlaying = this.props.currentPlaying;
        const seek = currentPlaying.seek;
        const currPlayingSongStatus = currentPlaying.playing;
        if (!selectedSong) {
            return <div></div>;
        }
        return (
            <div className="row mt-2">
                <div className="col-12 p-0">
                    <div style={{ backgroundColor: 'white' }}>
                        <Song {...selectedSong} onSelect={(song) => this.onPlayer(song)} />
                        {selectedSong.metadata && (
                            <div className="card-footer text-muted p-0 py-4 px-2">
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
                                <div>
                                    <div className="progress" style={{ height: '0.25rem' }}>
                                        <div className="progress-bar bg-danger" role="progressbar" style={this.getProgress(seek, selectedSong.metadata.lengthSeconds)} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <hr />
                </div>
            </div>

        );
    }
}

const mapStateToProps = ({ youtube: { selectedSong }, player }) => {
    return {
        selectedSong: selectedSong,
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