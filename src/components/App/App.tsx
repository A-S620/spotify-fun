import React, { useState } from 'react';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';
import SearchBar from '../SearchBar/SearchBar';
import { ITrack } from '../../Interfaces/ITrack';
import { IPlaylist } from '../../Interfaces/IPlaylist';

require('dotenv').config();

interface IState {
    searchResults: ITrack[];
    playlist: IPlaylist;
}

export default function App() {
    const [searchResults, setSearchReults] = useState<ITrack[]>([
        { name: 'Blue Side (Outro)', artist: 'j-hope', album: 'Hope World', id: '1Blue' },
    ]);
    const [playlistName, setPlaylistName] = useState<string>('Just for fun');
    const [playlistTracks, setPlaylistTracks] = useState<ITrack[]>([
        {
            name: 'My Universe',
            artist: 'Coldplay',
            album: 'My Universe',
            id: '1MyUni',
        },
    ]);
    const addTrack = (track: ITrack) => {
        if (playlistTracks.filter((playlistTrack) => playlistTrack.id === track.id).length === 0) {
            setPlaylistTracks([...playlistTracks, track]);
        }
    };
    const removeTrack = (track: ITrack) => {
        setPlaylistTracks(playlistTracks.filter((playlistTrack) => playlistTrack.id !== track.id));
    };
    return (
        <div>
            <h1>
                <span className="highlight">Spotify Fun</span>
            </h1>
            <div className="App">
                <SearchBar />
                <div className="App-playlist">
                    <SearchResults
                        searchResults={searchResults}
                        onAdd={(track) => {
                            addTrack(track);
                        }}
                    />
                    <Playlist
                        playlistName={playlistName}
                        playlistTracks={playlistTracks}
                        onRemove={(track) => {
                            removeTrack(track);
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
