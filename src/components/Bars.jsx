import React from 'react';

import '../css/bars.css'

const Bars = (props) => {
    const playStatus = props.status;
    return (
        <div className="bar-c">
            <div id="bar-1" className={playStatus ? 'bar' : 'bar noAnim'}></div>
            <div id="bar-2" className={playStatus ? 'bar' : 'bar noAnim'}></div>
            <div id="bar-3" className={playStatus ? 'bar' : 'bar noAnim'}></div>
            <div id="bar-4" className={playStatus ? 'bar' : 'bar noAnim'}></div>
            <div id="bar-5" className={playStatus ? 'bar' : 'bar noAnim'}></div>
            <div id="bar-6" className={playStatus ? 'bar' : 'bar noAnim'}></div>
        </div>
    );
}

export default Bars;