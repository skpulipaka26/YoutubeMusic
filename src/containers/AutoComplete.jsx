import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, debounceTime, map, tap } from 'rxjs/operators';

import { autoComplete } from '../actions/autocomplete';

class AutoComplele extends Component {

    searchEvent$ = new BehaviorSubject('');

    constructor(props) {
        super(props);
        this.state = {
            filteredList: [],
            selectedResultIndex: 0,
            searchValue: ''
        };
    }

    componentDidMount() {
        this.searchEvent$.pipe(
            tap(e => this.setState({ ...this.state, searchValue: e.target ? e.target.value : '' })),
            map(e => e && e.target ? e.target.value.trim().toLowerCase() : ''),
            distinctUntilChanged(),
            debounceTime(100)
        ).subscribe(this.props.autoComplete);
    }

    onChange = e => {
        this.searchEvent$.next(e);
    }

    onKeyDown = e => {
        const keyCode = e.keyCode;
        switch (keyCode) {
            //enter key
            case 13:
                e.preventDefault();
                break;
            //up arrow
            case 38:
                break;
            //down arrow
            case 40:
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row w-100">
                    <div className="col-12">
                        <form className="form-inline d-flex justify-content-between">
                            <input className="form-control"
                                value={this.state.searchValue}
                                type="search" placeholder="Search" aria-label="Search"
                                style={{ flex: 1 }}
                                onChange={this.onChange}
                                onKeyDown={this.onKeyDown} />
                        </form>
                        {this.props.autocomplete.length > 0 && (
                            <ul className="list-group" style={{
                                position: 'absolute',
                                width: '100%',
                                border: '3px solid rgba(0,0,0,.125)',
                                borderTop: 'none',
                                backgroundColor: '#fff'
                            }}>
                                {this.props.autocomplete.map((listItem, index) => (
                                    <li key={index} className="list-group-item m-0"
                                        onClick={() => {
                                            this.setState({
                                                ...this.state,
                                                selectedResultIndex: index
                                            });
                                        }}
                                        style={{
                                            cursor: 'pointer',
                                            border: this.state.selectedResultIndex === index ? '1px solid rgba(0,0,0,.125)' : 'none'
                                        }}>
                                        {listItem}</li>

                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div >

        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        autoComplete
    }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AutoComplele);