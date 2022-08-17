export function setToken(userToken: string) {
    localStorage.setItem('token', JSON.stringify(userToken));
}

export function getToken() {
    const tokenString = localStorage.getItem('token');
    if (!tokenString) return tokenString;
    const userToken = JSON.parse(tokenString as string);
    return userToken;
}