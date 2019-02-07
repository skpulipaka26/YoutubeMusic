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
        const searches = this.props.youtube.searches || [];
        const relatedVideos = this.props.youtube.relatedSearches || [];
        return (
            <div>
                <div className="row">
                    {searches.slice(0, 1).map((song) => {
                        return (
                            <div key={song.etag} className="col-12">
                                <Song {...song} onSelect={(id) => this.onSelectYoutubeVideo(id)} />
                            </div>
                        );
                    })}
                </div>
                <hr />
                <div className="row">
                    {relatedVideos.length > 0 && (<h6 className="font-weight-bold m-0 p-0">Related Results</h6>)}
                    {relatedVideos.map((song) => {
                        return (
                            <div key={song.etag} className="col-12">
                                <Song {...song} onSelect={(id) => this.onSelectYoutubeVideo(id)} />
                            </div>
                        );
                    })}
                </div>
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