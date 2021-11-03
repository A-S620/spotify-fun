import '@testing-library/jest-dom';
import { AuthClient } from '../../../middleware/Clients/AuthClient';
import PlaylistClient from '../../../middleware/Clients/PlaylistClient';
import keyDetails from '../../../util/keyDetails';

let accessToken: string;
beforeAll(async () => {
    accessToken = await AuthClient(keyDetails.clientID, keyDetails.clientSecret);
});
describe('PlaylistClient client component', () => {
    describe('getPlaylistById', () => {
        it('should return the playlist when a valid playlistId is used', async () => {
            const response = await PlaylistClient.getPlaylistById('3kwtMOO3XycjEyqsvzqbDp', accessToken);
            expect(response.name).toBe('Just Blue Side');
        });
        it('should throw an error when an invalid playlistId is used', async () => {
            const response = await PlaylistClient.getPlaylistById('test', accessToken);
            expect(response.toString()).toEqual('Error: 404: Invalid playlist Id');
        });
    });
});
