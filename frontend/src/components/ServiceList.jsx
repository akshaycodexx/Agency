import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function ServiceList({ services }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {services.map((service) => {
        const Icon = service.icon;
        const isHovered = hoveredId === service.id;

        return (
          <div
            key={service.id}
            onMouseEnter={() => setHoveredId(service.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={`group py-6 sm:py-8 px-4 sm:px-8 transition-all duration-300 rounded-2xl cursor-pointer ${
              isHovered
                ? 'bg-[#0a0f1d] shadow-[0_0_30px_rgba(59,130,246,0.2)] border-l-4 border-l-blue-500 pl-6 sm:pl-10'
                : 'hover:bg-[#0a0f1d]/60'
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start md:items-center space-x-5">
                <span className="font-display font-extrabold text-2xl sm:text-3xl text-blue-400 group-hover:text-blue-300 min-w-[3rem]">
                  {service.id}
                </span>
                <div className="space-y-1">
                  <div className="flex items-center space-x-3">
                    {Icon && <Icon className="w-5 h-5 text-blue-400 group-hover:text-orange-400 transition-colors" />}
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 self-end md:self-auto shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 group-hover:bg-blue-600 text-white border border-white/15 group-hover:border-blue-500 transition-all shadow-md"
                >
                  <span>Discuss Service</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
