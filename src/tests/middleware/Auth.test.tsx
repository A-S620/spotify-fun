import '@testing-library/jest-dom';
import { Auth } from '../../middleware/Auth';
import keyDetails from '../../util/keyDetails';

describe('Auth component', () => {
    test('It Should throw an error when the clientId and clientSecret are invalid', async () => {
        const response = await Auth('fakeId', 'fakeClient');
        expect(response.toString()).toBe('Error: invalid_client: Invalid client');
    });
    test('It respond with a string token when the clientId and clientSecret are valid', async () => {
        const response = await Auth(keyDetails.clientID, keyDetails.clientSecret);
        expect(typeof response).toBe('string');
    });
});
