export default function ProjectFilter({ categories, activeCategory, onSelectCategory }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12">
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              isActive
                ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] border border-blue-500 scale-105'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
