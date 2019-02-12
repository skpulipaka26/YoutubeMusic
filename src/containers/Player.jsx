import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Bars from '../components/Bars';

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
        const currentPlayerList = this.props.playlist.filter(player => player.videoId === videoId);
        if (!currentPlayerList.length) {
            return;
        }
        const currPlayer = currentPlayerList[0].howl;
        this.setState({
            initialized: true
        });
        currPlayer.play();
        setTimeout(() => currPlayer.pause(), 5000);
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