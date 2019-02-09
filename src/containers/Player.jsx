import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setCurrentHowlPlayer } from '../actions/player';

class Player extends Component {

    togglePlayer() {
        const player = this.props.player;
        const currentPlayerObj = player.currentPlaying.howlPlayer;
        currentPlayerObj.playing() ? currentPlayerObj.pause() : currentPlayerObj.play();
        this.props.setCurrentHowlPlayer(currentPlayerObj);
    }

    render() {
        const player = this.props.player;
        const currentPlayingMetadta = player.currentPlaying.metadata;
        const currentPlayerObj = player.currentPlaying.howlPlayer;
        return (
            currentPlayingMetadta && (
                <div style={{ padding: '0.85rem 0 0.5rem 0' }}>
                    <div className="container">
                        <div className="d-flex align-items-center justify-content-between">
                            <img
                                className="img-fluid mr-3"
                                style={{ width: '5rem' }}
                                src={currentPlayingMetadta.thumbnail.url}
                                alt={currentPlayingMetadta.title} />
                            <p className="m-0 p-0">{currentPlayingMetadta.title}</p>
                            <div className="d-flex">
                                <ion-icon name="rewind" style={{ fontSize: '2rem', marginRight: '0.5rem', cursor: 'pointer' }}></ion-icon>
                                <ion-icon
                                    onClick={() => this.togglePlayer()}
                                    name={currentPlayerObj && currentPlayerObj.playing() ? 'pause' : 'play'}
                                    style={{ fontSize: '2rem', cursor: 'pointer' }}></ion-icon>
                            <ion-icon name="fastforward" style={{ fontSize: '2rem', marginLeft: '0.5rem', cursor: 'pointer' }}></ion-icon>
                        </div>

                    </div>
                </div>
                </div >
            )
        );
    }
}

const mapStateToProps = ({ player }) => {
    return {
        player: player
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setCurrentHowlPlayer
    }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Player);