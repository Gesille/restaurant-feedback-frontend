'use client';

interface Props {
  restaurantName: string;
  onReset: () => void;
}

export function SuccessScreen({ restaurantName, onReset }: Props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 px-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full text-center border border-emerald-100">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-10 h-10 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h2>
        <p className="text-gray-500 text-sm mb-1">
          Your feedback has been submitted to
        </p>
        <p className="text-emerald-600 font-semibold text-base mb-6">{restaurantName}</p>
        <p className="text-gray-400 text-xs mb-6">
          We appreciate your time and will use your feedback to improve our service.
        </p>
        <button
          onClick={onReset}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold text-sm hover:opacity-90 transition"
        >
          Submit Another Response
        </button>
      </div>
    </div>
  );
}