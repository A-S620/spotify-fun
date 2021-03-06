import React, { useState } from 'react';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';
import SearchBar from '../SearchBar/SearchBar';
import { ITrack } from '../../Interfaces/ITrack';

require('dotenv').config();

export default function App() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [searchResults, setSearchResults] = useState<ITrack[]>([
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

    const generatePlaylistURIOnSave = (tracks: ITrack[]): string[] => {
        return tracks.map((track: ITrack) => `spotify:track:${track.id}`);
    };

    const search = (searchTerm: string) => {
        console.log(searchTerm);
    };

    return (
        <div>
            <h1>
                <span className="highlight">Spotify Fun</span>
            </h1>
            <div className="App">
                <SearchBar onSearch={(searchTerm) => search(searchTerm)} />
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
                        onNameChange={(name) => {
                            setPlaylistName(name);
                        }}
                        onRemove={(track) => {
                            removeTrack(track);
                        }}
                        onSave={(tracks) => {
                            generatePlaylistURIOnSave(tracks);
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
