'use client';

interface Props {
  message?: string;
}

export function LoadingSpinner({ message = 'Loading...' }: Props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-amber-200 border-t-amber-500 rounded-full animate-spin" />
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-b-orange-400 rounded-full animate-spin animation-delay-150" />
      </div>
      <p className="mt-4 text-amber-700 font-medium text-sm tracking-wide">{message}</p>
    </div>
  );
}