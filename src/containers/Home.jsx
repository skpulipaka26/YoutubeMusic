import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Song from '../components/Song';

import { extractYoutubeVideo } from '../actions/youtube-extractor';
import { setSelectedSong } from '../actions/youtube';

class Home extends Component {

    onSelectYoutubeVideo(song) {
        this.props.setSelectedSong(song);
        this.props.extractYoutubeVideo(song.videoId);
    }

    render() {
        const searches = this.props.youtube.searches || [];
        return (
            <div>
                <div className="row">
                    {searches.map((song) => {
                        return (
                            <div key={song.videoId} className="col-12">
                                <Song {...song} onSelect={(song) => this.onSelectYoutubeVideo(song)} />
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
        youtube: youtube
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        extractYoutubeVideo,
        setSelectedSong
    }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);