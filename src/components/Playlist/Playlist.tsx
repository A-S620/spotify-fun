import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

export default class Playlist extends React.Component<any, any> {
    render() {
        return (
            <div className="Playlist">
                <input defaultValue={'New Playlist'} />
                <TrackList />
                <button className="Playlist-save"> SAVE TO SPOTIFY</button>
            </div>
        );
    }
}
