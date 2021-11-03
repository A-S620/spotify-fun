import '@testing-library/jest-dom';
import AuthClient from '../../../middleware/Clients/AuthClient';
import keyDetails from '../../../util/keyDetails';

describe('AuthClient component', () => {
    describe('getAccessToken', () => {
        test('should throw an error when the clientId and clientSecret are invalid', async () => {
            const response = await AuthClient.getAccessToken('fakeId', 'fakeClient');
            expect(response.toString()).toBe('Error: invalid_client: Invalid client');
        });
        test('should respond with a string token when the clientId and clientSecret are valid', async () => {
            let clientId = process.env.SPOTIFY_CLIENT_ID ? process.env.SPOTIFY_CLIENT_ID : '';
            const response = await AuthClient.getAccessToken(clientId, keyDetails.clientSecret);
            expect(typeof response).toBe('string');
        });
    });
});
