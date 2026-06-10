export const ENDPOINTS = {
  resolveToken: (token: string) => `/restaurants/${token}/qr`,
  submitFeedback: ()             => `/feedbacks`,
} as const;