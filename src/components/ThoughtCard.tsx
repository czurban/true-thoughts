import type { Thought } from "../types/Thought";

export const ThoughtCard = ({ id, text, createdAt }: Thought) => {
  const formattedDate = createdAt
    ? new Date(createdAt).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "—";

  return (
    <div className="bg-slate-800/80 backdrop-blur border border-slate-700/60 rounded-xl p-4 shadow-lg text-white w-full hover:border-slate-500 transition-all">
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
        <span className="bg-slate-700 text-slate-300 font-mono text-xs px-2.5 py-1 rounded-md font-semibold">
          #{id}
        </span>

        <p className="text-slate-100 text-left font-medium text-sm leading-snug break-words">
          {text}
        </p>

        <span className="text-slate-400 text-xs font-medium whitespace-nowrap bg-slate-900/50 px-2.5 py-1 rounded-md border border-slate-800">
          {formattedDate}
        </span>
      </div>
    </div>
  );
};
