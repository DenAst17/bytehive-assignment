import { STORAGE_KEYS } from "../consts/app.keys.const";

class JwtStorageService {
  constructor() {
    this.getToken();
  }
  getToken() {
    return localStorage.getItem(STORAGE_KEYS.TOKEN);
  }
  setToken(token?: string) {
    if (token) {
      localStorage.setItem(STORAGE_KEYS.TOKEN, token as string);
    }
  }
  removeToken() {
    localStorage.removeItem(STORAGE_KEYS.TOKEN);
  }
  isToken() {
    const token = jwtStorageService.getToken();
    return token !== null;
  }
}

export const jwtStorageService = new JwtStorageService();
