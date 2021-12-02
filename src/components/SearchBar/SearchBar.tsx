import React from 'react';
import './SearchBar.css';

interface ISearchBar {
    onSearch(searchTerm: string): void;
}

export default function SearchBar(props: ISearchBar) {
    return (
        <div className="SearchBar">
            <input
                placeholder="Enter A Song, Album, or Artist"
                onChange={(e) => {
                    props.onSearch(e.target.value);
                }}
            />
            <button className="SearchButton">SEARCH</button>
        </div>
    );
}
