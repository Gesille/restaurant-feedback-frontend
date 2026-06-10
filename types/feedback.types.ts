export type Rating = 1 | 2 | 3 | 4 | 5;

export type Recommendation =
  | 'Very Likely'
  | 'Likely'
  | 'Neutral'
  | 'Unlikely'
  | 'Very Unlikely';

export interface RestaurantInfo {
  id: number;
  name: string;
  location: string;
}

export interface FeedbackFormData {
  customer_name: string;
  waiter_name: string;
  friendliness_rating: Rating | null;
  attentiveness_rating: Rating | null;
  menu_knowledge_rating: Rating | null;
  service_speed_rating: Rating | null;
  food_quality_rating: Rating | null;
  cleanliness_rating: Rating | null;
  overall_rating: Rating | null;
  recommendation: Recommendation | null;
  comment: string;
}

export interface SubmitFeedbackPayload extends Omit<FeedbackFormData, 
  'friendliness_rating' | 'attentiveness_rating' | 'menu_knowledge_rating' |
  'service_speed_rating' | 'food_quality_rating' | 'cleanliness_rating' |
  'overall_rating' | 'recommendation'
> {
  restaurant_id: number;
  friendliness_rating: Rating;
  attentiveness_rating: Rating;
  menu_knowledge_rating: Rating;
  service_speed_rating: Rating;
  food_quality_rating: Rating;
  cleanliness_rating: Rating;
  overall_rating: Rating;
  recommendation: Recommendation;
}