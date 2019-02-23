import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { push } from 'connected-react-router';

import Bars from '../components/Bars';

class Player extends Component {

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
        if (player.playing()) {
            player.pause();
        }
        const reqSeekValue = clickedAt * duration;
        player.seek(reqSeekValue);
        player.play();
    }

    render() {
        const playlist = this.props.playlist;
        const currentPlaying = this.props.currentPlaying;
        const seek = currentPlaying.seek;
        const currPlayingSongStatus = currentPlaying.playing;
        return playlist
            .filter(song => currentPlaying.videoId && song.videoId === currentPlaying.videoId)
            .map(song => {
                return (
                    <div
                        onClick={() => this.props.push('/playlist')}
                        key={song.videoId}
                        className="row my-2">
                        <div className="col-12">
                            <div className="card-footer text-muted p-0 px-2">
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="p-0 m-0 text-truncate">
                                        {song.title}
                                    </p>
                                    <div className="d-flex align-items-baseline">
                                        <p className="p-0 m-0 mr-2">
                                            {Math.floor(seek / 60)}:{Math.floor(seek % 60)} / {Math.floor(song.lengthSeconds / 60)}:{song.lengthSeconds % 60}
                                        </p>
                                        <Bars status={currPlayingSongStatus} />
                                    </div>
                                </div>
                                <div
                                    style={{ cursor: 'pointer' }}
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        event.persist();
                                        this.onProgress(event, currentPlaying.player);
                                    }}>
                                    <div className="progress" style={{ height: '0.5rem' }}>
                                        <div className="progress-bar bg-danger" role="progressbar"
                                            style={this.getProgress(seek, song.lengthSeconds)} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            });
    }
}

const mapStateToProps = ({ player }) => {
    return {
        playlist: player.playlist,
        currentPlaying: player.currentPlaying
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ push }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Player);