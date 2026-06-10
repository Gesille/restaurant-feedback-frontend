import { apiClient } from '@/lib/apiClient';
import { ENDPOINTS } from '@/lib/endpoints';
import { SubmitFeedbackPayload } from '@/types/feedback.types';

export const feedbackService = {
  submit: async (payload: SubmitFeedbackPayload): Promise<{ id: number }> => {
    const res = await apiClient.post<{ id: number }>(ENDPOINTS.submitFeedback(), payload);
    return res.data!;
  },
};