import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';
import { ITrack } from '../../Interfaces/ITrack';

interface IPlaylist {
    playlistName: string;
    playlistTracks: ITrack[];

    onRemove(track: ITrack): void;
}

export default function Playlist(props: IPlaylist) {
    return (
        <div className="Playlist">
            <input defaultValue={'New Playlist'} />
            <TrackList trackList={props.playlistTracks} onRemove={(track) => props.onRemove(track)} isRemoval={true} />
            <button className="Playlist-save"> SAVE TO SPOTIFY</button>
        </div>
    );
}
