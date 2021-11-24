import React from 'react';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';
import SearchBar from '../SearchBar/SearchBar';

require('dotenv').config();

export default class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { searchResults: [] };
    }

    render() {
        return (
            <div>
                <h1>
                    <span className="highlight">Spotify Fun</span>
                </h1>
                <div className="App">
                    <SearchBar />
                    <div className="App-playlist">
                        <SearchResults searchResults={this.state.searchResults} />
                        <Playlist />
                    </div>
                </div>
            </div>
        );
    }
}
