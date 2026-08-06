import React from "react";

const TaskListnumber = () => {
  console.log("TaskListnumber Rendered");

  return (
    <div className="flex p-6  mt-10 justify-between gap-5 ">
      <div className=" p-6 h-40 w-[40%] bg-red-300 rounded-xl">
        <h2 className=" mb-10 text-4xl font-bold ">0</h2>
        <h3 className="text-2xl font-serif">New Task</h3>
      </div>
      <div className=" p-6 h-40 w-[40%] bg-blue-300 rounded-xl">
        <h2 className=" mb-10 text-4xl font-bold ">0</h2>
        <h3 className="text-2xl font-serif">Cpmpleted</h3>
      </div>
      <div className=" p-6 h-40 w-[40%] bg-green-300 rounded-xl">
        <h2 className=" mb-10 text-4xl font-bold ">0</h2>
        <h3 className="text-2xl font-serif">Accepted</h3>
      </div>
      <div className=" p-6 h-40 w-[40%] bg-yellow-300 rounded-xl">
        <h2 className=" mb-10 text-4xl font-bold ">0</h2>
        <h3 className="text-2xl font-serif">Failed</h3>
      </div>

    </div>
  );
};

export default TaskListnumber;