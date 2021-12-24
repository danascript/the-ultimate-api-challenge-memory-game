import React from 'react';
import PropTypes from 'prop-types';

import styles from './Result.module.css';

const Result = ({ restartGame }) => (
    <div className={`frosted ${styles.container}`}>
        <p>Awesome!</p>
        <button className={`frosted ${styles.button}`} onClick={restartGame}>
            Finish Game
        </button>
    </div>
);

export default Result;

Result.propTypes = {
    restartGame: PropTypes.func.isRequired,
};
