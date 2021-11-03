import '@testing-library/jest-dom';
import { AuthClient } from '../../../middleware/Clients/AuthClient';
import keyDetails from '../../../util/keyDetails';

describe('AuthClient component', () => {
    test('should throw an error when the clientId and clientSecret are invalid', async () => {
        const response = await AuthClient('fakeId', 'fakeClient');
        expect(response.toString()).toBe('Error: invalid_client: Invalid client');
    });
    test('should respond with a string token when the clientId and clientSecret are valid', async () => {
        const response = await AuthClient(keyDetails.clientID, keyDetails.clientSecret);
        expect(typeof response).toBe('string');
    });
});
