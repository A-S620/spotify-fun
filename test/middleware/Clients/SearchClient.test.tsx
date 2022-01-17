import '@testing-library/jest-dom';
import AuthClient from '../../../src/middleware/Clients/AuthClient';
import { Config } from '../../../src/Config';
import SearchClient from '../../../src/middleware/Clients/SearchClient';

let accessToken: string;
beforeAll(async () => {
    await AuthClient.getAccessToken(Config.spotifyClientId, Config.spotifyClientSecret).catch((error: Error) =>
        console.warn(error)
    );
    accessToken = AuthClient.accessToken;
});
afterAll(() => {
    AuthClient.reset();
});
describe('AuthClient Component', () => {
    it('should return an array of tracks when a term is searched', async () => {
        const response = await SearchClient.searchTracks('Idol', accessToken);
        expect(SearchClient.getFromResponseAsArrayOfITrack(response)[0]).toEqual({
            album: "Love Yourself 結 'Answer'",
            artists: ['BTS'],
            id: '1e8J3XClxZbFmvIHLI8CE4',
            name: 'IDOL',
        });
    });
    it('Should throw an error when an invalid search term is used', async () => {
        const response = await SearchClient.searchTracks('############', accessToken);
        expect(response).toEqual(new Error('400: No search query'));
    });
});
