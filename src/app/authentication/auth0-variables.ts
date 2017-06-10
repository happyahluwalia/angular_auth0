interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'J6JPtfkUBKD4yaea1Nf5F7IjCs2yDngm',
  CLIENT_DOMAIN: 'https://happysingh.auth0.com',
  AUDIENCE: 'https://localhost:4200/',
  REDIRECT: 'http://localhost:4200/callback',
  SCOPE: 'openid',
    
};
