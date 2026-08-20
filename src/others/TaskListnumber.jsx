import React from "react";

const TaskListnumber = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-6">
      {/* New Task */}
      <div className="p-6 rounded-2xl bg-slate-900/90 border border-rose-500/30 shadow-lg shadow-rose-950/10 flex flex-col justify-between transition-all hover:border-rose-500/50">
        <h2 className="text-4xl font-black text-rose-400 tracking-tight">{data?.taskStats?.newTask || 0}</h2>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-4">New Task</h3>
      </div>

      {/* Completed */}
      <div className="p-6 rounded-2xl bg-slate-900/90 border border-emerald-500/30 shadow-lg shadow-emerald-950/10 flex flex-col justify-between transition-all hover:border-emerald-500/50">
        <h2 className="text-4xl font-black text-emerald-400 tracking-tight">{data?.taskStats?.completed || 0}</h2>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-4">Completed</h3>
      </div>

      {/* Accepted */}
      <div className="p-6 rounded-2xl bg-slate-900/90 border border-indigo-500/30 shadow-lg shadow-indigo-950/10 flex flex-col justify-between transition-all hover:border-indigo-500/50">
        <h2 className="text-4xl font-black text-indigo-400 tracking-tight">{data?.taskStats?.active || 0}</h2>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-4">Accepted</h3>
      </div>

      {/* Failed */}
      <div className="p-6 rounded-2xl bg-slate-900/90 border border-amber-500/30 shadow-lg shadow-amber-950/10 flex flex-col justify-between transition-all hover:border-amber-500/50">
        <h2 className="text-4xl font-black text-amber-400 tracking-tight">{data?.taskStats?.failed || 0}</h2>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-4">Failed</h3>
      </div>
    </div>
  );
};

export default TaskListnumber;