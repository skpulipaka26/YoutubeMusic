import React, { Component } from 'react';
import { push } from 'connected-react-router';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addSongToPlaylist, setupCurrentPlayingPlayer } from '../actions/player';
import { extractYoutubeVideo } from '../actions/youtube-extractor';

import '../css/song.css';

class Song extends Component {

    async onCard() {
        const song = this.props.song;
        const extractorData = await this.props.extractYoutubeVideo(song.videoId);
        this.props.push(`/related/${extractorData.metadata.videoId}`);
    }

    async onTogglePlay() {
        const song = this.props.song;
        const currentPlaying = this.props.player.currentPlaying;
        if (currentPlaying.videoId) {
            if (currentPlaying.videoId === song.videoId) {
                currentPlaying.playing ? currentPlaying.player.pause() : currentPlaying.player.play();
                return;
            }
            currentPlaying.player.stop();
        }
        const extractorData = await this.addSongToPlaylist();
        const player = await this.props.setupCurrentPlayingPlayer(extractorData);
        player.play();
    }

    async addSongToPlaylist(navigate = false) {
        const song = this.props.song;
        if (navigate) {
            this.props.push('/playlist');
        }
        return await this.props.addSongToPlaylist(song);
    }

    render() {
        const song = this.props.song;
        const thumbnail = song.thumbnail;
        const currentPlaying = this.props.player.currentPlaying;
        const iconStyles = {
            fontSize: '1.5rem',
            margin: '0 0.5rem',
            cursor: 'pointer'
        };
        return (
            <div
                onClick={() => this.onCard()}
                className="card" style={{ cursor: 'pointer' }}>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <img
                            className="img-fluid mr-3"
                            style={{ width: '5rem' }}
                            src={thumbnail.url}
                            alt={song.title} />
                        <p className="m-0 p-0">{song.title}</p>
                    </div>
                    {!this.props.hideActions && (
                        <div className="d-flex">
                            <ion-icon
                                onClick={(event) => {
                                    event.stopPropagation();
                                    this.onTogglePlay();
                                }}
                                name={currentPlaying.videoId === song.videoId && currentPlaying.playing ? 'pause' : 'play'} style={iconStyles} />
                            <ion-icon
                                onClick={(event) => {
                                    event.stopPropagation();
                                    this.addSongToPlaylist();
                                }}
                                name="add" style={iconStyles} />
                        </div>
                    )}
                </div>
            </div>
        );
    }
};

const mapStateToProps = ({ player }) => {
    return {
        player: player
    };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        addSongToPlaylist,
        setupCurrentPlayingPlayer,
        extractYoutubeVideo,
        push
    }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Song);