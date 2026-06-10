export const ENV = {
  API_BASE_URL: process.env.NEXT_PUBLIC_API_URL ?? 'http://10.0.20.40:8000/api/v1',
} as const;