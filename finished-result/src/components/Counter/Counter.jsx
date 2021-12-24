import React from 'react';
import PropTypes from 'prop-types';

import './Counter.css';

const STEP = 2;

const Counter = ({ count, onClick }) => {
    const onIncrement = e => {
        e.preventDefault();
        const number = count + STEP;
        if (number <= 160) onClick(number);
    };

    const onDecrement = e => {
        e.preventDefault();
        const number = count - STEP;
        if (number >= 2) onClick(number);
    };

    return (
        <div className="quantity">
            <button className="minus" onClick={onDecrement}>
                -
            </button>
            <span name="quantity" type="number">
                {count}
            </span>
            <button className="plus" onClick={onIncrement}>
                +
            </button>
        </div>
    );
};

export default Counter;

Counter.propTypes = {
    count: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
};
