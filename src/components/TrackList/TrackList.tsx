import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

export default class TrackList extends React.Component<any, any> {
    render() {
        return (
            <div className="TrackList">
                <Track />
            </div>
        );
    }
}
