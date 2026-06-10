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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-5 pt-12 pb-8 text-white">
        <p className="text-amber-100 text-xs font-medium uppercase tracking-widest mb-1">
          Feedback Form
        </p>
        <h1 className="text-2xl font-bold mb-1">{restaurant.name}</h1>
        <p className="text-amber-100 text-sm">{restaurant.location}</p>
      </div>

      {/* Body */}
      <div className="px-4 py-6 flex flex-col gap-4 max-w-lg mx-auto pb-10">

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
          <div className="bg-rose-50 border border-rose-200 rounded-xl px-4 py-3 text-rose-600 text-sm">
            {submitError}
          </div>
        )}

        <button
          type="button"
          onClick={handleSubmit}
          disabled={submitStatus === 'submitting'}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500
            text-white font-bold text-base shadow-lg shadow-amber-200
            hover:opacity-90 active:scale-95 transition-all duration-200
            disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitStatus === 'submitting' ? 'Submitting...' : 'Submit Feedback'}
        </button>
      </div>
    </div>
  );
}