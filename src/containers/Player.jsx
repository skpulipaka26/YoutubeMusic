import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Howl, Howler } from 'howler';

class Player extends Component {

    componentWillReceiveProps() {
        const player = this.props.player;
        const currentPlayingExtractorData = player.extractorData;
        if (currentPlayingExtractorData) {
            console.log(currentPlayingExtractorData);
            Howler.unload();
            const howl = new Howl({
                src: [currentPlayingExtractorData.url],
                volume: 1,
                html5: true
            });
            howl.play();
        }
    }

    render() {
        const player = this.props.player;
        const currentPlayingMetadta = player.currentPlaying.metadata;
        return (
            currentPlayingMetadta && (
                <div>
                    <div className="container">
                        <div className="d-flex align-items-center">
                            <img
                                className="img-fluid mr-3"
                                style={{ width: '5rem' }}
                                src={currentPlayingMetadta.snippet.thumbnails.default.url}
                                alt={currentPlayingMetadta.snippet.title} />
                            <p className="m-0 p-0">{currentPlayingMetadta.snippet.title}</p>
                        </div>
                    </div>
                </div>
            )
        );
    }

}

const mapStateToProps = (state) => state;

const mapDispatchToProps = dispatch => {
    return bindActionCreators({}, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Player);