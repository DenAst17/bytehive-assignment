import { APP_KEYS } from "../consts";

class JwtStorageService {
    constructor() {
        this.getToken();
    }
    getToken() {
        return localStorage.getItem(APP_KEYS.STORAGE_KEYS.TOKEN);
    }
    setToken(token: string | null) {
        localStorage.setItem(APP_KEYS.STORAGE_KEYS.TOKEN, token as string);
    }
    removeToken() {
        localStorage.removeItem(APP_KEYS.STORAGE_KEYS.TOKEN);
    }
    isToken() {
        const token = jwtStorageService.getToken();
        return (token !== null);
    }
}

export const jwtStorageService = new JwtStorageService();