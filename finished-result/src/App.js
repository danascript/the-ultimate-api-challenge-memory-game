import { useState } from 'react';

import Background from './components/Background';
import Board from './components/Board';
import Settings from './components/Settings';

function App() {
    const [gameOptions, setGameOptions] = useState(null);

    const startGame = options => {
        setGameOptions(options);
    };

    const restartGame = () => {
        setGameOptions(null);
    };

    return (
        <>
            <Background />
            <h1>Memory Game</h1>
            {!gameOptions ? (
                <Settings startGame={startGame} />
            ) : (
                <Board gameOptions={gameOptions} restartGame={restartGame} />
            )}
        </>
    );
}

export default App;
