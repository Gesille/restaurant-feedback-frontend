import { Suspense } from 'react';

import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { FeedbackPageClient } from './FeedbackPageClient';

export default function FeedbackPage() {
  return (
    <Suspense fallback={<LoadingSpinner message="Loading your form..." />}>
      <FeedbackPageClient />
    </Suspense>
  );
}