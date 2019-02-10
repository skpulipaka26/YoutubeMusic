import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { handleSongPlay } from '../actions/player';
import { setSelectedSong } from '../actions/youtube';

import Song from '../components/Song';

class Songs extends Component {

    onSelectSong(song) {
        this.props.setSelectedSong(song);
        this.props.handleSongPlay(song);
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
                <div className="row mt-3">
                    <div className="col-12">
                        <div
                            onClick={() => this.onSelectSong(selectedSong)}
                            className="card my-2" style={{ cursor: 'pointer' }}>
                            <div className="d-flex align-items-center">
                                <img
                                    className="img-fluid mr-3"
                                    src={selectedSong.thumbnail.url}
                                    alt={selectedSong.title} />
                                <p className="m-0 p-0 text-truncate">{selectedSong.title}</p>
                            </div>
                        </div>
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

const mapStateToProps = ({ youtube }) => {
    return {
        searchData: youtube
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