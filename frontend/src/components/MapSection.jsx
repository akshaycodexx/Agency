import { companyInfo } from '../data/companyData';
import { MapPin } from 'lucide-react';

export default function MapSection() {
  const embedUrl = import.meta.env.VITE_MAP_EMBED_URL || companyInfo.mapEmbedUrl;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg space-y-4">
      <div className="flex items-center space-x-3 text-slate-900 font-display font-bold text-xl">
        <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
          <MapPin className="w-5 h-5" />
        </div>
        <span>Find Us</span>
      </div>

      <p className="text-slate-600 text-sm">
        {companyInfo.address}
      </p>

      <div className="w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
        <iframe
          title="Creativion Office Location"
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
