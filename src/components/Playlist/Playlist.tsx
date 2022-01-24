import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';
import { ITrack } from '../../Interfaces/ITrack';
import AnalysisDialog from '../AnalysisDailog/AnalysisDialog';

interface IPlaylist {
    playlistName: string;
    playlistTracks: ITrack[];
    onNameChange: (name: string) => void;

    onSave(tracks: ITrack[]): void;

    onRemove(track: ITrack): void;
}

export default function Playlist(props: IPlaylist) {
    return (
        <div className="Playlist" id={'songs-to-analyse'}>
            <h2>Songs to Analyse</h2>
            <TrackList trackList={props.playlistTracks} onRemove={(track) => props.onRemove(track)} isRemoval={true} />
            <AnalysisDialog />
        </div>
    );
}
