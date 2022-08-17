export interface UserAuthInfo {
    isLoggedIn: boolean;
    name: string;
    refresh_token?: string;
    access_token: string;
}
