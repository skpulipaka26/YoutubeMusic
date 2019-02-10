import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, debounceTime, map, tap } from 'rxjs/operators';

import { autoComplete, SET_AUTOCOMPLETE } from '../actions/autocomplete';
import { fetchYoutubeMetadata } from '../actions/youtube';

class AutoComplele extends Component {

    searchEvent$ = new BehaviorSubject('');

    constructor(props) {
        super(props);
        this.state = {
            selectedSearch: null,
            searchValue: ''
        };
    }

    componentDidMount() {
        this.searchEvent$.pipe(
            tap(e => this.setState({
                ...this.state,
                searchValue: e.target ? e.target.value : '',
                selectedSearch: e.target ? e.target.value : ''
            })),
            map(e => e && e.target ? e.target.value.trim().toLowerCase() : ''),
            distinctUntilChanged(),
            debounceTime(100)
        ).subscribe(this.props.autoComplete);
    }

    async asyncSetState(value) {
        return new Promise(resolve => this.setState(value, resolve));
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
                this.onSelectSearch();
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

    onSelectSearch() {
        const queryString = this.state.selectedSearch;
        this.props.fetchYoutubeMetadata(queryString);
        this.props.setAutocompleteList([]);
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
                                marginLeft: '-15px',
                                backgroundColor: '#fff',
                                zIndex: 1
                            }}>
                                {this.props.autocomplete.map((listItem, index) => (
                                    <li key={index} className="list-group-item m-0"
                                        onClick={async () => {
                                            await this.asyncSetState({ selectedSearch: listItem, searchValue: listItem });
                                            this.onSelectSearch();
                                        }}
                                        style={{
                                            cursor: 'pointer',
                                            border: this.state.selectedSearch === listItem ? '1px solid rgba(0,0,0,.125)' : 'none'
                                        }}>
                                        {listItem}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ autocomplete }) => {
    return {
        autocomplete: autocomplete
    };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            autoComplete,
            fetchYoutubeMetadata,
            setAutocompleteList: list => {
                return dispatch({
                    type: SET_AUTOCOMPLETE,
                    payload: list
                });
            }
        },
        dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AutoComplele);