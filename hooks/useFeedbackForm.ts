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
// 
const INITIAL_STATE: FeedbackFormData = {
  customer_name:         '',
  customer_email:        '',
  waiter_name:           '',
  receipt_no:            '',  
  // Waiter / Waitress
  friendliness_rating:              null,
  attentiveness_rating:             null,
  menu_knowledge_rating:            null,
  service_speed_rating:             null,
  food_quality_rating:              null,
  cleanliness_rating:               null,
  overall_rating:                   null,
  // Bartender
  bartender_friendliness_rating:    null,
  bartender_drink_knowledge_rating: null,
  bartender_speed_rating:           null,
  bartender_welcome_rating:         null,
  bartender_overall_rating:         null,
  // Hostess
  hostess_friendliness_rating:      null,
  hostess_seating_rating:           null,
  hostess_welcome_rating:           null,
  hostess_communication_rating:     null,
  hostess_overall_rating:           null,
  // Common
  recommendation: null,
  comment:        '',
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
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  function validate(): string | null {
    if (!form.customer_name.trim()) return 'Please enter your name.';
    if (!form.waiter_name.trim())   return "Please enter your waiter's name.";
    if (!form.receipt_no.trim())   return 'Please enter your receipt number.';
    if (!form.customer_email.trim()) return 'Please enter your email.';
    if (!EMAIL_RE.test(form.customer_email)) return 'Please enter a valid email address.';

    const ratingFields: (keyof FeedbackFormData)[] = [
      // Waiter / Waitress
      'friendliness_rating',
      'attentiveness_rating',
      'menu_knowledge_rating',
      'service_speed_rating',
      'food_quality_rating',
      'cleanliness_rating',
      'overall_rating',
      // Bartender
      'bartender_friendliness_rating',
      'bartender_drink_knowledge_rating',
      'bartender_speed_rating',
      'bartender_welcome_rating',
      'bartender_overall_rating',
      // Hostess
      'hostess_friendliness_rating',
      'hostess_seating_rating',
      'hostess_welcome_rating',
      'hostess_communication_rating',
      'hostess_overall_rating',
    ];

    for (const field of ratingFields) {
      if (form[field] === null) return 'Please answer all rating questions.';
    }

    if (!form.recommendation) return 'Please select a recommendation.';

    return null;
  }

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
        restaurant_id:                    restaurantId,
        customer_name:                    form.customer_name.trim(),
        customer_email:                   form.customer_email.trim().toLowerCase(),
        waiter_name:                      form.waiter_name.trim(),
        receipt_no:                       form.receipt_no.trim(),
        // Waiter / Waitress
        friendliness_rating:              form.friendliness_rating              as Rating,
        attentiveness_rating:             form.attentiveness_rating             as Rating,
        menu_knowledge_rating:            form.menu_knowledge_rating            as Rating,
        service_speed_rating:             form.service_speed_rating             as Rating,
        food_quality_rating:              form.food_quality_rating              as Rating,
        cleanliness_rating:               form.cleanliness_rating               as Rating,
        overall_rating:                   form.overall_rating                   as Rating,
        // Bartender
        bartender_friendliness_rating:    form.bartender_friendliness_rating    as Rating,
        bartender_drink_knowledge_rating: form.bartender_drink_knowledge_rating as Rating,
        bartender_speed_rating:           form.bartender_speed_rating           as Rating,
        bartender_welcome_rating:         form.bartender_welcome_rating         as Rating,
        bartender_overall_rating:         form.bartender_overall_rating         as Rating,
        // Hostess
        hostess_friendliness_rating:      form.hostess_friendliness_rating      as Rating,
        hostess_seating_rating:           form.hostess_seating_rating           as Rating,
        hostess_welcome_rating:           form.hostess_welcome_rating           as Rating,
        hostess_communication_rating:     form.hostess_communication_rating     as Rating,
        hostess_overall_rating:           form.hostess_overall_rating           as Rating,
        // Common
        recommendation: form.recommendation as Recommendation,
        comment:        form.comment.trim(),
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