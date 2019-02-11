import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { handleSongPlay } from '../actions/player';
import { setSelectedSong } from '../actions/youtube';

import Song from '../components/Song';
import Bars from '../components/Bars';

class Songs extends Component {

    onSelectSong(song) {
        this.props.setSelectedSong(song);
        this.props.handleSongPlay(song);
        window.scrollTo(0, 0);
    }

    render() {
        const videoId = this.props.match.params.id;
        const searchData = this.props.searchData;
        const selectedSong = searchData.selectedSong;
        if (!videoId || !selectedSong) {
            return <Redirect to="/" />
        }
        const currentPlaying = this.props.currentPlaying;
        const seek = currentPlaying.seek;
        // const currPlayingSongStatus = currPlayingPlayer ? currPlayingPlayer.playing() : false;
        const currPlayingSongStatus = currentPlaying.playing;
        return (
            <div>
                <div className="row mt-3"
                    style={{
                        position: 'sticky',
                        top: '4rem',
                        zIndex: 1,
                        backgroundColor: '#ffff'
                    }} >
                    <div className="col-12">
                        <div className="card my-2" style={{ cursor: 'pointer' }}
                            onClick={() => this.onSelectSong(selectedSong)}  >
                            <div className="d-flex align-items-center">
                                <img
                                    className="img-fluid mr-3"
                                    src={selectedSong.thumbnail.url}
                                    alt={selectedSong.title} />
                                <p className="m-0 p-0 text-truncate">{selectedSong.title}</p>
                            </div>
                        </div>
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

const mapStateToProps = ({ youtube, player }) => {
    return {
        searchData: youtube,
        playlist: player.playlist,
        currentPlaying: player.currentPlaying
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