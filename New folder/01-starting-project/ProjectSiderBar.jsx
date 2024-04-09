import React from "react";

export default function ProjectSidebar() {
  return (
    <aside className="w-1/3 px-8 py-6 bg-stone-900 text-stone-50 md:w-7/12 rounded-r-xl">
      <h2 className="mb-4 font-bold text-xl uppercase text-stone-400">
        Your Projects
      </h2>
      <div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
          + Add Project
        </button>
      </div>
    </aside>
  );
}
