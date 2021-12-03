import '@testing-library/jest-dom';
import AuthClient from '../../../src/middleware/Clients/AuthClient';

describe('AuthClient component', () => {
    describe('getAccessToken', () => {
        test('should throw an error when the clientId and clientSecret are invalid', async () => {
            const response = await AuthClient.getAccessToken('fakeId', 'fakeClient');
            expect(response.toString()).toBe('Error: invalid_client: Invalid client');
        });
        test('should respond with a string token when the clientId and clientSecret are valid', async () => {
            let clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID ? process.env.REACT_APP_SPOTIFY_CLIENT_ID : '';
            let clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
                ? process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
                : '';
            const response = await AuthClient.getAccessToken(clientId, clientSecret);
            expect(typeof response).toBe('string');
        });
    });
});
