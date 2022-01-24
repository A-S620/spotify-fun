import '@testing-library/jest-dom';
import { mount, ReactWrapper } from 'enzyme';
import App from '../../src/components/App/App';

let component: ReactWrapper;
beforeAll(() => {
    component = mount(<App />);
});
describe('App', () => {
    describe('On Render', () => {
        it('Should show blank Results and Songs to Analyse sections', () => {
            expect(component.find('div#search-results').text()).toEqual('Search Results');
            expect(component.find('div#songs-to-analyse').text()).toEqual('Songs to Analyse ANALYSE SONGS');
        });
    });
    describe('On Search', () => {
        it('Should display the songs searched', async () => {
            component
                .find('div#search-bar')
                .find('input')
                .simulate('change', { target: { value: 'Blue Side (Outro) j-hope' } });
            component.find('div#search-bar').simulate('click');

            await component.update();
            await component.update();
            await component.update();

            console.log(component.html());
            expect(component.find('div#search-results').text()).toContain('Blue Side (Outro)');
        });
    });
});
