import type { Thought } from "../types/Thought";

export const ThoughtCard = ({
  id,
  text,
  createdAt,
  displayNumber,
  onDelete,
}: Thought) => {
  const formattedDate = createdAt
    ? new Date(createdAt)
        .toLocaleDateString("en-EN", {
          month: "short",
          hour: "2-digit",
          minute: "2-digit",
        })
        .replace(/^./, (str) => str.toUpperCase())
    : "-";

  return (
    <div className="relative bg-slate-800/80 backdrop-blur border border-slate-700/60 rounded-2xl px-6 py-5 shadow-xl text-white w-full max-w-4xl mx-auto hover:border-slate-500 hover:shadow-2xl transition-all duration-200">
      <button
        onClick={() => onDelete(id)}
        className="absolute top-2 right-2 text-slate-400 hover:text-red-400 hover:bg-slate-700/50 p-1 rounded-lg transition-colors cursor-pointer"
        title="Удалить"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 min-w-0 pr-4">
        <span className="bg-slate-800/60 border border-slate-700/50 text-slate-300 px-3 py-1 rounded-lg text-sm font-mono shadow-inner">
          #{displayNumber}
        </span>

        <p className="text-slate-100 text-left font-medium text-base leading-relaxed break-all min-w-0 px-2">
          {text}
        </p>

        <span className="text-slate-400 text-xs font-semibold whitespace-nowrap bg-slate-900/60 px-2 py-1.5 rounded-lg border border-slate-800/80">
          {formattedDate}
        </span>
      </div>
    </div>
  );
};
