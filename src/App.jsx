import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge key="1" title='easy' targetTime={1}/>
        <TimerChallenge key="2" title='Not easy' targetTime={5}/>
        <TimerChallenge key="3" title='Getting tough' targetTime={10}/>
        <TimerChallenge key="4" title='Pros only' targetTime={15}/>
      </div>
    </>
  );
}

export default App;
