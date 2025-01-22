import { setupCache, buildMemoryStorage } from "axios-cache-interceptor"

import axios, { AxiosInstance } from "axios";
import { getAccessToken } from "./tokenManager";

const BASE_URL = "http://localhost:8000/";
const DEFAULT_API_HEADERS = {
  Accept:"application/json", 
}

export const authApiInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const apiInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

authApiInstance.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return {...config, ...DEFAULT_API_HEADERS};
}, (error) => {
  return Promise.reject(error);
})

apiInstance.interceptors.request.use((config) => {
  return {...config, ...DEFAULT_API_HEADERS};
}, (error) => {
  return Promise.reject(error);
});

export const API = setupCache(apiInstance, {
  ttl: 5 * 60 * 1000,
  storage: buildMemoryStorage(),
  methods: ["get"],
  interpretHeader: false,
});


export const AuthAPI = setupCache(authApiInstance, {
  ttl: 5 * 60 * 1000,
  storage: buildMemoryStorage(),
  methods: ["get"],
  interpretHeader: false,
});


export function isAuthenticated(): boolean {
  return !!getAccessToken()
}


export function getAuthErrorMessage(error: unknown, messages: Record<number, string> = {}): string {
  if (!axios.isAxiosError(error) || !error.request) {
    return "An error occurred. Please try again later.";
  }

  const response = error.response;

  if (!response) {
    return "Server error. Please try again later.";
  }

  const { status } = response;

  const statusMessages: Record<number, string> = {
    500: "Server error. Please, try again later.",
    422: "Some of the information provided is incorrect or incomplete. Please review your details and try again.",
    ...messages
  };
  const message = statusMessages[status] || "An error occurred. Please try again later.";
  return message;
}

export function getBackendUrl(path: string = "/"): string {
  const backendHost = "http://localhost:8000"
  return backendHost + path
}
