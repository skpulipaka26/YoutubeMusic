import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Howl, Howler } from 'howler';

import Song from '../components/Song';

import { extractYoutubeVideo } from '../actions/youtube-extractor';

class Songs extends Component {

    componentDidMount() { }

    onSelectYoutubeVideo(videoId) {
        Howler.unload();
        this.props.extractYoutubeVideo(videoId).then(res => {
            const howl = new Howl({
                src: [res.info.formats[0].url],
                volume: 0.5,
                html5: true
            });
            howl.play();
        });
    }

    render() {
        const songs = this.props.relatedYoutubeSearches;
        return (
            <div className="row">
                {songs.map((song) => {
                    return (
                        <div key={song.etag} className="col-12">
                            <Song {...song} onSelect={(id) => this.onSelectYoutubeVideo(id)} />
                        </div>
                    );
                })}
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return { ...state };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        extractYoutubeVideo
    }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Songs);