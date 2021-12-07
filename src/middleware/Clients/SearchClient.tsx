import axios from 'axios';
import { ITrack } from '../../Interfaces/ITrack';

export default class SearchClient {
    static searchTracks = async (searchTerm: string, accessToken: string, limit?: number) => {
        try {
            const response = await axios.get(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`, {
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

    static getFromResponseAsArrayOfITrack = (responseData: object): Array<ITrack> => {
        let tracksArray: Array<ITrack> = [];
        if (Object.keys(responseData).includes('tracks')) {
            const tracksObject = Object.entries(responseData).filter((entry) => entry[0] === 'tracks')[0][1];
            if (Object.keys(tracksObject).includes('items')) {
                const itemsArrayInTracksObject = Object.entries(tracksObject).filter(
                    (entry) => entry[0] === 'items'
                )[0][1] as Array<object>;
                itemsArrayInTracksObject.forEach((item: object) => {
                    const songId = Object.entries(item).filter((entry) => entry[0] === 'id')[0][1] as string;
                    const name = Object.entries(item).filter((entry) => entry[0] === 'name')[0][1] as string;
                    const artists = Object.entries(item).filter(
                        (entry) => entry[0] === 'artists'
                    )[0][1] as Array<object>;
                    let artistsArray: Array<string> = [];
                    artists.forEach((artist: object) => {
                        artistsArray.push(
                            Object.entries(artist).filter((entry) => entry[0] === 'name')[0][1] as string
                        );
                    });
                    const albumObject = Object.entries(item).filter((entry) => entry[0] === 'album')[0][1] as object;
                    let albumName: string = Object.entries(albumObject).filter(
                        (entry) => entry[0] === 'name'
                    )[0][1] as string;
                    const trackToAdd: ITrack = {
                        id: songId,
                        name: name,
                        artists: artistsArray,
                        album: albumName,
                    };
                    tracksArray.push(trackToAdd);
                });
            }
        }
        return tracksArray;
    };
}
