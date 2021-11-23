import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';

require('dotenv').config();

function App() {
    return (
        <div>
            <h1>
                <span className="highlight">Spotify Fun</span>
            </h1>
            <div className="App">
                <SearchBar />
                <div className="App-playlist">Meep</div>
            </div>
        </div>
    );
}

export default App;
