import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AllTasks = () => {
  const authData = useContext(AuthContext);

  return (
    <div className="bg-[#1f2937] p-5 rounded-xl mt-5 h-78  ">

      {/* Header */}
      <div className="bg-pink-400 py-3 px-4 grid grid-cols-5 mb-2 rounded-lg">
        <h2>Name</h2>
        <h3 className="text-center">New Task</h3>
        <h3 className="text-center">Active</h3>
        <h3 className="text-center">Completed</h3>
        <h3 className="text-center">Failed</h3>
      </div>

      {/* Employee List */}
      <div className="h-[75%]  overflow-y-auto">

        {authData?.employees?.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="py-3 px-3 grid grid-cols-5 items-center border-2 border-emerald-500 rounded-lg bg-transparent mt-2"
            >

              {/* Name */}
              <h2 className="text-white font-bold ">
                {elem.firstName}
              </h2>

              {/* New Task */}
              <h3 className="text-blue-500 font-bold text-center">
                {elem.taskStats.newTask}
              </h3>

              {/* Active */}
              <h3 className="text-yellow-400 font-bold text-center">
                {elem.taskStats.active}
              </h3>

              {/* Completed */}
              <h3 className="text-green-500 font-bold text-center">
                {elem.taskStats.completed}
              </h3>

              {/* Failed */}
              <h3 className="text-red-500 font-bold text-center">
                {elem.taskStats.failed}
              </h3>

            </div>
          );
        })}

      </div>
    </div>
  );
};

export default AllTasks;