import { useState } from 'react';

import Board from './components/Board';
import Settings from './components/Settings';
import Background from './components/Background';

function App() {
    const [gameOptions, setGameOptions] = useState(null);

    const startGame = ({ category, pace, cardsCount }) => {
        setGameOptions({ category, pace, count: cardsCount });
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
