import { Rating, Recommendation } from '@/types/feedback.types';

export interface QuestionOption {
  label: string;
  value: Rating;
}

export interface RecommendationOption {
  label: string;
  value: Recommendation;
}

export interface Question {
  id: keyof import('@/types/feedback.types').FeedbackFormData;
  title: string;
  options: QuestionOption[];
  section?: string;
}

export const FEEDBACK_QUESTIONS: Question[] = [
  // ── Waiter / Waitress ──────────────────────────────────────────────────────
  {
    id: 'friendliness_rating',
    section: 'Waiter / Waitress',
    title: 'How would you rate the friendliness and professionalism of your waiter/waitress?',
    options: [
      { label: 'Excellent', value: 4 },
      { label: 'Good',      value: 3 },
      { label: 'Fair',      value: 2 },
      { label: 'Poor',      value: 1 },
    ],
  },
  {
    id: 'attentiveness_rating',
    title: 'How satisfied were you with the attentiveness of your waiter/waitress throughout your dining experience?',
    options: [
      { label: 'Very Satisfied',    value: 5 },
      { label: 'Satisfied',         value: 4 },
      { label: 'Neutral',           value: 3 },
      { label: 'Dissatisfied',      value: 2 },
      { label: 'Very Dissatisfied', value: 1 },
    ],
  },
  {
    id: 'menu_knowledge_rating',
    title: 'Did your waiter/waitress demonstrate good knowledge of the menu and answer your questions effectively?',
    options: [
      { label: 'Yes, completely', value: 4 },
      { label: 'Mostly',          value: 3 },
      { label: 'Somewhat',        value: 2 },
      { label: 'No',              value: 1 },
    ],
  },
  {
    id: 'service_speed_rating',
    title: 'How would you rate the speed and efficiency of the service?',
    options: [
      { label: 'Excellent', value: 4 },
      { label: 'Good',      value: 3 },
      { label: 'Fair',      value: 2 },
      { label: 'Poor',      value: 1 },
    ],
  },
  {
    id: 'food_quality_rating',
    title: 'How would you rate the quality of the food?',
    options: [
      { label: 'Excellent',     value: 5 },
      { label: 'Good',          value: 4 },
      { label: 'Average',       value: 3 },
      { label: 'Below average', value: 2 },
      { label: 'Poor',          value: 1 },
    ],
  },
  {
    id: 'cleanliness_rating',
    title: 'How would you rate the cleanliness of the restaurant?',
    options: [
      { label: 'Excellent',     value: 5 },
      { label: 'Good',          value: 4 },
      { label: 'Average',       value: 3 },
      { label: 'Below average', value: 2 },
      { label: 'Poor',          value: 1 },
    ],
  },
  {
    id: 'overall_rating',
    title: 'How would you rate your overall dining experience?',
    options: [
      { label: 'Excellent',     value: 5 },
      { label: 'Good',          value: 4 },
      { label: 'Average',       value: 3 },
      { label: 'Below average', value: 2 },
      { label: 'Poor',          value: 1 },
    ],
  },

  // ── Bartender ─────────────────────────────────────────────────────────────
  {
    id: 'bartender_friendliness_rating',
    section: 'Bartender',
    title: "How would you rate the bartender's friendliness and professionalism during your visit?",
    options: [
      { label: 'Excellent', value: 4 },
      { label: 'Good',      value: 3 },
      { label: 'Fair',      value: 2 },
      { label: 'Poor',      value: 1 },
    ],
  },
  {
    id: 'bartender_drink_knowledge_rating',
    title: "How satisfied were you with the bartender's knowledge of drinks, cocktails, and beverage recommendations?",
    options: [
      { label: 'Very Satisfied',    value: 5 },
      { label: 'Satisfied',         value: 4 },
      { label: 'Neutral',           value: 3 },
      { label: 'Dissatisfied',      value: 2 },
      { label: 'Very Dissatisfied', value: 1 },
    ],
  },
  {
    id: 'bartender_speed_rating',
    title: 'How would you rate the speed and efficiency of service provided by the bartender?',
    options: [
      { label: 'Excellent', value: 4 },
      { label: 'Good',      value: 3 },
      { label: 'Fair',      value: 2 },
      { label: 'Poor',      value: 1 },
    ],
  },
  {
    id: 'bartender_welcome_rating',
    title: 'Did the bartender make you feel welcomed and valued as a guest?',
    options: [
      { label: 'Always',          value: 5 },
      { label: 'Most of the Time', value: 4 },
      { label: 'Sometimes',       value: 3 },
      { label: 'Rarely',          value: 2 },
      { label: 'Never',           value: 1 },
    ],
  },
  {
    id: 'bartender_overall_rating',
    title: 'Overall, how satisfied were you with your experience at the bar?',
    options: [
      { label: 'Very Satisfied',    value: 5 },
      { label: 'Satisfied',         value: 4 },
      { label: 'Neutral',           value: 3 },
      { label: 'Dissatisfied',      value: 2 },
      { label: 'Very Dissatisfied', value: 1 },
    ],
  },

  // ── Hostess ───────────────────────────────────────────────────────────────
  {
    id: 'hostess_friendliness_rating',
    section: 'Hostess',
    title: "How would you rate the hostess's friendliness and professionalism upon your arrival?",
    options: [
      { label: 'Excellent', value: 4 },
      { label: 'Good',      value: 3 },
      { label: 'Fair',      value: 2 },
      { label: 'Poor',      value: 1 },
    ],
  },
  {
    id: 'hostess_seating_rating',
    title: "How satisfied were you with the hostess's efficiency in managing seating and wait times?",
    options: [
      { label: 'Very Satisfied',    value: 5 },
      { label: 'Satisfied',         value: 4 },
      { label: 'Neutral',           value: 3 },
      { label: 'Dissatisfied',      value: 2 },
      { label: 'Very Dissatisfied', value: 1 },
    ],
  },
  {
    id: 'hostess_welcome_rating',
    title: 'Did the hostess make you feel welcomed and appreciated as a guest?',
    options: [
      { label: 'Always',           value: 5 },
      { label: 'Most of the Time', value: 4 },
      { label: 'Sometimes',        value: 3 },
      { label: 'Rarely',           value: 2 },
      { label: 'Never',            value: 1 },
    ],
  },
  {
    id: 'hostess_communication_rating',
    title: 'How effectively did the hostess communicate wait times, reservations, or seating arrangements?',
    options: [
      { label: 'Excellent', value: 4 },
      { label: 'Good',      value: 3 },
      { label: 'Fair',      value: 2 },
      { label: 'Poor',      value: 1 },
    ],
  },
  {
    id: 'hostess_overall_rating',
    title: 'Overall, how would you rate your first impression of the restaurant based on your interaction with the hostess?',
    options: [
      { label: 'Excellent', value: 4 },
      { label: 'Good',      value: 3 },
      { label: 'Fair',      value: 2 },
      { label: 'Poor',      value: 1 },
    ],
  },
];

export const RECOMMENDATION_OPTIONS: RecommendationOption[] = [
  { label: 'Very Likely',   value: 'Very Likely' },
  { label: 'Likely',        value: 'Likely' },
  { label: 'Neutral',       value: 'Neutral' },
  { label: 'Unlikely',      value: 'Unlikely' },
  { label: 'Very Unlikely', value: 'Very Unlikely' },
];