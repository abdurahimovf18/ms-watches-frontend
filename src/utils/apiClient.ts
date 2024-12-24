// apiClient.js

import axios from "axios";
import { getAccessToken } from "./tokenManager";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 5000,
});

apiClient.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});


export function getAuthHeaders(headers: Record<string, string> = {}): Record<string, string> {
  const token = getAccessToken() || "<token is deleted>";

  return {
    ...headers,
    Authorization: `Bearer ${token}`,
    "Content-Type": headers["Content-Type"] || "application/json",
    Accept: "application/json",
  };
}


export function getAuthErrorMessage(error: unknown, messages: Record<number, string> = {}): string {
  if (!axios.isAxiosError(error)) {
    return "An error occurred. Please try again later.";
  }

  if (!error.request) return "An error occurred. Please try again later.";

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



export default apiClient;
