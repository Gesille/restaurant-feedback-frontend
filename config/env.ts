export const ENV = {
  API_BASE_URL:
    process.env.NEXT_PUBLIC_SERVER_URL ||
    'http://10.0.20.41:8000/api/v1',
} as const;

console.log('API URL:', ENV.API_BASE_URL);