import '@testing-library/jest-dom';
import AuthClient from '../../../src/middleware/Clients/AuthClient';
import { Config } from '../../../src/Config';

describe('AuthClient component', () => {
    describe('getAccessToken', () => {
        test('should throw an error when the clientId and clientSecret are invalid', async () => {
            const response = await AuthClient.getAccessToken('fakeId', 'fakeClient');
            expect(response).toEqual(new Error('invalid_client: Invalid client'));
        });
        test('should respond with a string token when the clientId and clientSecret are valid', async () => {
            await AuthClient.getAccessToken(Config.spotifyClientId, Config.spotifyClientSecret);
            expect(AuthClient.accessToken).not.toBeNull();
        });
    });
});
