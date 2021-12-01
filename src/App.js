import React, { useState } from 'react';
import GameHandler from './components/game-handler';

export default function App() {
  const [username, setUsername] = useState("");
  const [isStart, setIsStart] = useState(false);

  const handleStart = () => {
    setIsStart(true);
  }
  
  return (
    <div className='app'>
      {isStart 
        ? <GameHandler username={username}/>
        : 
        <>
          <div>
            <h3>English Game</h3>
            <input
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={() => handleStart()}>Start</button>
          </div>
        </>
      }
    </div>
  );
}
