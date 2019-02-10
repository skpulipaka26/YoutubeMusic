import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Player extends Component {

    togglePlayer() {
        const player = this.props.player;
        const currentPlayerObj = player.currentPlaying.howlPlayer;
        currentPlayerObj.playing() ? currentPlayerObj.pause() : currentPlayerObj.play();
    }

    render() {
        return <div></div>;
        // const player = this.props.player;
        // const currentPlayingMetadta = player.currentPlaying.metadata;
        // const currentPlayerObj = player.currentPlaying.howlPlayer;
        // return (
        //     currentPlayingMetadta && (
        //         <div className="container py-3">
        //             <div className="d-flex row align-items-center justify-content-between">
        //                 <div className="d-flex col-6 align-items-center">
        //                     <img
        //                         className="img-fluid mr-3"
        //                         style={{ width: '5rem' }}
        //                         src={currentPlayingMetadta.thumbnail.url}
        //                         alt={currentPlayingMetadta.title} />
        //                     <p className="m-0 p-0 text-truncate">{currentPlayingMetadta.title}</p>
        //                 </div>
        //                 <div className="d-flex col-6 justify-content-end">
        //                     <ion-icon name="rewind" style={{ fontSize: '2rem', marginRight: '0.5rem', cursor: 'pointer' }}></ion-icon>
        //                     <ion-icon
        //                         onClick={() => this.togglePlayer()}
        //                         name={currentPlayerObj && currentPlayerObj.playing() ? 'pause' : 'play'}
        //                         style={{ fontSize: '2rem', cursor: 'pointer' }}></ion-icon>
        //                     <ion-icon name="fastforward" style={{ fontSize: '2rem', marginLeft: '0.5rem', cursor: 'pointer' }}></ion-icon>
        //                 </div>
        //             </div>
        //         </div>
        //     )
        // );
    }
}

const mapStateToProps = ({ player }) => {
    return {
        player: player
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({}, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Player);