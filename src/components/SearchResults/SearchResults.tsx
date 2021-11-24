import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';

export default class SearchResults extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList searchResults={this.props.searchResults} />
            </div>
        );
    }
}
