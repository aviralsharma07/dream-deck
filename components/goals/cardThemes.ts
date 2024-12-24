export const cardThemes = {
  superhero: {
    background: "bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500",
    text: "font-['Permanent_Marker'] text-white",
    border: "border-blue-400/50 shadow-xl shadow-blue-500/20",
    accent: "bg-yellow-400 text-blue-900 uppercase tracking-wider",
    tag: "bg-white/20 text-white border-none",
  },
  zen: {
    background: "bg-stone-50 dark:bg-stone-900 zen-texture",
    text: "font-['Homemade_Apple'] text-stone-800 dark:text-stone-100",
    border: "border-stone-200/50 dark:border-stone-800/50 shadow-lg",
    accent: "bg-stone-800 dark:bg-stone-100 text-stone-100 dark:text-stone-800",
    tag: "bg-stone-800/10 dark:bg-stone-100/10 border-none",
  },
  cyberpunk: {
    background: "bg-black cyberpunk-grid",
    text: "font-['Press_Start_2P'] text-[#00ff9d] text-sm",
    border: "border-[#00ff9d]/50 shadow-lg shadow-[#00ff9d]/20",
    accent: "bg-[#ff00ff] text-black uppercase tracking-widest",
    tag: "bg-[#00ff9d]/10 text-[#00ff9d] border-[#00ff9d]/30",
  },
  parchment: {
    background: "bg-amber-50 parchment-texture",
    text: "font-serif text-amber-900 italic",
    border: "border-amber-900/20 shadow-amber-900/10",
    accent: "bg-amber-900 text-amber-50",
    tag: "bg-amber-900/5 text-amber-900/70 border-amber-900/20",
  },
  aurora: {
    background: "bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500",
    text: "font-['Space_Mono'] text-white",
    border: "border-white/20 shadow-lg backdrop-blur-sm",
    accent: "bg-white/90 text-teal-900 font-bold",
    tag: "bg-white/10 text-white/90 border-white/20",
  },
} as const;
