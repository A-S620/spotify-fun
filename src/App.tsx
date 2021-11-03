import React from 'react';
import logo from './logo.svg';
import './App.css';

require('dotenv').config();

function App() {
    console.log(process.env.REACT_APP_SPOTIFY_CLIENT_ID);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
                <p>Test - {process.env.REACT_APP_SPOTIFY_CLIENT_ID}</p>
            </header>
        </div>
    );
}

export default App;
