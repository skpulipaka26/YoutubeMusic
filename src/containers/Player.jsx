import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Bars from '../components/Bars';
import Song from './Song';

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

    onProgress(e, player) {
        const ele = e.target;
        const x = e.pageX - ele.offsetLeft;
        const clickedAt = x / ele.offsetWidth;
        const duration = player.duration();
        const reqSeekValue = clickedAt * duration;
        if (player.playing()) {
            player.pause();
        }
        player.seek(reqSeekValue);
        player.play();
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
            <div className="row">
                <div className="col-12 p-0">
                    <div style={{ backgroundColor: 'white' }}>
                        {selectedSong.metadata && (
                            <div>
                                <Song song={selectedSong} hideActions={false} />
                                <div className="card-footer text-muted p-0 px-2">
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
                                    <div
                                        style={{ cursor: 'pointer' }}
                                        onClick={(event) => {
                                            event.persist();
                                            this.onProgress(event, currentPlaying.player);
                                        }}>
                                        <div className="progress" style={{ height: '0.25rem' }}>
                                            <div className="progress-bar bg-danger" role="progressbar"
                                                style={this.getProgress(seek, selectedSong.metadata.lengthSeconds)} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <ion-icon
                                            name={currPlayingSongStatus ? 'pause' : 'play'}
                                            style={{ fontSize: '2rem', cursor: 'pointer', marginRight: '0.5rem' }} onClick={() => this.onPlayer(selectedSong)} />
                                        <ion-icon
                                            name="volume-high"
                                            style={{ fontSize: '2rem', cursor: 'pointer', marginRight: '0.5rem' }} />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
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