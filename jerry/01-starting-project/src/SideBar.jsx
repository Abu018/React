import React from "react";

export default function SideBar({ projectsState }) {
  return (
    <div>
      <button>+ Add Button</button>
      <div>
        <ul>
          {projectsState.map((project) => (
            <div key={project.title}>{project.title}</div>
          ))}
        </ul>
      </div>
    </div>
  );
}
