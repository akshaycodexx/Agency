import { Loader2 } from 'lucide-react';

export function LoadingState({ message = 'Loading content...' }) {
  return (
    <div className="py-16 text-center space-y-4">
      <Loader2 className="w-8 h-8 text-blue-600 animate-spin mx-auto" />
      <p className="text-slate-500 text-sm font-medium">{message}</p>
    </div>
  );
}

export function EmptyState({ title = 'No items found', message = 'Check back later for updates.' }) {
  return (
    <div className="py-16 text-center space-y-2 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
      <h4 className="font-display font-bold text-slate-800 text-base">{title}</h4>
      <p className="text-slate-500 text-sm">{message}</p>
    </div>
  );
}

export function ErrorState({ message = 'Failed to load content. Please try again.' }) {
  return (
    <div className="py-12 text-center text-rose-600 bg-rose-50 rounded-2xl border border-rose-200 p-6">
      <p className="text-sm font-semibold">{message}</p>
    </div>
  );
}
