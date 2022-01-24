import '@testing-library/jest-dom';
import { mount, ReactWrapper } from 'enzyme';
import TrackList from '../../../src/components/TrackList/TrackList';
import { ITrack } from '../../../src/Interfaces/ITrack';

let component: ReactWrapper;
const onRemoveCallback = jest.fn();
const onAddCallback = jest.fn();

describe('TrackList Component', () => {
    describe('Displayed Songs', () => {
        beforeEach(() => {
            const trackList: ITrack[] = [
                {
                    album: "Love Yourself 結 'Answer'",
                    artists: ['BTS'],
                    id: '1e8J3XClxZbFmvIHLI8CE4',
                    name: 'IDOL',
                },
                {
                    album: "Love Yourself 結 'Answer'",
                    artists: ['BTS'],
                    id: '1234567890',
                    name: 'Euphoria',
                },
            ];
            component = mount(
                <TrackList trackList={trackList} isRemoval={true} onRemove={onRemoveCallback} onAdd={onAddCallback} />
            );
        });
        it('Should display the correct trackList when prop is passed in', () => {
            expect(component.find('div#trackList').text()).toEqual(
                "IDOLBTS | Love Yourself 結 'Answer'-EuphoriaBTS | Love Yourself 結 'Answer'-"
            );
        });
    });
    describe('onRemove', () => {
        beforeEach(() => {
            const trackList: ITrack[] = [
                {
                    album: "Love Yourself 結 'Answer'",
                    artists: ['BTS'],
                    id: '1e8J3XClxZbFmvIHLI8CE4',
                    name: 'IDOL',
                },
            ];
            component = mount(
                <TrackList trackList={trackList} isRemoval={true} onRemove={onRemoveCallback} onAdd={onAddCallback} />
            );
        });
        it('should have a remove button', () => {
            expect(component.find('button').text()).toEqual('-');
        });
        it('should callback with a track when a track is removed and isRemoval is true', () => {
            component.find('button').simulate('click');
            expect(onRemoveCallback).toHaveBeenCalled();
            expect(onRemoveCallback).toHaveBeenCalledWith({
                album: "Love Yourself 結 'Answer'",
                artists: ['BTS'],
                id: '1e8J3XClxZbFmvIHLI8CE4',
                name: 'IDOL',
            });
        });
    });
    describe('onAdd', () => {
        beforeEach(() => {
            const trackList: ITrack[] = [
                {
                    album: "Love Yourself 結 'Answer'",
                    artists: ['BTS'],
                    id: '1e8J3XClxZbFmvIHLI8CE4',
                    name: 'IDOL',
                },
            ];
            component = mount(
                <TrackList trackList={trackList} isRemoval={false} onRemove={onRemoveCallback} onAdd={onAddCallback} />
            );
        });
        it('should have an add button', () => {
            expect(component.find('button').text()).toEqual('+');
        });
        it('should callback with a track when a track is added and isRemoval is false', () => {
            component.find('button').simulate('click');
            expect(onAddCallback).toHaveBeenCalled();
            expect(onAddCallback).toHaveBeenCalledWith({
                album: "Love Yourself 結 'Answer'",
                artists: ['BTS'],
                id: '1e8J3XClxZbFmvIHLI8CE4',
                name: 'IDOL',
            });
        });
    });
});
