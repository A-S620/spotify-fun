import React from 'react';
import './Track.css';

export default class Track extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { isRemoval: true };
    }

    renderAction() {
        if (this.state.isRemoval) {
            return '+';
        }
        return '-';
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>Track Name</h3>
                    <p>Artist | Album</p>
                </div>
                <button className="Track-action">{this.renderAction()}</button>
            </div>
        );
    }
}
