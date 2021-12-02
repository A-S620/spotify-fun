import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';
import { ITrack } from '../../Interfaces/ITrack';

interface IPlaylist {
    playlistName: string;
    playlistTracks: ITrack[];
    onNameChange: (name: string) => void;

    onSave(tracks: ITrack[]): void;

    onRemove(track: ITrack): void;
}

export default function Playlist(props: IPlaylist) {
    return (
        <div className="Playlist">
            <input
                name={'Playlist Name'}
                defaultValue={'New Playlist'}
                onChange={(e) => {
                    props.onNameChange(e.target.value);
                }}
            />
            <TrackList trackList={props.playlistTracks} onRemove={(track) => props.onRemove(track)} isRemoval={true} />
            <button className="Playlist-save" onClick={() => props.onSave(props.playlistTracks)}>
                {' '}
                SAVE TO SPOTIFY
            </button>
        </div>
    );
}
