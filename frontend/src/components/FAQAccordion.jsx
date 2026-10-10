import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqList } from '../data/companyData';

export default function FAQAccordion({ items = faqList }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={`border rounded-3xl transition-all duration-300 overflow-hidden ${
              isOpen
                ? 'bg-[#0a0f1d] border-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.25)]'
                : 'bg-[#0a0f1d]/60 hover:bg-[#0a0f1d] border-white/10'
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-6 py-5.5 flex items-center justify-between gap-4 cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="font-display font-bold text-base sm:text-lg text-white">
                {item.q}
              </span>
              <div
                className={`p-2 rounded-full transition-transform duration-300 ${
                  isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-white/10 text-slate-400'
                }`}
              >
                <ChevronDown className="w-5 h-5" />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="px-6 pb-6 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/10 mt-1">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
