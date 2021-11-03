import axios from 'axios';
import qs from 'qs';

export const Auth = async (clientId: string, clientSecret: string) => {
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
        if (response.status === 200) {
            return response.data.access_token;
        }
    } catch (error) {
        // @ts-ignore
        const { response } = error;
        if (response) {
            const errorResponseData = response.data as { error: string; error_description: string };
            return new Error(`${errorResponseData.error}: ${errorResponseData.error_description}`);
        }
    }
};
