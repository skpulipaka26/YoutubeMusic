import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Song from '../components/Song';

import { extractYoutubeVideo } from '../actions/youtube-extractor';
import { setCurretPlaying } from '../actions/player';

class Songs extends Component {

    onSelectYoutubeVideo(song) {
        this.props.extractYoutubeVideo(song.id.videoId).then(res => {
            const format = res.info.formats[0];
            this.props.setCurretPlaying({
                metadata: song,
                extractorData: format
            });
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
                                <Song {...song} onSelect={(song) => this.onSelectYoutubeVideo(song)} />
                            </div>
                        );
                    })}
                </div>
                <div className="row">
                    {relatedVideos.length > 0 && (<h6 className="font-weight-bold m-0 p-0 ml-3">Related Results</h6>)}
                    {relatedVideos.map((song) => {
                        return (
                            <div key={song.etag} className="col-12">
                                <Song {...song} onSelect={(song) => this.onSelectYoutubeVideo(song)} />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        extractYoutubeVideo,
        setCurretPlaying
    }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Songs);