'use client';

interface Props {
  customerName: string;
  waiterName: string;
  onCustomerNameChange: (val: string) => void;
  onWaiterNameChange: (val: string) => void;
}

export function CustomerInfoCard({
  customerName,
  waiterName,
  onCustomerNameChange,
  onWaiterNameChange,
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
      <h3 className="text-gray-700 font-semibold text-sm mb-4">Your Details</h3>
      <div className="flex flex-col gap-3">
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Your Name</label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => onCustomerNameChange(e.target.value)}
            placeholder="e.g. John Smith"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-sm text-gray-700 placeholder-gray-300
              focus:outline-none focus:border-amber-400 transition"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Waiter / Waitress Name</label>
          <input
            type="text"
            value={waiterName}
            onChange={(e) => onWaiterNameChange(e.target.value)}
            placeholder="e.g. Maria"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-sm text-gray-700 placeholder-gray-300
              focus:outline-none focus:border-amber-400 transition"
          />
        </div>
      </div>
    </div>
  );
}