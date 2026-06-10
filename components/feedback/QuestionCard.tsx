'use client';

import { RatingOption } from './RatingOption';
import { Rating } from '@/types/feedback.types';

interface Option {
  label: string;
  value: Rating;
}

interface Props {
  index: number;
  title: string;
  options: Option[];
  selected: Rating | null;
  onSelect: (value: Rating) => void;
  color?: 'amber' | 'rose' | 'emerald' | 'violet';
}

const colors = ['amber', 'rose', 'emerald', 'violet'] as const;

export function QuestionCard({ index, title, options, selected, onSelect, color }: Props) {
  const resolvedColor = color ?? colors[index % colors.length];

  return (
    <div className="bg-white rounded-3xl shadow-md border border-gray-300p-5">
      <div className="flex items-start gap-3 mb-4">
        <span className={`
          flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white
          ${resolvedColor === 'amber'   ? 'bg-amber-400'   : ''}
          ${resolvedColor === 'rose'    ? 'bg-rose-400'    : ''}
          ${resolvedColor === 'emerald' ? 'bg-emerald-400' : ''}
          ${resolvedColor === 'violet'  ? 'bg-violet-400'  : ''}
        `}>
          {index + 1}
        </span>
        <p className="text-gray-700 font-medium text-sm leading-snug">{title}</p>
      </div>
      <div className="flex flex-col gap-2">
        {options.map((opt) => (
          <RatingOption
            key={opt.value}
            label={opt.label}
            selected={selected === opt.value}
            onSelect={() => onSelect(opt.value)}
            color={resolvedColor}
          />
        ))}
      </div>
    </div>
  );
}