import React, { useRef, useState } from "react";
import img from "./assets/no-projects.png";
import Input from "./Input";

const Noproject = ({ onAdd }) => {
  const [value, setValue] = useState(false);
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleInput() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });

    title.current.value = "";
    description.current.value = "";
    dueDate.current.value = "";
  }

  function handleCreateAProject() {
    setValue((preValue) => !preValue);
  }

  return (
    <div className="flex flex-col items-center justify-center">
      {value ? (
        <div>
          <Input ref={title} type="text" placeholder="Title" />
          <Input ref={description} type="text" placeholder="Description" />
          <Input ref={dueDate} type="date" placeholder="Due Date" />
          <button onClick={handleInput}>Save</button>
        </div>
      ) : (
        <div>
          <p className="text-center">This is just a project </p>
          <img
            src={img}
            alt="abu"
            style={{ maxWidth: "300px", height: "auto" }}
          />
          <button onClick={handleCreateAProject}>+ Create a Project </button>
        </div>
      )}
    </div>
  );
};

export default Noproject;
