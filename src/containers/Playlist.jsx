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
            <div>
                <div className="row">
                    <div className="col-12 p-0">
                        <div
                            onClick={() => this.toggleExpand()}
                            style={{
                                border: '1px solid grey',
                                transition: 'height 0.5s',
                                height: this.state.expanded ? '100vh' : '5vh'
                            }}></div>
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