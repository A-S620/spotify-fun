export class Config {
    static REACT_APP_SPOTIFY_CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID
        ? process.env.REACT_APP_SPOTIFY_CLIENT_ID
        : '';
    static REACT_APP_SPOTIFY_CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
        ? process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
        : '';
}
