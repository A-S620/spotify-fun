import axios from 'axios';

export default class PlaylistClient {
    static getAllPlaylistDataById = async (playlistId: string, accessToken: string) => {
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
    static getAllSongIdsFromPlaylistAsArray = (responseData: object): Array<string> => {
        let songIdsArray: Array<string> = [];
        if (Object.keys(responseData).includes('tracks')) {
            const tracksObject = Object.entries(responseData).filter((entry) => entry[0] === 'tracks')[0][1];
            if (Object.keys(tracksObject).includes('items')) {
                const itemsArrayInTracksObject = Object.entries(tracksObject).filter(
                    (entry) => entry[0] === 'items'
                )[0][1] as Array<any>;
                itemsArrayInTracksObject.forEach((item: object) => {
                    if (Object.keys(item).includes('track')) {
                        const trackObject = Object.entries(item).filter((entry) => entry[0] === 'track')[0][1];
                        if (Object.keys(trackObject).includes('id')) {
                            const songId = Object.entries(trackObject).filter((entry) => entry[0] === 'id')[0][1];
                            songIdsArray.push(songId as string);
                        }
                    }
                });
            }
        }
        return songIdsArray;
    };
}
