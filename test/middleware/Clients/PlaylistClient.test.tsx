import '@testing-library/jest-dom';
import AuthClient from '../../../src/middleware/Clients/AuthClient';
import PlaylistClient from '../../../src/middleware/Clients/PlaylistClient';

let accessToken: string;
beforeAll(async () => {
    let clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID ? process.env.REACT_APP_SPOTIFY_CLIENT_ID : '';
    let clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET ? process.env.REACT_APP_SPOTIFY_CLIENT_SECRET : '';
    accessToken = await AuthClient.getAccessToken(clientId, clientSecret);
});
describe('PlaylistClient client component', () => {
    describe('getPlaylistById', () => {
        it('should return the playlist when a valid playlistId is used', async () => {
            const response = await PlaylistClient.getAllPlaylistDataById('3kwtMOO3XycjEyqsvzqbDp', accessToken);
            expect(response.name).toBe('Just Blue Side');
        });
        it('should throw an error when an invalid playlistId is used', async () => {
            const response = await PlaylistClient.getAllPlaylistDataById('test', accessToken);
            expect(response.toString()).toEqual('Error: 404: Invalid playlist Id');
        });
    });
    describe('getAllSongIdsFromPlaylist', () => {
        it('should return all the songs in a playlist as an array of ids', async () => {
            const response = await PlaylistClient.getAllPlaylistDataById('3kwtMOO3XycjEyqsvzqbDp', accessToken);
            expect(PlaylistClient.getAllSongIdsFromPlaylistAsArray(response)).toBe(['2yAr91sJO2OQinZLghgnzr']);
        });
    });
});
