import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { PACE, CATEGORIES, INITIAL_CARDS_COUNT } from '../../constants.js';

import Counter from '../Counter';
import RadioBox from '../RadioBox';

import styles from './Settings.module.css';

const Settings = ({ startGame }) => {
    const [pace, setPace] = useState(PACE[0]);
    const [category, setCategory] = useState(CATEGORIES[0]);
    const [cardsCount, setCardCount] = useState(INITIAL_CARDS_COUNT);

    const onStartGameClick = () => {
        startGame({ category, pace, cardsCount });
    };

    return (
        <div className={`${styles.settings} frosted`}>
            <h2>Settings</h2>

            <h4>Category:</h4>
            <div className={styles.setting}>
                {CATEGORIES.map(item => (
                    <RadioBox
                        key={item}
                        name={item}
                        selectedItem={category}
                        onChange={e => setCategory(e.target.value)}
                    />
                ))}
            </div>

            <h4>Amount of cards:</h4>
            <div className={styles.setting}>
                <Counter count={cardsCount} onClick={setCardCount} />
            </div>

            <h4>Pace:</h4>
            <div className={styles.setting}>
                {PACE.map(item => (
                    <RadioBox key={item} name={item} selectedItem={pace} onChange={e => setPace(e.target.value)} />
                ))}
            </div>

            <button className={`${styles.button} frosted`} onClick={onStartGameClick}>
                Start
            </button>
        </div>
    );
};

export default Settings;

Settings.propTypes = {
    startGame: PropTypes.func.isRequired,
};
