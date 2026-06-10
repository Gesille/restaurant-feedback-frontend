/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import { feedbackService } from '@/services/feedback.service';
import {
  FeedbackFormData,
  Rating,
  Recommendation,
  SubmitFeedbackPayload,
} from '@/types/feedback.types';

const INITIAL_STATE: FeedbackFormData = {
  customer_name:         '',
  waiter_name:           '',
  friendliness_rating:   null,
  attentiveness_rating:  null,
  menu_knowledge_rating: null,
  service_speed_rating:  null,
  food_quality_rating:   null,
  cleanliness_rating:    null,
  overall_rating:        null,
  recommendation:        null,
  comment:               '',
};

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export function useFeedbackForm(restaurantId: number | null) {
  const [form, setForm]           = useState<FeedbackFormData>(INITIAL_STATE);
  const [submitStatus, setStatus] = useState<SubmitStatus>('idle');
  const [submitError, setError]   = useState<string | null>(null);

  function setField<K extends keyof FeedbackFormData>(
    key: K,
    value: FeedbackFormData[K],
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function setRating(key: keyof FeedbackFormData, value: Rating) {
    setField(key, value);
  }

  function setRecommendation(value: Recommendation) {
    setField('recommendation', value);
  }

  function validate(): string | null {
    if (!form.customer_name.trim()) return 'Please enter your name.';
    if (!form.waiter_name.trim())   return 'Please enter your waiter\'s name.';

    const ratingFields: (keyof FeedbackFormData)[] = [
      'friendliness_rating',
      'attentiveness_rating',
      'menu_knowledge_rating',
      'service_speed_rating',
      'food_quality_rating',
      'cleanliness_rating',
      'overall_rating',
    ];

    for (const field of ratingFields) {
      if (form[field] === null) return 'Please answer all rating questions.';
    }

    if (!form.recommendation) return 'Please select a recommendation.';

    return null;
  }

  // Change the return type of submit:
async function submit(): Promise<boolean> {
  if (!restaurantId) return false;

  const validationError = validate();
  if (validationError) {
    setError(validationError);
    return false;
  }

  setStatus('submitting');
  setError(null);

  try {
    const payload: SubmitFeedbackPayload = {
      restaurant_id:         restaurantId,
      customer_name:         form.customer_name.trim(),
      waiter_name:           form.waiter_name.trim(),
      friendliness_rating:   form.friendliness_rating as Rating,
      attentiveness_rating:  form.attentiveness_rating as Rating,
      menu_knowledge_rating: form.menu_knowledge_rating as Rating,
      service_speed_rating:  form.service_speed_rating as Rating,
      food_quality_rating:   form.food_quality_rating as Rating,
      cleanliness_rating:    form.cleanliness_rating as Rating,
      overall_rating:        form.overall_rating as Rating,
      recommendation:        form.recommendation as Recommendation,
      comment:               form.comment.trim(),
    };

    await feedbackService.submit(payload);
    setStatus('success');
    return true;
  } catch (err: any) {
    setError(err.message ?? 'Submission failed. Please try again.');
    setStatus('error');
    return false;
  }
}

  function reset() {
    setForm(INITIAL_STATE);
    setStatus('idle');
    setError(null);
  }

  return {
    form,
    submitStatus,
    submitError,
    setField,
    setRating,
    setRecommendation,
    submit,
    reset,
  };
}