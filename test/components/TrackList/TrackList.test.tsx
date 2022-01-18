import '@testing-library/jest-dom';
import { mount, ReactWrapper } from 'enzyme';
import TrackList from '../../../src/components/TrackList/TrackList';
import { ITrack } from '../../../src/Interfaces/ITrack';

let component: ReactWrapper;
const onRemoveCallback = jest.fn();
const onAddCallback = jest.fn();
beforeAll(() => {
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
describe('TrackList Component', () => {
    it('Should display the correct trackList when prop is passed in', () => {
        expect(component.find('div#trackList').text()).toEqual("IDOLBTS | Love Yourself 結 'Answer'-");
    });
    it('should callback with a track when a track is removed', () => {
        //TODO: finish test
    });
});
