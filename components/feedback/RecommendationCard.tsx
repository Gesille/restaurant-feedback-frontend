'use client';

import { Recommendation } from '@/types/feedback.types';
import { RECOMMENDATION_OPTIONS } from '@/config/questions.config';

interface Props {
  selected: Recommendation | null;
  onSelect: (value: Recommendation) => void;
}

const EMOJI_MAP: Record<Recommendation, string> = {
  'Very Likely':   '😍',
  'Likely':        '😊',
  'Neutral':       '😐',
  'Unlikely':      '😕',
  'Very Unlikely': '😞',
};

const COLOR_MAP: Record<Recommendation, string> = {
  'Very Likely':   'border-emerald-400 bg-emerald-400 text-white',
  'Likely':        'border-teal-400    bg-teal-400    text-white',
  'Neutral':       'border-amber-400   bg-amber-400   text-white',
  'Unlikely':      'border-orange-400  bg-orange-400  text-white',
  'Very Unlikely': 'border-rose-400    bg-rose-400    text-white',
};

export function RecommendationCard({ selected, onSelect }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
      <div className="flex items-start gap-3 mb-4">
        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-violet-400 flex items-center justify-center text-xs font-bold text-white">
          ★
        </span>
        <p className="text-gray-700 font-medium text-sm leading-snug">
          Based on the service you received, how likely are you to return or recommend us to others?
        </p>
      </div>
      <div className="flex flex-col gap-2">
        {RECOMMENDATION_OPTIONS.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onSelect(opt.value)}
            className={`
              w-full py-3 px-4 rounded-xl border-2 text-sm font-medium transition-all duration-200
              flex items-center gap-3
              ${selected === opt.value
                ? COLOR_MAP[opt.value]
                : 'border-gray-200 bg-white text-gray-600 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700'
              }
            `}
          >
            <span className="text-lg">{EMOJI_MAP[opt.value]}</span>
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}