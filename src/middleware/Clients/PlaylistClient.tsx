import axios from 'axios';

export default class PlaylistClient {
    static getPlaylistById = async (playlistId: string, accessToken: string) => {
        try {
            const response = await axios.get('https://api.spotify.com/v1/playlists/' + playlistId, {
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + accessToken,
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            // @ts-ignore
            const { response } = error;
            if (response) {
                const errorResponseData = response.data.error as { status: number; message: string };
                return new Error(`${errorResponseData.status}: ${errorResponseData.message}`);
            }
            return new Error('Request Failed');
        }
    };
}
