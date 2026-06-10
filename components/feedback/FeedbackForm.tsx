'use client';

import { CustomerInfoCard }    from './CustomerInfoCard';
import { QuestionCard }        from './QuestionCard';
import { RecommendationCard }  from './RecommendationCard';
import { CommentCard }         from './CommentCard';
import { FEEDBACK_QUESTIONS }  from '@/config/questions.config';
import { useFeedbackForm }     from '@/hooks/useFeedbackForm';
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
    <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 px-5 pt-12 pb-8 text-white shadow-md">
      <p className="text-orange-100 text-xs font-medium uppercase tracking-widest mb-1">
        Feedback Form
      </p>

      <h1 className="text-3xl font-bold mb-1">
        {restaurant.name}
      </h1>

      <p className="text-orange-100 text-sm">
        {restaurant.location}
      </p>
    </div>

    {/* Body */}
    <div className="px-4 py-6 flex flex-col gap-5 max-w-lg mx-auto pb-10">

      <CustomerInfoCard
        customerName={form.customer_name}
        waiterName={form.waiter_name}
        onCustomerNameChange={(v) => setField('customer_name', v)}
        onWaiterNameChange={(v) => setField('waiter_name', v)}
      />

      {FEEDBACK_QUESTIONS.map((q, i) => (
        <QuestionCard
          key={q.id}
          index={i}
          title={q.title}
          options={q.options}
          selected={form[q.id] as Rating | null}
          onSelect={(val) => setRating(q.id, val)}
        />
      ))}

      <RecommendationCard
        selected={form.recommendation}
        onSelect={(val: Recommendation) => setRecommendation(val)}
      />

      <CommentCard
        value={form.comment}
        onChange={(v) => setField('comment', v)}
      />

      {submitError && (
        <div className="bg-red-50 border border-red-200 rounded-2xl px-4 py-3 text-red-600 text-sm">
          {submitError}
        </div>
      )}

      <button
        type="button"
        onClick={handleSubmit}
        disabled={submitStatus === 'submitting'}
        className="
          w-full py-4 rounded-2xl
          bg-gradient-to-r from-orange-500 to-amber-500
          text-white font-bold text-base
          shadow-lg hover:opacity-95
          active:scale-95 transition-all duration-200
          disabled:opacity-60 disabled:cursor-not-allowed
        "
      >
        {submitStatus === 'submitting'
          ? 'Submitting...'
          : 'Submit Feedback'}
      </button>
    </div>
  </div>
);
}