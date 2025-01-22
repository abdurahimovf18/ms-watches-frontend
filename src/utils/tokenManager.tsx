

const ACCESS_TOKEN_KEY = "access_token"


export function setAccessToken(newToken: string) { 
  localStorage.setItem(ACCESS_TOKEN_KEY, newToken)
}

export function getAccessToken(): string | null {
  return localStorage.getItem(ACCESS_TOKEN_KEY)
}
