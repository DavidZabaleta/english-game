import React, { useState } from 'react';
import GameHandler from './components/game-handler';
import './App.css'

export default function App() {
  const [username, setUsername] = useState("");
  const [isStart, setIsStart] = useState(false);

  const handleStart = () => {
    setIsStart(true);
  }

  const handleOnKeyDown = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      handleStart();
    }
  }
  
  return (
    <div className='app'>
      {isStart 
        ? <GameHandler username={username}/>
        : 
        <>
          <div>
            <h1>Welcome to English-Easy</h1>
            <div className='app-body'>
              <label>Enter your nickname:</label>
              <input
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={(e) => handleOnKeyDown(e)}
              />
              <button onClick={() => handleStart()}>Start</button>
            </div>
          </div>
        </>
      }
    </div>
  );
}
