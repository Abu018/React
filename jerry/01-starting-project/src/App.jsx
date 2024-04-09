import SideBar from "./SideBar";
import React, { useState } from "react";
import Noproject from "./Noproject";
function App() {
  const [projectState, setProjectState] = useState({
    projectStateId: undefined,
    projects: [],
    projectName: "",
    projectDescription: "",
  });

  function handleAddProject(newProject) {
    setProjectState((prevState) => ({
      ...prevState,
      projects: [...prevState.projects, newProject],
      projectName: newProject.title,
      projectDescription: newProject.description,
      projectDueDate: newProject.dueDate,
    }));
  }
  console.log(projectState.length);
  return (
    <div className="flex">
      <SideBar projectsState={projectState.projects} />
      <Noproject onAdd={handleAddProject} />
    </div>
  );
}

export default App;
