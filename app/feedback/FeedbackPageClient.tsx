'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { useRestaurant }   from '@/hooks/useRestaurant';
import { FeedbackForm }    from '@/components/feedback/FeedbackForm';
import { SuccessScreen }   from '@/components/ui/SuccessScreen';
import { ErrorScreen }     from '@/components/ui/ErrorScreen';
import { LoadingSpinner }  from '@/components/ui/LoadingSpinner';

export function FeedbackPageClient() {
  const params    = useSearchParams();
  const token     = params.get('token');

  const { restaurant, status, error } = useRestaurant(token);
  const [submitted, setSubmitted]     = useState(false);

  if (status === 'loading') {
    return <LoadingSpinner message="Looking up your restaurant..." />;
  }

  if (status === 'error' || !restaurant) {
    return (
      <ErrorScreen
        title="Invalid QR Code"
        message={error ?? 'This QR code is not recognized. Please ask staff for assistance.'}
      />
    );
  }

  if (submitted) {
    return (
      <SuccessScreen
        restaurantName={restaurant.name}
        onReset={() => setSubmitted(false)}
      />
    );
  }

  return (
    <FeedbackForm
      restaurant={restaurant}
      onSuccess={() => setSubmitted(true)}
    />
  );
}