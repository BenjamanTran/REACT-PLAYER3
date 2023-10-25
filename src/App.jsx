import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title='easy' tagetTime={1}/>
        <TimerChallenge title='Not easy' tagetTime={5}/>
        <TimerChallenge title='Getting tough' tagetTime={10}/>
        <TimerChallenge title='Pros only' tagetTime={15}/>
      </div>
    </>
  );
}

export default App;
