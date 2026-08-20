import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AllTasks = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div className="bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-slate-800 shadow-xl my-6">
      <h2 className="text-lg font-extrabold text-white tracking-tight mb-4 flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
        Employee Task Overview
      </h2>

      {/* Header */}
      <div className="bg-slate-800/80 text-slate-400 py-3 px-4 grid grid-cols-5 text-xs font-semibold uppercase tracking-wider rounded-xl mb-3 border border-slate-700/50">
        <h2>Employee Name</h2>
        <h3 className="text-center">New Task</h3>
        <h3 className="text-center">Active</h3>
        <h3 className="text-center">Completed</h3>
        <h3 className="text-center">Failed</h3>
      </div>

      {/* Employee List */}
      <div className="max-h-[320px] overflow-y-auto space-y-2 pr-1">
        {userData?.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="py-3 px-4 grid grid-cols-5 items-center border border-slate-800 hover:border-slate-700/80 rounded-xl bg-[#0b0f17]/60 hover:bg-slate-800/40 transition-all duration-200"
            >
              {/* Name */}
              <h2 className="text-white font-semibold text-sm">
                {elem.firstName}
              </h2>

              {/* New Task */}
              <h3 className="text-rose-400 font-bold text-center text-sm">
                {elem.taskStats?.newTask || 0}
              </h3>

              {/* Active */}
              <h3 className="text-indigo-400 font-bold text-center text-sm">
                {elem.taskStats?.active || 0}
              </h3>

              {/* Completed */}
              <h3 className="text-emerald-400 font-bold text-center text-sm">
                {elem.taskStats?.completed || 0}
              </h3>

              {/* Failed */}
              <h3 className="text-amber-400 font-bold text-center text-sm">
                {elem.taskStats?.failed || 0}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTasks;