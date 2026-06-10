import { apiClient } from '@/lib/apiClient';
import { ENDPOINTS } from '@/lib/endpoints';
import { RestaurantInfo } from '@/types/feedback.types';

export const restaurantService = {
  resolveToken: async (token: string): Promise<RestaurantInfo> => {
    const res = await apiClient.get<RestaurantInfo>(ENDPOINTS.resolveToken(token));
    return res.data!;
  },
};