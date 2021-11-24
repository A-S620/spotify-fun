import React from 'react';
import './SearchBar.css';

export default class SearchBar extends React.Component<any, any> {
    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" />
                <button className="SearchButton">SEARCH</button>
            </div>
        );
    }
}
