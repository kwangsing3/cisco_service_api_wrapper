import {stringify} from 'querystring';
import {POST} from '../utility/http.mod';

const TOKEN_URL = 'https://id.cisco.com/oauth2/default/v1/token';
const EXPIRY_BUFFER_MS = 60_000; // refresh 60s before actual expiry

interface CiscoTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number; // seconds
  scope?: string;
}

let cachedToken = '';
let expiresAt = 0; // absolute Unix timestamp (ms) when token expires

export default async function GetToken(): Promise<string> {
  const now = Date.now();

  if (cachedToken && now < expiresAt - EXPIRY_BUFFER_MS) {
    return cachedToken;
  }

  const data = stringify({
    grant_type: 'client_credentials',
    client_id: process.env.CISCO_CLIENT_ID ?? '',
    client_secret: process.env.CISCO_CLIENT_SECRET ?? '',
  });

  const raw = await POST<CiscoTokenResponse>(
    TOKEN_URL,
    {'Content-Type': 'application/x-www-form-urlencoded'},
    data
  );

  if (!raw.success || !raw.data) {
    throw new Error(`Failed to obtain Cisco token: HTTP ${raw.status} ${raw.statusText}`);
  }

  cachedToken = raw.data.access_token;
  expiresAt = now + raw.data.expires_in * 1000;
  return cachedToken;
}
