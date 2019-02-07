import React from 'react';

const Song = (props) => ({
    render() {
        const song = props;
        const snippet = song.snippet;
        const thumbnail = snippet.thumbnails.default;
        return (
            <div
                onClick={() => props.onSelect(song.id.videoId)}
                className="card my-2" style={{ cursor: 'pointer' }}>
                <div className="d-flex align-items-center">
                    <img
                        className="img-fluid mr-3"
                        style={{ width: '5rem' }}
                        src={thumbnail.url}
                        alt={snippet.title} />
                    <p className="m-0 p-0">{snippet.title}</p>
                </div>
            </div>
        );
    }
});

export default Song;