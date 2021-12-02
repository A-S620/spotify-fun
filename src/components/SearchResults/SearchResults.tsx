import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';
import { ITrack } from '../../Interfaces/ITrack';

interface ISearchResults {
    searchResults: ITrack[];

    onAdd(track: ITrack): void;
}

export default function SearchResults(props: ISearchResults) {
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <TrackList
                isRemoval={false}
                trackList={props.searchResults}
                onAdd={(track) => {
                    props.onAdd(track);
                }}
            />
        </div>
    );
}
