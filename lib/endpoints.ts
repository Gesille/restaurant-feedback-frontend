export const ENDPOINTS = {
  resolveToken: (token: string) => `/restaurants/qr/${token}`,
  submitFeedback: ()             => `/feedbacks`,
} as const;