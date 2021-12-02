import React from 'react';
import './Track.css';
import { ITrack } from '../../Interfaces/ITrack';

interface ITrackComponent {
    track: ITrack;
    isRemoval: boolean;

    onRemove?: (track: ITrack) => void;

    onAdd?: (track: ITrack) => void;
}

export default function Track(props: ITrackComponent) {
    function addTrack(track: ITrack) {
        if (props.onAdd) {
            props.onAdd(track);
        }
    }

    function onRemove(track: ITrack) {
        if (props.onRemove) {
            props.onRemove(track);
        }
    }

    function renderAction() {
        if (props.isRemoval) {
            return '-';
        }
        return '+';
    }

    return (
        <div className="Track" key={props.track.id}>
            <div className="Track-information">
                <h3>{props.track.name}</h3>
                <p>
                    {props.track.artist} | {props.track.album}
                </p>
            </div>
            <button
                className="Track-action"
                onClick={(e) => {
                    if (props.isRemoval) {
                        onRemove({
                            id: props.track.id,
                            name: props.track.name,
                            artist: props.track.artist,
                            album: props.track.album,
                        });
                    } else {
                        addTrack({
                            id: props.track.id,
                            name: props.track.name,
                            artist: props.track.artist,
                            album: props.track.album,
                        });
                    }
                }}
            >
                {renderAction()}
            </button>
        </div>
    );
}
