'use client';

import { CustomerInfoCard } from './CustomerInfoCard';
import { QuestionCard } from './QuestionCard';
import { RecommendationCard } from './RecommendationCard';
import { CommentCard } from './CommentCard';
import { FEEDBACK_QUESTIONS } from '@/config/questions.config';
import { useFeedbackForm } from '@/hooks/useFeedbackForm';
import { RestaurantInfo, Rating, Recommendation } from '@/types/feedback.types';

interface Props {
  restaurant: RestaurantInfo;
  onSuccess: () => void;
}

export function FeedbackForm({ restaurant, onSuccess }: Props) {
  const {
    form,
    submitStatus,
    submitError,
    setField,
    setRating,
    setRecommendation,
    submit,
  } = useFeedbackForm(restaurant.id);

  async function handleSubmit() {
    const ok = await submit();
    if (ok) onSuccess();
  }

  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-amber-500 text-white pb-10 pt-14 px-6 rounded-b-[35px] shadow-lg">
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />

        <p className="uppercase tracking-[4px] text-orange-100 text-xs font-semibold mb-3">
          Feedback Form
        </p>

        <h1 className="text-3xl font-bold leading-tight">
          {restaurant.name}
        </h1>

        <p className="text-orange-100 mt-2 text-sm">
          📍 {restaurant.location}
        </p>
      </div>

      {/* Content */}
      <div className="max-w-xl mx-auto px-4 py-6 flex flex-col gap-5">

        {/* Welcome Card */}
        <div className="bg-orange-50 border border-orange-100 rounded-3xl p-5">
          <h2 className="font-bold text-gray-800 text-lg mb-1">
            We&apos;d love your feedback 💛
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Help us improve your dining experience by answering a few quick questions.
          </p>
        </div>

        {/* Customer Info */}
       <CustomerInfoCard
          customerName={form.customer_name}
          customerEmail={form.customer_email}
          waiterName={form.waiter_name}
          onCustomerNameChange={(v) => setField('customer_name', v)}
          onCustomerEmailChange={(v) => setField('customer_email', v)}
          onWaiterNameChange={(v) => setField('waiter_name', v)}
        />
        {/* Questions — grouped by section */}
        {FEEDBACK_QUESTIONS.map((q, i) => (
          <div key={q.id}>
            
            {q.section && (
              <div className="flex items-center gap-3 mt-2 mb-1">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  {q.section}
                </span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>
            )}
            <QuestionCard
              index={i}
              title={q.title}
              options={q.options}
              selected={form[q.id] as Rating | null}
              onSelect={(val) => setRating(q.id, val)}
            />
          </div>
        ))}

        {/* Recommendation */}
        <RecommendationCard
          selected={form.recommendation}
          onSelect={(val: Recommendation) =>
            setRecommendation(val)
          }
        />

        {/* Comment */}
        <CommentCard
          value={form.comment}
          onChange={(v) => setField('comment', v)}
        />

        {/* Error */}
        {submitError && (
          <div className="bg-red-50 border border-red-200 rounded-2xl px-4 py-4 text-red-600 text-sm font-medium">
            {submitError}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="button"
          onClick={handleSubmit}
          disabled={submitStatus === 'submitting'}
          className="
            w-full rounded-2xl py-4
            bg-gradient-to-r from-orange-500 to-amber-500
            text-white font-bold text-base
            shadow-lg shadow-orange-200
            hover:scale-[1.02]
            active:scale-[0.98]
            transition-all duration-300
            disabled:opacity-50
          "
        >
          {submitStatus === 'submitting'
            ? 'Submitting...'
            : 'Submit Feedback'}
        </button>

        <p className="text-center text-xs text-gray-400 pb-6">
          Thank you for helping us improve 🙌
        </p>
      </div>
    </div>
  );
}