import React, { useState } from 'react';
import './SearchBar.css';

interface ISearchBar {
    onSearch(searchTerm: string): void;
}

export default function SearchBar(props: ISearchBar) {
    const [searchTerm, setSearchTerm] = useState<string>('');
    return (
        <div className="SearchBar">
            <input
                placeholder="Enter A Song, Album, or Artist"
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                }}
            />
            <button
                className="SearchButton"
                onClick={() => {
                    props.onSearch(searchTerm);
                }}
            >
                SEARCH
            </button>
        </div>
    );
}
