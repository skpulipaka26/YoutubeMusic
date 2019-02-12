import React from 'react';

import '../css/song.css'

const Song = (props) => {
    const song = props;
    const thumbnail = song.thumbnail;
    return (
        <div className="card" style={{ cursor: 'pointer' }}
            onClick={() => props.onSelect(song)} >
            <div className="d-flex align-items-center">
                <img
                    className="img-fluid mr-3"
                    style={{ width: '5rem' }}
                    src={thumbnail.url}
                    alt={song.title} />
                <p className="m-0 p-0 text-truncate">{song.title}</p>
            </div>
        </div>
    );
};

export default Song;