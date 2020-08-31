import axios from 'axios/index';
import { appConfig } from '../settings';

export type HttpRequestMethod =
  | 'get' | 'GET'
  | 'delete' | 'DELETE'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'
  | 'purge' | 'PURGE'
  | 'link' | 'LINK'
  | 'unlink' | 'UNLINK'

export default class HttpRequest {
  protected endpoint: string;
  protected method?: HttpRequestMethod;
  protected data?: Record<string, unknown>;
  protected headers?: {[index: string]: unknown};
  protected params?: {[index: string]: unknown};

  constructor(
    endpoint: string,
    method?: HttpRequestMethod,
    data?: Record<string, unknown>,
    headers?: Record<string, unknown>,
    params?: Record<string, unknown>,
  ) {
    this.endpoint = endpoint;
    this.method = method || 'GET';
    this.data = data || {};
    this.headers = headers || {};
    this.params = params || {};

    if (!this.headers['Content-Type']) {
      this.headers['Content-Type'] = 'application/json';
    }
  }

  setParams(params: Record<string, unknown>) {
    this.params = params;
    return this;
  }

  setParamProperty(prop: string, value: unknown) {
    this.params[prop] = value;
    return this;
  }

  async execute(): Promise<Record<string, unknown>> {
    const opts = {
      url: `${appConfig.defaults.baseURL}/${this.endpoint}`,
      method: this.method,
      data: this.data,
      headers: this.headers,
      params: this.params,
    };

    return await axios.request(opts);
  }
}
