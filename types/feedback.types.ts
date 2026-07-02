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
  customer_email: string;   
  waiter_name: string;
  // Waiter / Waitress
  friendliness_rating:              Rating | null;
  attentiveness_rating:             Rating | null;
  menu_knowledge_rating:            Rating | null;
  service_speed_rating:             Rating | null;
  food_quality_rating:              Rating | null;
  cleanliness_rating:               Rating | null;
  overall_rating:                   Rating | null;
  // Bartender
  bartender_friendliness_rating:    Rating | null;
  bartender_drink_knowledge_rating: Rating | null;
  bartender_speed_rating:           Rating | null;
  bartender_welcome_rating:         Rating | null;
  bartender_overall_rating:         Rating | null;
  // Hostess
  hostess_friendliness_rating:      Rating | null;
  hostess_seating_rating:           Rating | null;
  hostess_welcome_rating:           Rating | null;
  hostess_communication_rating:     Rating | null;
  hostess_overall_rating:           Rating | null;
  // Common
  recommendation: Recommendation | null;
  comment: string;
}

// All nullable rating fields that get asserted to Rating on submit
type NullableRatingKeys =
  | 'friendliness_rating'
  | 'attentiveness_rating'
  | 'menu_knowledge_rating'
  | 'service_speed_rating'
  | 'food_quality_rating'
  | 'cleanliness_rating'
  | 'overall_rating'
  | 'bartender_friendliness_rating'
  | 'bartender_drink_knowledge_rating'
  | 'bartender_speed_rating'
  | 'bartender_welcome_rating'
  | 'bartender_overall_rating'
  | 'hostess_friendliness_rating'
  | 'hostess_seating_rating'
  | 'hostess_welcome_rating'
  | 'hostess_communication_rating'
  | 'hostess_overall_rating'
  | 'recommendation';

export interface SubmitFeedbackPayload extends Omit<FeedbackFormData, NullableRatingKeys> {
  restaurant_id: number;
  // Waiter / Waitress
  friendliness_rating:              Rating;
  attentiveness_rating:             Rating;
  menu_knowledge_rating:            Rating;
  service_speed_rating:             Rating;
  food_quality_rating:              Rating;
  cleanliness_rating:               Rating;
  overall_rating:                   Rating;
  // Bartender
  bartender_friendliness_rating:    Rating;
  bartender_drink_knowledge_rating: Rating;
  bartender_speed_rating:           Rating;
  bartender_welcome_rating:         Rating;
  bartender_overall_rating:         Rating;
  // Hostess
  hostess_friendliness_rating:      Rating;
  hostess_seating_rating:           Rating;
  hostess_welcome_rating:           Rating;
  hostess_communication_rating:     Rating;
  hostess_overall_rating:           Rating;
  // Common
  recommendation: Recommendation;
}