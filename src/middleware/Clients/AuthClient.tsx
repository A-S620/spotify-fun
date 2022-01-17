import axios from 'axios';
import qs from 'qs';

export default class AuthClient {
    static accessToken: string;
    static expiresIn: number;
    static getAccessToken = async (clientId: string, clientSecret: string) => {
        const headers = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
                username: clientId,
                password: clientSecret,
            },
        };
        const data = {
            grant_type: 'client_credentials',
        };

        try {
            const response = await axios.post('https://accounts.spotify.com/api/token', qs.stringify(data), headers);
            AuthClient.accessToken = response.data.access_token;
            AuthClient.expiresIn = response.data.expiresIn;
        } catch (error) {
            const { response }: any = error;
            if (response) {
                const errorResponseData = response.data as { error: string; error_description: string };
                return new Error(`${errorResponseData.error}: ${errorResponseData.error_description}`);
            }
            return new Error('Request Failed');
        }
    };

    static reset() {
        AuthClient.accessToken = '';
        AuthClient.expiresIn = 0;
    }
}
