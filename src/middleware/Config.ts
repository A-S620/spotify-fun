const _env = window as any;

export class Config {
    static SPOTIFY_CLIENT_ID = _env.REACT_APP_SPOTIFY_CLIENT_ID;
    static SPOTIFY_CLIENT_SECRET = _env.REACT_APP_SPOTIFY_CLIENT_SECRET;
}
