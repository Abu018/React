import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";
import React, { useState } from "react";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";
import "./components/TabButton.css";
function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(value) {
    setSelectedTopic(value);
    console.log(selectedTopic);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((dataItem) => (
              <CoreConcepts key={dataItem.title} {...dataItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <button className="horizontal-buttons">
              <TabButton
                isSelected={selectedTopic === "components"}
                onClicked={() => handleSelect("components")}
              >
                Components
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "jsx"}
                onClicked={() => handleSelect("jsx")}
              >
                JSX
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "props"}
                onClicked={() => handleSelect("props")}
              >
                Props
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "state"}
                onClicked={() => handleSelect("state")}
              >
                State
              </TabButton>
            </button>
          </menu>

          {!selectedTopic ? (
            <p>Please Select a Topic</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
