'use client';

import { useEffect, useState } from 'react';
import { restaurantService } from '@/services/restaurant.service';
import { RestaurantInfo } from '@/types/feedback.types';

type Status = 'loading' | 'ready' | 'error';

export function useRestaurant(token: string | null) {
  const [restaurant, setRestaurant] = useState<RestaurantInfo | null>(null);
  const [status, setStatus]         = useState<Status>('loading');
  const [error, setError]           = useState<string | null>(null);

  useEffect(() => {
    if (!token) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setStatus('error');
      setError('No QR token provided.');
      return;
    }

    let cancelled = false;

    restaurantService
      .resolveToken(token)
      .then((data) => {
        if (!cancelled) {
          setRestaurant(data);
          setStatus('ready');
        }
      })
      .catch((err: Error) => {
        if (!cancelled) {
          setError(err.message);
          setStatus('error');
        }
      });

    return () => { cancelled = true; };
  }, [token]);

  return { restaurant, status, error };
}