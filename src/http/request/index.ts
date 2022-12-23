import axios from "axios";
import type { AxiosInstance } from "axios";
import type { IRequestConfig, IRequestInterceptors } from "./type";

class Request {
  instance: AxiosInstance;
  interceptors?: IRequestInterceptors;

  constructor(config: IRequestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;

    // 从config中取出拦截器 - 实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );

    // 添加所有实例的拦截器
    this.instance.interceptors.request.use(
      config => {
        return config;
      },
      error => {
        return error;
      }
    );
    this.instance.interceptors.response.use(
      res => {
        return res;
      },
      (error: Error) => {
        return error;
      }
    );
  }

  request<T = any>(config: IRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 接口单独的拦截器
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }
      this.instance
        .request<any, T>(config)
        .then(res => {
          // 1、单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          // 2、返回结果
          resolve(res);
        })
        .catch((error: Error) => {
          reject(error);
          return error;
        });
    });
  }

  get<T = any>(config: IRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "GET" });
  }

  post<T = any>(config: IRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "POST" });
  }

  put<T = any>(config: IRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "PUT" });
  }

  delete<T = any>(config: IRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "DELETE" });
  }
}

export default Request;
