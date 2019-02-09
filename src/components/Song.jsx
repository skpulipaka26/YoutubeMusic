import React from 'react';

const Song = (props) => ({
    render() {
        const song = props;
        const thumbnail = song.thumbnail;
        return (
            <div
                onClick={() => props.onSelect(song)}
                className="card my-2" style={{ cursor: 'pointer' }}>
                <div className="d-flex align-items-center">
                    <img
                        className="img-fluid mr-3"
                        style={{ width: '5rem' }}
                        src={thumbnail.url}
                        alt={song.title} />
                    <p className="m-0 p-0">{song.title}</p>
                </div>
            </div>
        );
    }
});

export default Song;