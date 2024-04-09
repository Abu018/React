import { useState } from "react";

import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";

import ConfigureCounter from "./components/Counter/ConfigureCounter.jsx";

function App() {
  const [chosenCount, setChosenCount] = useState(0);
  function handSetCount(newCount) {
    setChosenCount(newCount);
  }
  console.log("app");
  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handSetCount} />
        <Counter initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
