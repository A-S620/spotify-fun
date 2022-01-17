import React from 'react';
import './Input.css';

interface IInput {
    onInputChange(value: any): void;
}

export default function Input(props: IInput) {
    return (
        <div className="Input">
            <input
                name={'Playlist Name'}
                defaultValue={'New Playlist'}
                onChange={(e) => {
                    props.onInputChange(e.target.value);
                }}
            />
        </div>
    );
}
