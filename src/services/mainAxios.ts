import Axios, { AxiosRequestConfig, AxiosError } from "axios";
import { jwtStorageService } from "./jwt.storage.service";

export const AXIOS_INSTANCE = Axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL ?? "",
});

AXIOS_INSTANCE.interceptors.request.use(
  (config) => {
    const token = jwtStorageService.getToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export const mainAxios = async <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  const source = Axios.CancelToken.source();

  const promise = AXIOS_INSTANCE({
    ...config,
    ...options,
    cancelToken: source.token,
  }).then(({ data }) => data);

  // @ts-ignore
  promise.cancel = () => {
    source.cancel("Query was cancelled");
  };

  return promise;
};

export type ErrorType<Error> = AxiosError<Error>;
export type BodyType<BodyData> = BodyData;
