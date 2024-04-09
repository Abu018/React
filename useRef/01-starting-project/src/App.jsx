import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChanllenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges"></div>
      <TimerChallenge title="easy" targetTime={1} />
      <TimerChallenge title="noteasy" targetTime={5} />
      <TimerChallenge title="gettingTough" targetTime={10} />
      <TimerChallenge title="propsonly" targetTime={20} />
    </>
  );
}

export default App;
