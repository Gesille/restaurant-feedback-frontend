import { apiClient } from '@/lib/apiClient';
import { ENDPOINTS } from '@/lib/endpoints';
import { RestaurantInfo } from '@/types/feedback.types';
export const restaurantService = {
  resolveToken: async (token: string): Promise<RestaurantInfo> => {
    const url = ENDPOINTS.resolveToken(token);

    console.log('Calling API:', url);

    const res = await apiClient.get<RestaurantInfo>(url);

    console.log('API Response:', res);

    return res.data!;
  },
};