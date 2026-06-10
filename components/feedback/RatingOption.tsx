'use client';

interface Props {
  label: string;
  selected: boolean;
  onSelect: () => void;
  color?: 'amber' | 'rose' | 'emerald' | 'violet';
}

const colorMap = {
  amber:   'border-amber-400  bg-amber-400  text-white',
  rose:    'border-rose-400   bg-rose-400   text-white',
  emerald: 'border-emerald-400 bg-emerald-400 text-white',
  violet:  'border-violet-400 bg-violet-400 text-white',
};

const hoverMap = {
  amber:   'hover:border-amber-400  hover:bg-amber-50  hover:text-amber-700',
  rose:    'hover:border-rose-400   hover:bg-rose-50   hover:text-rose-700',
  emerald: 'hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-700',
  violet:  'hover:border-violet-400 hover:bg-violet-50 hover:text-violet-700',
};

export function RatingOption({ label, selected, onSelect, color = 'amber' }: Props) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`
        w-full py-3 px-4 rounded-xl border-2 text-sm font-medium transition-all duration-200
        ${selected
          ? colorMap[color]
          : `border-gray-200 bg-white text-gray-600 ${hoverMap[color]}`
        }
      `}
    >
      {label}
    </button>
  );
}