import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Redirect } from 'react-router-dom';

import { extractYoutubeVideo } from '../actions/youtube-extractor';

import Song from './Song';

class Related extends Component {

    render() {
        const videoId = this.props.match.params.id;
        const searchData = this.props.searchData;
        const selectedSong = searchData.selectedSong;
        if (!videoId || !selectedSong) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <div className="row">
                    <div className="col-12 mt-2">
                        <Song song={selectedSong} />
                        <hr />
                    </div>
                    {searchData.relatedSearches
                        .map(video => {
                            return (
                                <div className="col-12 my-2" key={video.videoId}>
                                    <Song song={video} />
                                </div>
                            );
                        })}
                </div>
            </div>
        );
    }

}

const mapStateToProps = ({ youtube, player: { currentPlaying: { player } } }) => {
    return {
        searchData: youtube,
        currentPlayingPlayer: player
    };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        extractYoutubeVideo
    }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Related);