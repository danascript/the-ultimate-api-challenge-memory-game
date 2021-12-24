import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import useGameLogic from '../../hooks/useGameLogic';
import useGetImages from '../../hooks/useGetImages';
import Loader from '../Loader';
import Result from '../Result';

import Card from './../Card';

import styles from './Board.module.css';

const Board = ({ gameOptions, restartGame }) => {
    const [isLoading, setIsLoading] = useState(true);

    const { images } = useGetImages(gameOptions);
    const { isWin, cards, onCardClick } = useGameLogic(images, gameOptions.pace);

    useEffect(() => {
        if (images.length > 0) setIsLoading(false);
    }, [images]);

    return (
        <>
            {isWin && <Result restartGame={restartGame} />}

            {isLoading ? (
                <Loader />
            ) : (
                <div className={styles.board}>
                    {cards.map((card, index) => (
                        <Card key={index} card={card} onCardClick={onCardClick} />
                    ))}
                </div>
            )}
        </>
    );
};

export default Board;

Board.propTypes = {
    gameOptions: PropTypes.shape({
        pace: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
    }),
    restartGame: PropTypes.func.isRequired,
};
