'use client';

interface Props {
  value: string;
  onChange: (val: string) => void;
}

export function CommentCard({ value, onChange }: Props) {
  return (
    <div className="bg-white rounded-3xl shadow-md border border-gray-300 p-5">
      <h3 className="text-gray-700 font-semibold text-sm mb-3">
        Any additional comments? <span className="text-gray-400 font-normal">(optional)</span>
      </h3>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        placeholder="Tell us more about your experience..."
        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 text-sm text-gray-700 placeholder-gray-300
          focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition resize-none"
      />
    </div>
  );
}