import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Song from '../components/Song';

import { extractYoutubeVideo } from '../actions/youtube-extractor';
import { setCurrentPlayingMetadata } from '../actions/player';

class Songs extends Component {

    onSelectYoutubeVideo(song) {
        this.props.extractYoutubeVideo(song.id);
        this.props.setCurrentPlayingMetadata(song);
    }

    render() {
        const searches = this.props.youtube.searches || [];
        return (
            <div>
                <div className="row">
                    {searches.map((song) => {
                        return (
                            <div key={song.id} className="col-12">
                                <Song {...song} onSelect={(song) => this.onSelectYoutubeVideo(song)} />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

}

const mapStateToProps = ({youtube}) => {
    return {
        youtube: youtube
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        extractYoutubeVideo,
        setCurrentPlayingMetadata,
    }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Songs);