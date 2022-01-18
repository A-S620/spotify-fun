import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';
import { ITrack } from '../../Interfaces/ITrack';

interface ITrackList {
    trackList: ITrack[];
    isRemoval: boolean;

    onRemove?: (track: ITrack) => void;

    onAdd?: (track: ITrack) => void;
}

export default function TrackList(props: ITrackList) {
    return (
        <div className="TrackList" id={'trackList'}>
            {props.trackList.map((track) => {
                return (
                    <Track
                        track={track}
                        onAdd={(track) => {
                            if (props.onAdd) {
                                props.onAdd(track);
                            }
                        }}
                        onRemove={(track) => {
                            if (props.onRemove) {
                                props.onRemove(track);
                            }
                        }}
                        isRemoval={props.isRemoval}
                    />
                );
            })}
        </div>
    );
}
