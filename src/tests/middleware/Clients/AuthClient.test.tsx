import '@testing-library/jest-dom';
import AuthClient from '../../../middleware/Clients/AuthClient';
import { Config } from '../../../middleware/Config';
import keyDetails from '../../../util/keyDetails';

describe('AuthClient component', () => {
    describe('getAccessToken', () => {
        test('should throw an error when the clientId and clientSecret are invalid', async () => {
            const response = await AuthClient.getAccessToken('fakeId', 'fakeClient');
            expect(response.toString()).toBe('Error: invalid_client: Invalid client');
        });
        test('should respond with a string token when the clientId and clientSecret are valid', async () => {
            Config.SPOTIFY_CLIENT_ID = '3683a535eef44e2ab15523f2a929b152';
            Config.SPOTIFY_CLIENT_SECRET = 'e1a35aff514044b786414ce582ef5264';
            const response = await AuthClient.getAccessToken(keyDetails.clientID, keyDetails.clientSecret);
            expect(typeof response).toBe('string');
        });
    });
});
