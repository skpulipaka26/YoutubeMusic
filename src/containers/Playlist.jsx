import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Playlist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };
    }

    toggleExpand() {
        this.setState({
            expanded: !this.state.expanded
        });
    }

    render() {
        return (
            <div
                onClick={() => {
                    if (this.state.expanded) {
                        return;
                    }
                    this.toggleExpand();
                }}
                style={{
                    transition: 'height 0.5s',
                    height: this.state.expanded ? 'calc(100vh - 80px)' : '50px'
                }}>
                <hr />
                <div className="row">
                    {this.state.expanded && (<div className="col-12">
                        <button
                            onClick={() => this.toggleExpand()}
                            type="button" className="close" aria-label="Close">
                            <span
                                style={{ fontSize: '1.75rem' }}
                                aria-hidden="true">&times;</span>
                        </button>
                    </div>)}
                    <div className="col-12">

                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = ({ player }) => {
    return player;
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({}, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Playlist);