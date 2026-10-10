import { motion } from 'framer-motion';
import { processSteps } from '../data/companyData';
import { UserCheck, Zap } from 'lucide-react';

export default function ProcessTimeline() {
  return (
    <div className="relative border-l-2 border-white/10 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12">
      {processSteps.map((step, idx) => (
        <motion.div
          key={step.step}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="relative group"
        >
          {/* Timeline Dot Indicator */}
          <div className="absolute -left-[31px] sm:-left-[47px] top-0 w-8 h-8 rounded-full bg-[#05070e] border-2 border-blue-500 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-orange-500 transition-all">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 group-hover:bg-orange-500 transition-colors" />
          </div>

          <div className="bg-[#0a0f1d] rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-blue-500/40 shadow-xl transition-all space-y-4">
            <div className="flex items-center space-x-3">
              <span className="font-display font-black text-3xl text-blue-400">
                {step.step}
              </span>
              <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
                Phase {step.step}
              </span>
            </div>

            <h3 className="font-display font-bold text-2xl text-white">
              {step.title}
            </h3>
            <p className="text-sm font-semibold text-orange-400">
              {step.tagline}
            </p>

            <p className="text-slate-300 text-sm leading-relaxed">
              {step.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <div className="flex items-center space-x-2 font-bold text-slate-200">
                  <UserCheck className="w-4 h-4 text-orange-400" />
                  <span>What You Provide:</span>
                </div>
                <p className="text-slate-300 text-xs leading-normal">{step.clientProvides}</p>
              </div>

              <div className="p-4 rounded-xl bg-blue-600/10 border border-blue-500/20 space-y-1">
                <div className="flex items-center space-x-2 font-bold text-blue-300">
                  <Zap className="w-4 h-4 text-blue-400" />
                  <span>Creativion Delivers:</span>
                </div>
                <p className="text-blue-100 text-xs leading-normal">{step.creativionDelivers}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
