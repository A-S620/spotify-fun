export class Config {
    static spotifyClientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID ? process.env.REACT_APP_SPOTIFY_CLIENT_ID : '';
    static spotifyClientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
        ? process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
        : '';
}
